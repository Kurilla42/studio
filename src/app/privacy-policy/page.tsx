'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContactModal from '@/components/modals/contact-modal';

export default function PrivacyPolicyPage() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };

  return (
    <>
      <Header onGetQuoteClick={handleOpenContactModal} />
      <main className="pt-20">
        <section className="bg-background">
          <div className="container max-w-4xl mx-auto py-12">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            <div className="space-y-6 text-muted-foreground">
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold text-foreground pt-4">1. Introduction</h2>
              <p>
                ProFlow Plumbing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>

              <h2 className="text-2xl font-semibold text-foreground pt-4">2. Collection of Your Information</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you request a quote or contact us.
                </li>
                <li>
                  <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground pt-4">3. Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Provide and manage your requested services.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Respond to customer service requests.</li>
                <li>Increase the efficiency and operation of the Site.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground pt-4">4. Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground pt-4">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2 className="text-2xl font-semibold text-foreground pt-4">6. Policy for Children</h2>
              <p>
                We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
              </p>

              <h2 className="text-2xl font-semibold text-foreground pt-4">7. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="pl-4">
                <p>ProFlow Plumbing</p>
                <p>123 Main Street, Your City, ST 12345</p>
                <p>Email: info@proflow.com</p>
                <p>Phone: (555) 123-4567</p>
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
