import LegalLayout from '@/components/layout/LegalLayout';

export const metadata = {
  title: 'Terms & Conditions | YourSkillYatra',
  description: 'Terms and Conditions for reading and using the YourSkillYatra platform.',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" lastUpdated="April 18, 2026">
      <p>
        Please read these terms and conditions carefully before using the YourSkillYatra platform and enrolling in our corporate training programs. By accessing or using our services, you agree to be bound by these terms.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing yourskillyatra.com and utilizing our Job Hunt Accelerator, Career Launchpad, or any 1-on-1 mentorship programs, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
      </p>

      <h2>2. Course Enrollment and Access</h2>
      <ul>
        <li>Enrollment is confirmed only upon full receipt of the applicable course fees.</li>
        <li>Course materials, live session links, and resources provided are for your personal use only.</li>
        <li>You agree not to share, distribute, or resell any materials provided by YourSkillYatra.</li>
        <li>Access to recorded sessions (if applicable) is valid for the duration specified in your program plan.</li>
      </ul>

      <h2>3. User Conduct and Responsibilities</h2>
      <p>While using our platform and attending live sessions, you agree to:</p>
      <ul>
        <li>Maintain professional behavior during all live classes, group discussions, and 1-on-1 sessions.</li>
        <li>Respect the trainers, mentors, and other students. Harassment or disruptive behavior will lead to immediate termination without refund.</li>
        <li>Complete assignments and participate actively to ensure the success of the methodology.</li>
        <li>Provide accurate information during registration and keep your profile updated.</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on the YourSkillYatra platform, including but not limited to videos, worksheets, curriculum design, logos, and graphics, is the intellectual property of YourSkillYatra and is protected by copyright laws. Unauthorized reproduction is strictly prohibited.
      </p>

      <h2>5. Mock Interviews and Career Readiness</h2>
      <p>
        While our programs are designed to significantly improve your career readiness, YourSkillYatra does not guarantee jobs. The effectiveness of our training depends largely on the student's execution, market conditions, and individual hiring company policies.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        YourSkillYatra shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of significant changes, and continued use of the platform after changes constitutes acceptance of the new terms.
      </p>
    </LegalLayout>
  );
}
