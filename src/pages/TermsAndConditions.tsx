import { MainHeader } from '@/components/MainHeader';
import { MainFooter } from '@/components/MainFooter';

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <MainHeader />

      <div className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: January 2025</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Stackmode Network LLC ("we," "our," or "us"), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Services Description</h2>
            <p>
              Stackmode Network LLC provides trading education, mentorship, and related services. Our services are for educational purposes only and do not constitute financial advice, investment advice, or any other type of professional advice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Risk Disclosure</h2>
            <p>
              <strong>Trading involves substantial risk of loss and is not suitable for all investors.</strong> Past performance is not indicative of future results. You should carefully consider whether trading is suitable for you in light of your financial condition. You could lose some or all of your initial investment.
            </p>
            <p>
              We make no guarantees regarding income, earnings, or financial success. Individual results will vary, and there is no assurance that you will achieve similar results to those displayed or discussed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. No Financial Advice</h2>
            <p>
              The information provided through our services, including but not limited to website content, courses, mentorship sessions, and any other materials, is for educational and informational purposes only. Nothing we provide should be construed as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Financial advice</li>
              <li>Investment advice</li>
              <li>Trading advice</li>
              <li>Tax advice</li>
              <li>Legal advice</li>
            </ul>
            <p>
              You are solely responsible for your own trading and investment decisions. We recommend consulting with a qualified financial advisor before making any trading or investment decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. User Responsibilities</h2>
            <p>By using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use the services only for lawful purposes</li>
              <li>Not share, resell, or distribute our proprietary content</li>
              <li>Accept full responsibility for your trading decisions and results</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Intellectual Property</h2>
            <p>
              All content, materials, and intellectual property provided through our services are owned by Stackmode Network LLC and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Payment Terms</h2>
            <p>
              All payments are processed through secure third-party payment processors. Prices are subject to change without notice. Refund policies, if applicable, will be specified at the time of purchase for each specific product or service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Stackmode Network LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, trading losses, or other intangible losses arising from your use of our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Stackmode Network LLC, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services at any time, with or without cause, and with or without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">11. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">13. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p>
              <strong>Stackmode Network LLC</strong><br />
              Email: stackmodechris@gmail.com
            </p>
          </section>
        </div>
      </div>

      <MainFooter />
    </main>
  );
};

export default TermsAndConditions;
