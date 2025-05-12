import { useState } from "react";
import { Link } from "wouter";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";

export default function TermsConditions() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-0"}`}>
        <Header toggleSidebar={toggleSidebar} title="Terms & Conditions" />
        
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Terms & Conditions</h1>
            <div className="policy-content space-y-4">
              <p><strong>Last Updated:</strong> November 15, 2023</p>
              
              <p>Please read these terms and conditions carefully before using the InfoAgentAI service.</p>

              <h2 className="text-xl font-semibold mt-6">1. Agreement to Terms</h2>
              <p>By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>

              <h2 className="text-xl font-semibold">2. Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of InfoAgentAI and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of InfoAgentAI.</p>

              <h2 className="text-xl font-semibold">3. User Accounts</h2>
              <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
              <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>

              <h2 className="text-xl font-semibold">4. Content and Conduct</h2>
              <p>Our Service allows you to interact with our AI systems. You are responsible for the content of your interactions and any consequences that may result from your submissions.</p>
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Violate any laws or regulations</li>
                <li>Infringe upon any intellectual property rights</li>
                <li>Submit false or misleading information</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Generate content that is harmful, offensive, or otherwise inappropriate</li>
              </ul>

              <h2 className="text-xl font-semibold">5. Termination</h2>
              <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
              <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>

              <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
              <p>In no event shall InfoAgentAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Your access to or use of or inability to access or use the Service;</li>
                <li>Any conduct or content of any third party on the Service;</li>
                <li>Any content obtained from the Service; and</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
              </ul>

              <h2 className="text-xl font-semibold">7. Disclaimer</h2>
              <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied.</p>
              <p>InfoAgentAI does not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that any errors in the Service will be corrected.</p>

              <h2 className="text-xl font-semibold">8. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>

              <h2 className="text-xl font-semibold">9. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "last updated" date.</p>
              <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>

              <h2 className="text-xl font-semibold">10. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>Email: terms@infoagentai.com</p>
              
              <div className="mt-8 text-center">
                <Link href="/" className="text-primary hover:underline">
                  ← Back to chat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
