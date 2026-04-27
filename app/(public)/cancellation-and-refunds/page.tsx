import LegalLayout from '@/components/layout/LegalLayout';

export const metadata = {
  title: 'Cancellation & Refunds | YourSkillYatra',
  description: 'Understand our cancellation and refund policies for all training programs.',
};

export default function RefundsPage() {
  return (
    <LegalLayout title="Cancellation & Refunds" lastUpdated="April 18, 2026">
      <p>
        At YourSkillYatra, we are committed to providing high-quality corporate training and mentorship. We understand that circumstances may arise where you need to cancel your enrollment. This policy outlines exactly how we handle cancellations and refunds.
      </p>

      <h2>1. Cancellation Policy</h2>
      <p>
        You may request to cancel your enrollment in any program (Job Hunt Accelerator, Career Launchpad, or 1-on-1 Sessions) under the following conditions:
      </p>
      <ul>
        <li><strong>Before Cohort Start Date:</strong> You can cancel your enrollment up to 48 hours before the official start date of your assigned cohort or scheduled session.</li>
        <li><strong>After Cohort Start Date:</strong> Once the program has officially commenced and you have been granted access to the initial live session or proprietary materials, cancellations are generally not permitted.</li>
      </ul>

      <h2>2. Refund Eligibility</h2>
      <p>
        Refunds are evaluated based on the timing of your cancellation request:
      </p>
      <ul>
        <li><strong>100% Refund:</strong> If you cancel 48 hours or more before the program starts, you are eligible for a full refund, minus any payment gateway processing fees (typically 2-3%).</li>
        <li><strong>No Refund:</strong> If you cancel after the program has started, or if you fail to attend the sessions (No Show), no refund will be issued. The resources and seat have already been allocated to you.</li>
      </ul>

      <h2>3. Rescheduling & Batch Transfers</h2>
      <p>
        If you are unable to attend your purchased cohort due to an emergency, we offer the option to transfer your enrollment to the next available batch, subject to the following rules:
      </p>
      <ul>
        <li>Batch transfer requests must be made by emailing support at least 24 hours before your current batch begins.</li>
        <li>Only one transfer is permitted per enrollment.</li>
        <li>Batch transfers cannot be converted into refunds at a later date.</li>
      </ul>

      <h2>4. Exceptional Circumstances</h2>
      <p>
        In severe medical emergencies or unavoidable personal circumstances after the program has begun, we review cases individually. Please submit appropriate documentation to our support team, and our management will decide on a pro-rata refund or credit note at their sole discretion.
      </p>

      <h2>5. How to Request a Refund</h2>
      <p>
        To request a cancellation or refund, please follow these steps:
      </p>
      <ol>
        <li>Send an email to <strong>support@yourskillyatra.com</strong> from your registered email address.</li>
        <li>Include your Full Name, Phone Number, and Payment Transaction ID.</li>
        <li>State the specific reason for requesting the cancellation.</li>
      </ol>
      <p>
        Our team will acknowledge your request within 24-48 business hours. Approved refunds will be processed back to the original method of payment within 5-7 business days.
      </p>
    </LegalLayout>
  );
}
