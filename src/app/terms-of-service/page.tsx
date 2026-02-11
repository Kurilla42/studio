'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContactModal from '@/components/modals/contact-modal';

export default function TermsOfServicePage() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-background">
          <div className="container max-w-4xl mx-auto py-12">
            <h1 className="text-[2.7rem] text-foreground mb-8 leading-tight">Terms of Service</h1>
            <div className="space-y-6 text-base text-muted-foreground">
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-medium text-foreground pt-4">1. Agreement to Terms</h2>
              <p>
                By accessing our website, you agree to be bound by these Terms of Service. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>

              <h2 className="text-2xl font-medium text-foreground pt-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Empire State Plumbing's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Empire State Plumbing's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Empire State Plumbing at any time.
              </p>

              <h2 className="text-2xl font-medium text-foreground pt-4">3. Disclaimer</h2>
              <p>
                The materials on Empire State Plumbing's website are provided on an 'as is' basis. Empire State Plumbing makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-medium text-foreground pt-4">4. Limitations</h2>
              <p>
                In no event shall Empire State Plumbing or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Empire State Plumbing's website, even if Empire State Plumbing or a Empire State Plumbing authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2 className="text-2xl font-medium text-foreground pt-4">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of your state and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>

              <h2 className="text-2xl font-medium text-foreground pt-4">6. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="pl-4">
                <p>Empire State Plumbing</p>
                <p>3060 NY-2200 Frederick Douglass Blvd, New York, NY 10026</p>
                <p>Email: info@empirestateplumbing.com</p>
                <p>Phone: (315) 526-8735</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onFormSubmit={() => {}} />
      <ContactModal open={isContactModalOpen} onOpenChange={setContactModalOpen} />
    </>
  );
}
