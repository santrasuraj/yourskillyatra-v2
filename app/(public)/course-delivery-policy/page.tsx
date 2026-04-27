import LegalLayout from '@/components/layout/LegalLayout';

export const metadata = {
  title: 'Course Delivery Policy | YourSkillYatra',
  description: 'Details on how your purchased programs and mentorships are granted and delivered over our digital platforms.',
};

export default function DeliveryPolicyPage() {
  return (
    <LegalLayout title="Course Delivery Policy" lastUpdated="April 18, 2026">
      <p>
        Since YourSkillYatra is a 100% digital EdTech platform, we do not ship any physical goods. This policy explains how our digital services, course materials, and live coaching sessions are delivered to you upon successful enrollment.
      </p>

      <h2>1. Digital Access & Onboarding</h2>
      <p>
        Upon successful payment for any of our programs (Job Hunt Accelerator, Career Launchpad, or 1-on-1 Sessions), you will immediately receive an email confirmation containing your transaction receipt.
      </p>
      <ul>
        <li><strong>Onboarding Email:</strong> Within 12-24 hours of successful enrollment, you will receive a detailed onboarding email to your registered email address.</li>
        <li><strong>WhatsApp Group:</strong> You will receive an invite link to the private WhatsApp community dedicated to your specific cohort.</li>
        <li><strong>Portal Access:</strong> If your program includes access to recorded modules, login credentials and portal links will be provided in the onboarding email.</li>
      </ul>

      <h2>2. Live Session Delivery</h2>
      <p>
        All live classes, workshops, and mock interviews are conducted virtually via secure video-conferencing software (such as Zoom or Google Meet).
      </p>
      <ul>
        <li>Session links are securely shared in your cohort's WhatsApp group exactly 30 minutes before the scheduled class time.</li>
        <li>For 1-on-1 sessions, calendaring links will be provided so you can select a slot based on the mentor's availability. The meeting link is auto-generated upon booking.</li>
      </ul>

      <h2>3. Delivery Timelines</h2>
      <ul>
        <li><strong>Welcome Kit / Pre-reads:</strong> Delivered digitally via email 48 hours prior to the cohort start date.</li>
        <li><strong>Live Classes:</strong> Conducted strictly as per the schedule provided during your onboarding.</li>
        <li><strong>Certificates:</strong> Digital certificates of completion are emailed to you as verifiable PDFs within 7 business days after passing the final evaluation.</li>
      </ul>

      <h2>4. Access Issues & Technical Failures</h2>
      <p>
        If you have successfully paid but did not receive the onboarding email within 24 hours, it may be due to a typo in the email address provided or a spam filter issue. 
      </p>
      <p>
        <strong>Resolution Step:</strong> Please email <code>support@yourskillyatra.com</code> immediately with your Phone Number and Transaction ID, and our technical team will manually grant you access within 4 business hours.
      </p>
    </LegalLayout>
  );
}
