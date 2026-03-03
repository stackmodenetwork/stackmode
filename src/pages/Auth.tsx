import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable/index';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Auth = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      if (tab === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        navigate('/');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    const { error } = await lovable.auth.signInWithOAuth('google', {
      redirect_uri: window.location.origin,
    });
    if (error) setError(error.message || 'Google sign-in failed');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <Helmet>
        <title>Login — Stackmode</title>
        <meta name="description" content="Sign in or create your Stackmode account." />
      </Helmet>

      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img src="/images/sm-logo-new.png" alt="Stackmode" className="w-16 h-16 rounded-full mb-4" />
          <h1 className="text-2xl font-semibold text-foreground" style={{ letterSpacing: '-0.01em' }}>Stackmode</h1>
          <p className="text-sm mt-1 text-muted-foreground">Master AI. Stack Assets. Build Systems.</p>
        </div>

        <div className="rounded-2xl p-6 sm:p-8" style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)' }}>
          <Tabs value={tab} onValueChange={(v) => setTab(v as 'login' | 'signup')}>
            <TabsList className="w-full mb-6" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <TabsTrigger value="login" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-black text-white/60">Login</TabsTrigger>
              <TabsTrigger value="signup" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-black text-white/60">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="bg-black/50 border-white/10 text-white placeholder:text-white/30" />
                <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="bg-black/50 border-white/10 text-white placeholder:text-white/30" />
                <Button type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-white/90 font-semibold">
                  {loading ? 'Signing in…' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="bg-black/50 border-white/10 text-white placeholder:text-white/30" />
                <Input type="password" placeholder="Password (min 6 chars)" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} className="bg-black/50 border-white/10 text-white placeholder:text-white/30" />
                <Button type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-white/90 font-semibold">
                  {loading ? 'Creating account…' : 'Create Account'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
          </div>

          <Button onClick={handleGoogle} variant="outline" className="w-full gap-2 border-white/10 text-white hover:bg-white/5">
            <GoogleIcon /> Continue with Google
          </Button>

          {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}
          {message && <p className="text-green-400 text-sm mt-4 text-center">{message}</p>}
        </div>

        <p className="text-center mt-6 text-xs text-muted-foreground">Christopher Robinson — CEO, Stackmode</p>
      </div>
    </div>
  );
};

export default Auth;
