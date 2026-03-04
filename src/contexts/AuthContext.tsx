import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isSubscribed: boolean;
  subscriptionEnd: string | null;
  loading: boolean;
  signOut: () => Promise<void>;
  checkSubscription: () => Promise<void>;
  handleCheckout: () => Promise<void>;
  handlePortal: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
    const { data: { session: currentSession } } = await supabase.auth.getSession();
    if (!currentSession) {
      setIsSubscribed(false);
      setSubscriptionEnd(null);
      return;
    }
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: { Authorization: `Bearer ${currentSession.access_token}` },
      });
      if (!error && data) {
        setIsSubscribed(data.subscribed ?? false);
        setSubscriptionEnd(data.subscription_end ?? null);
      }
    } catch (e) {
      console.error('check-subscription error', e);
    }
  }, []);

  const handleCheckout = useCallback(async () => {
    const { data: { session: s } } = await supabase.auth.getSession();
    if (!s) {
      window.location.href = '/auth';
      return;
    }
    window.location.href = 'https://buy.stripe.com/aFa4gBdw3dd92ZK3nR43S0C';
  }, []);

  const handlePortal = useCallback(async () => {
    const { data: { session: s } } = await supabase.auth.getSession();
    if (!s) return;
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: { Authorization: `Bearer ${s.access_token}` },
      });
      if (error) throw error;
      if (data?.url) window.location.href = data.url;
    } catch (e) {
      console.error('customer-portal error', e);
    }
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setIsSubscribed(false);
    setSubscriptionEnd(null);
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
      if (s?.user) {
        setTimeout(() => checkSubscription(), 0);
      } else {
        setIsSubscribed(false);
        setSubscriptionEnd(null);
      }
    });

    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
      if (s?.user) checkSubscription();
    });

    return () => subscription.unsubscribe();
  }, [checkSubscription]);

  // Poll subscription every 60s
  useEffect(() => {
    if (!user) return;
    const interval = setInterval(checkSubscription, 60_000);
    return () => clearInterval(interval);
  }, [user, checkSubscription]);

  return (
    <AuthContext.Provider value={{ user, session, isSubscribed, subscriptionEnd, loading, signOut, checkSubscription, handleCheckout, handlePortal }}>
      {children}
    </AuthContext.Provider>
  );
};
