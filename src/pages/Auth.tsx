import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable/index';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) navigate('/dashboard', { replace: true });
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setSubmitting(true);

    if (isLogin) {
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      if (err) setError(err.message);
      else navigate('/dashboard');
    } else {
      const { error: err } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin },
      });
      if (err) {
        setError(err.message);
      } else {
        // Save phone number to profile if provided
        if (phone.trim()) {
          const { data: { session } } = await supabase.auth.getSession();
          if (session?.user) {
            await supabase.from('profiles').update({ phone: phone.trim() } as any).eq('id', session.user.id);
          }
        }
        setMessage('Check your email to confirm your account.');
      }
    }
    setSubmitting(false);
  };

  const handleGoogleSignIn = async () => {
    setError('');
    const { error } = await lovable.auth.signInWithOAuth('google', {
      redirect_uri: window.location.origin,
    });
    if (error) setError(error.message || 'Google sign-in failed');
  };

  const inputClass = "w-full h-11 rounded border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Helmet>
        <title>{isLogin ? 'Log In' : 'Sign Up'} — Stackmode</title>
      </Helmet>
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <img src="/images/stackmode-logo.png" alt="Stackmode" className="h-10 mx-auto mb-6" />
          <p className="text-muted-foreground text-sm">Master AI. Stack Assets. Build Systems.</p>
        </div>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="w-full h-11 rounded border border-border bg-card text-sm font-medium text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-3"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
            <path d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962L3.964 7.294C4.672 5.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="••••••••"
              className={inputClass}
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Phone Number <span className="text-muted-foreground/60">(optional)</span></label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className={inputClass}
              />
            </div>
          )}

          {error && <p className="text-destructive text-sm">{error}</p>}
          {message && <p className="text-green-400 text-sm">{message}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full h-11 rounded bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition disabled:opacity-50"
          >
            {submitting ? '...' : isLogin ? 'Log In' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={() => { setIsLogin(!isLogin); setError(''); setMessage(''); }} className="text-foreground underline">
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>

        <p className="text-center text-xs text-muted-foreground mt-8">Christopher Robinson — CEO, Stackmode</p>
      </div>
    </div>
  );
};

export default Auth;
