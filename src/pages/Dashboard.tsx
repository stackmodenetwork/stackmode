import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const Dashboard = () => {
  const { user, isSubscribed, subscriptionEnd, loading, signOut, checkSubscription } = useAuth();
  const navigate = useNavigate();
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate('/auth', { replace: true });
  }, [loading, user, navigate]);

  // Re-check on mount (handles ?subscribed=true redirect)
  useEffect(() => { checkSubscription(); }, [checkSubscription]);

  const openPortal = async () => {
    setPortalLoading(true);
    const { data, error } = await supabase.functions.invoke('customer-portal');
    if (!error && data?.url) window.open(data.url, '_blank');
    setPortalLoading(false);
  };

  const daysLeft = subscriptionEnd
    ? Math.max(0, Math.ceil((new Date(subscriptionEnd).getTime() - Date.now()) / 86400000))
    : 0;

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-2 border-foreground border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-background">
      <Helmet><title>Dashboard — Stackmode</title></Helmet>
      <SiteNav />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-lg mx-auto space-y-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">{user?.email}</p>
            {isSubscribed ? (
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: 'hsl(var(--gold))', color: 'hsl(var(--gold-foreground))' }}>
                Premium Member
              </span>
            ) : (
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-muted text-muted-foreground">Free</span>
            )}
          </div>

          {isSubscribed && (
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-lg font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Stackmode Architect</h2>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Access remaining</span>
                <span className="font-bold">{daysLeft} days</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${Math.min(100, (daysLeft / 30) * 100)}%`, background: 'hsl(var(--gold))' }} />
              </div>
              <button onClick={openPortal} disabled={portalLoading} className="w-full h-10 rounded-md border border-border text-sm font-bold uppercase tracking-wider hover:bg-card transition disabled:opacity-50">
                {portalLoading ? '...' : 'Manage Subscription'}
              </button>
            </div>
          )}

          {!isSubscribed && (
            <div className="rounded-xl border border-border bg-card p-6 text-center space-y-4">
              <p className="text-muted-foreground text-sm">You don't have an active subscription.</p>
              <button onClick={() => navigate('/pricing')} className="h-10 px-6 rounded-md bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider hover:opacity-90 transition">
                View Plans
              </button>
            </div>
          )}

          <div className="text-center">
            <button onClick={signOut} className="text-sm text-muted-foreground underline hover:text-foreground transition">Sign Out</button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Dashboard;
