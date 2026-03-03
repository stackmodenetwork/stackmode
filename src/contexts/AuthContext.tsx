import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User, Session } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: Session | null;
  isSubscribed: boolean;
  subscriptionEnd: string | null;
  loading: boolean;
  checkSubscription: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionEnd, setSubscriptionEnd] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkSubscription = useCallback(async () => {
    const { data: { session: s } } = await supabase.auth.getSession();
    if (!s) { setIsSubscribed(false); setSubscriptionEnd(null); return; }
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: { Authorization: `Bearer ${s.access_token}` },
      });
      if (!error && data) {
        setIsSubscribed(!!data.subscribed);
        setSubscriptionEnd(data.subscription_end || null);
      }
    } catch {
      // silently fail
    }
  }, []);

  useEffect(() => {
    // Set up auth listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
      if (s?.user) {
        // defer to avoid deadlock
        setTimeout(() => checkSubscription(), 0);
      } else {
        setIsSubscribed(false);
        setSubscriptionEnd(null);
      }
    });

    // THEN get initial session
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
      if (s?.user) checkSubscription();
    });

    return () => subscription.unsubscribe();
  }, [checkSubscription]);

  // Periodic check every 60s
  useEffect(() => {
    if (!user) return;
    const interval = setInterval(checkSubscription, 60_000);
    return () => clearInterval(interval);
  }, [user, checkSubscription]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setIsSubscribed(false);
    setSubscriptionEnd(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, isSubscribed, subscriptionEnd, loading, checkSubscription, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
