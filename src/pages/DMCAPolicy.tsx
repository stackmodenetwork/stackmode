import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';

const DMCAPolicy = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <MainHeader />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-6">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Content */}
      <section className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">DMCA Policy</h1>
            <p className="text-muted-foreground mt-2">Digital Millennium Copyright Act Notice</p>
          </div>

          {/* Introduction */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">📋 Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Stackmode Network LLC respects the intellectual property rights of others and expects users to do the same. 
              In accordance with the Digital Millennium Copyright Act (DMCA), we will respond promptly to claims of copyright 
              infringement committed using our website or services.
            </p>
          </div>

          {/* Filing a DMCA Notice */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">📝 Filing a DMCA Notice</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, 
              please provide our designated copyright agent with the following information:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity, 
                  and information reasonably sufficient to permit us to locate the material</li>
              <li>Your contact information, including your address, telephone number, and email address</li>
              <li>A statement that you have a good faith belief that use of the material in the manner complained of is not 
                  authorized by the copyright owner, its agent, or the law</li>
              <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are 
                  authorized to act on behalf of the copyright owner</li>
            </ol>
          </div>

          {/* Counter-Notification */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">⚖️ Counter-Notification</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you believe that your content was removed or disabled by mistake or misidentification, you may file a 
              counter-notification with us. To be effective, your counter-notification must include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Your physical or electronic signature</li>
              <li>Identification of the material that has been removed or to which access has been disabled</li>
              <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or 
                  disabled as a result of mistake or misidentification</li>
              <li>Your name, address, and telephone number</li>
              <li>A statement that you consent to the jurisdiction of the Federal District Court for your judicial district</li>
            </ul>
          </div>

          {/* Repeat Infringers */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">🚫 Repeat Infringers</h2>
            <p className="text-muted-foreground leading-relaxed">
              It is our policy to terminate, in appropriate circumstances, the accounts of users who are repeat infringers 
              of copyright or other intellectual property rights.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">📧 Contact for DMCA Notices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Please send all DMCA notices and counter-notifications to our designated copyright agent:
            </p>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-foreground font-medium">Stackmode Network LLC</p>
              <a 
                href="mailto:stackmodechris@gmail.com" 
                className="text-primary hover:underline"
              >
                stackmodechris@gmail.com
              </a>
            </div>
          </div>

          {/* Last Updated */}
          <p className="text-center text-sm text-muted-foreground">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <MainFooter />
    </main>
  );
};

export default DMCAPolicy;
