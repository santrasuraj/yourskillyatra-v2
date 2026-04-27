import LegalLayout from '@/components/layout/LegalLayout';

export const metadata = {
  title: 'Privacy Policy | YourSkillYatra',
  description: 'Learn how YourSkillYatra protects and handles your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 18, 2026">
      <p>
        Your Skill Yatra ("we", "our", or "us") is committed to protecting and respecting your privacy. 
        This Privacy Policy explains how we collect, use, and protect your personal information when you use our corporate training services at yourskillyatra.com.
        Founded by Rahul Mishra, Arman Baweja, and Lakshay Sharma, we are dedicated to empowering professionals in their journey from campus to corporate while ensuring your personal data remains secure.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Personal Information:</h3>
      <ul>
        <li>Name, email address, and phone number</li>
        <li>Educational background and current academic status</li>
        <li>Career goals and training preferences</li>
        <li>Payment information for course enrollment</li>
        <li>Communication preferences</li>
      </ul>

      <h3>Course-Related Information:</h3>
      <ul>
        <li>Course progress and completion status</li>
        <li>Assignment submissions and assessments</li>
        <li>Participation in live sessions and workshops</li>
        <li>Feedback and evaluation responses</li>
        <li>Certificate and achievement records</li>
      </ul>

      <h3>Technical Information:</h3>
      <ul>
        <li>Device information and browser type</li>
        <li>IP address and location data</li>
        <li>Website usage patterns and preferences</li>
        <li>Login and access logs</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your personal information for the following purposes:</p>
      
      <h3>Course Delivery and Training:</h3>
      <ul>
        <li>Providing access to our targeted programs</li>
        <li>Scheduling and conducting live training sessions</li>
        <li>Delivering personalized coaching and mentorship</li>
        <li>Tracking course progress and issuing certificates</li>
      </ul>

      <h3>Communication:</h3>
      <ul>
        <li>Sending course updates and announcements</li>
        <li>Providing technical support and assistance</li>
        <li>Sharing industry insights and career tips</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only with:</p>
      <ul>
        <li>Payment processors for handling course fees (e.g. PayU, Razorpay)</li>
        <li>Video conferencing platforms for live sessions (e.g. Zoom, Meet)</li>
        <li>Law enforcement when required by law or legal process</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
      <ul>
        <li>Secure SSL encryption for data transmission</li>
        <li>Regular security audits and assessments</li>
        <li>Access controls and authentication measures</li>
      </ul>

      <h2>5. Your Rights and Choices</h2>
      <ul>
        <li>Access: Request a copy of your personal data</li>
        <li>Correction: Update or correct inaccurate information</li>
        <li>Deletion: Request deletion of your personal data</li>
        <li>Portability: Request transfer of your data</li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>
        We retain your personal information for as long as necessary to provide our training services, maintain course records, and comply with legal obligations. 
        Course completion records are typically retained for 7 years for certification purposes.
      </p>

      <h2>7. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:</p>
      <ul>
        <li>Phone: +91 62910 00136</li>
        <li>Email: support@yourskillyatra.com</li>
        <li>Website: yourskillyatra.com</li>
      </ul>
    </LegalLayout>
  );
}
