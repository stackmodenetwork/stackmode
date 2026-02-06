import { Link } from 'react-router-dom';
import { Briefcase, TrendingUp, ArrowRight, Clock, DollarSign, Frown, Smile } from 'lucide-react';

export const EmployeeVsStackmodeComparison = () => {
  return (
    <section className="py-8 sm:py-12 px-5 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            The <span className="text-cyan-400">Financial Reality</span> Check
          </h2>
          <p className="text-muted-foreground text-sm">
            Same 5 years. Different decisions. Different life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Average Employee */}
          <div className="relative bg-gradient-to-br from-destructive/5 to-destructive/10 border border-destructive/30 rounded-xl p-5 overflow-hidden">
            <div className="absolute top-2 right-2 text-[10px] bg-destructive/20 text-destructive px-2 py-0.5 rounded-full font-bold">
              AT RISK
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <Briefcase size={20} className="text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Average Employee</h3>
                <p className="text-destructive text-xs">$40K/year job</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-destructive/20">
                <span className="text-muted-foreground flex items-center gap-2">
                  <DollarSign size={14} className="text-destructive" /> Monthly Income
                </span>
                <span className="font-bold text-foreground">$2,800</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-destructive/20">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Clock size={14} className="text-destructive" /> Freedom
                </span>
                <span className="font-bold text-destructive">None</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-destructive/20">
                <span className="text-muted-foreground">Growth Potential</span>
                <span className="font-bold text-destructive">2%/year</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Frown size={14} className="text-destructive" /> Stress Level
                </span>
                <span className="font-bold text-destructive">High</span>
              </div>
            </div>
          </div>

          {/* Stackmode Client */}
          <div className="relative bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 overflow-hidden">
            <div className="absolute top-2 right-2 text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
              BUILDING WEALTH
            </div>
            
            <div className="flex items-center gap-3 mb-4 pr-24">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp size={20} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Stackmode Client</h3>
                <p className="text-emerald-400 text-xs">Academy Member</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                <span className="text-muted-foreground flex items-center gap-2">
                  <DollarSign size={14} className="text-emerald-400" /> Monthly Potential
                </span>
                <span className="font-bold text-emerald-400">$5K - $15K+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Clock size={14} className="text-emerald-400" /> Freedom
                </span>
                <span className="font-bold text-emerald-400">Full Control</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-emerald-500/20">
                <span className="text-muted-foreground">Growth Potential</span>
                <span className="font-bold text-emerald-400">Unlimited</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Smile size={14} className="text-emerald-400" /> Stress Level
                </span>
                <span className="font-bold text-emerald-400">Managed</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <a
            href="https://whop.com/stackmode-academy/educationalservice/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-background font-bold px-6 py-3 rounded-xl transition-all"
          >
            <span>Learn How To Get In Stackmode</span>
            <ArrowRight size={18} />
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            Join 500+ clients building their financial future
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmployeeVsStackmodeComparison;
