import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ConsentDisclosure } from "@/components/ConsentDisclosure";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "SMS Consent",
  description:
    "How consent works for the GOLDPEN Acquisition Intelligence messaging program: who receives messages and how consent is obtained.",
  alternates: { canonical: "/sms-consent" },
};

export default function SmsConsentPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title={`${brand.programName} — SMS Consent`} />

      <section>
        <p>Recipients of {brand.programName} messages are generally:</p>
        <ul>
          <li>Brokers</li>
          <li>Sellers</li>
          <li>Representatives</li>
          <li>Vendors</li>
          <li>Business advisors</li>
          <li>Other authorized parties involved in an active acquisition inquiry or transaction</li>
        </ul>
      </section>

      <section>
        <h2>Via Text</h2>
        <p>
          A recipient may opt in by texting <strong>START</strong> to{" "}
          <strong>
            <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a>
          </strong>
          .
        </p>
        <p>
          {brand.programName} responds with the program description, message frequency
          disclosure, message and data rates disclosure, STOP and HELP instructions, Privacy
          Policy and SMS Terms links, and asks the recipient to reply YES to confirm enrollment.
        </p>
        <p>The recipient must reply YES before enrollment is completed.</p>
        <p>After YES is received, {brand.programName} sends a confirmation SMS.</p>
        <p>
          Public availability of a telephone number on a website, aircraft listing, business
          directory, marketplace, advertisement, professional profile, or other public source does
          not constitute consent.
        </p>
        <ul className="resource-links">
          <li>
            <a href={`${brand.productionUrl}/sms-opt-in`}>Via Text SMS Opt-In</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Example First Response</h2>
        <p className="sms-sample">
          &ldquo;{brand.programName}: You requested customer-care and transaction-related SMS
          regarding active acquisition inquiries. Message frequency varies. Msg &amp; data rates
          may apply. Reply STOP to opt out or HELP for assistance. Terms:{" "}
          {brand.productionUrl}/sms-terms Privacy: {brand.productionUrl}/privacy-policy. Reply YES
          to confirm enrollment.&rdquo;
        </p>
      </section>

      <section>
        <h2>Example Confirmation Message</h2>
        <p className="sms-sample">
          &ldquo;{brand.programName}: Confirmed. You are enrolled to receive customer-care and
          transaction-related SMS regarding active acquisition inquiries. Message frequency
          varies. Msg &amp; data rates may apply. Reply STOP to opt out or HELP for
          assistance.&rdquo;
        </p>
      </section>

      <section>
        <h2>Text Message Consent Example</h2>
        <p>
          A recipient may initiate a conversation by sending an SMS directly to{" "}
          <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a>.
        </p>
        <p>
          By initiating the SMS conversation, the recipient is requesting and consenting to
          receive responses related to that active inquiry or transaction.
        </p>
        <p>
          Alternatively, during an existing business inquiry, {brand.publicBrandName} may ask
          whether the recipient agrees to continue the conversation through SMS.
        </p>
        <p>The recipient must affirmatively agree before ongoing SMS communications are initiated.</p>
        <p>Acceptable affirmative confirmations may include responses such as:</p>
        <ul>
          <li>&ldquo;Yes&rdquo;</li>
          <li>&ldquo;I agree&rdquo;</li>
          <li>&ldquo;You can text me&rdquo;</li>
          <li>Another clear affirmative statement expressing consent to continue by SMS</li>
        </ul>
        <p>
          Silence, failure to respond, or the mere availability of a telephone number is not
          treated as SMS consent.
        </p>
      </section>

      <section>
        <h2>Verbal Consent</h2>
        <p>
          During an active business conversation, a recipient may provide or confirm their mobile
          telephone number and affirmatively agree to receive business-related SMS messages from{" "}
          {brand.publicBrandName}.
        </p>
        <p>Consent must be affirmative and voluntary before ongoing SMS communications are initiated.</p>
      </section>

      <section>
        <h2>Verbal Consent Script</h2>
        <p>During an active business conversation, a {brand.publicBrandName} representative may ask:</p>
        <p className="sms-sample">
          &ldquo;Would you like us to continue communicating with you by text message regarding
          this active acquisition inquiry or transaction through {brand.programName}? Message
          frequency varies based on the active inquiry or transaction. Message and data rates may
          apply. Reply STOP at any time to opt out or HELP for assistance. Consent is not a
          condition of purchase or obtaining services. Our SMS Terms are available at{" "}
          {brand.productionUrl}/sms-terms and our Privacy Policy is available at{" "}
          {brand.productionUrl}/privacy-policy. Would you like to receive these SMS messages?
          Please answer yes or no.&rdquo;
        </p>
        <p>
          If the recipient answers affirmatively, the {brand.publicBrandName} representative
          confirms:
        </p>
        <p className="sms-sample">
          &ldquo;Thank you. You have agreed to receive {brand.programName} customer-care and
          transaction-related SMS messages. You will receive a confirmation message
          shortly.&rdquo;
        </p>
        <p>Then the system sends the same confirmation SMS used for Via Text.</p>
        <p>
          The recipient must affirmatively agree before {brand.publicBrandName} initiates ongoing
          business-related SMS communications.
        </p>
      </section>

      <section>
        <h2>No Unsolicited Messaging</h2>
        <p>{brand.programName} is not used for unsolicited bulk SMS marketing.</p>
        <p>
          Business contacts are not enrolled in the messaging program solely because their
          telephone number appears in a public listing, website, business directory,
          advertisement, marketplace, professional profile, or other publicly available source.
        </p>
        <p>SMS communications are initiated or continued only after an appropriate business interaction and applicable consent.</p>
      </section>

      <section>
        <h2>Consent Disclosure</h2>
        <ConsentDisclosure />
      </section>
    </>
  );
}
