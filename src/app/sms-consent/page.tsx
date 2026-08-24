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
          A recipient may initiate an SMS conversation with{" "}
          <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a>, or affirmatively
          agree by SMS to continue an existing active business conversation through text
          messaging.
        </p>
        <p>
          When {brand.publicBrandName} requests permission to continue an existing business
          conversation by SMS, the recipient must provide an affirmative response such as
          &ldquo;Yes,&rdquo; &ldquo;I agree,&rdquo; or another clear confirmation before ongoing
          business-related SMS communications are sent.
        </p>
        <p>
          A telephone number appearing on a public website, aircraft listing, business directory,
          advertisement, marketplace, professional profile, or other publicly available source
          does not by itself constitute consent to receive SMS messages from{" "}
          {brand.publicBrandName}.
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
        <p>
          &ldquo;Would you like us to continue communicating with you by text message regarding
          this active acquisition inquiry or transaction? Message frequency varies. Message and
          data rates may apply. You may reply STOP at any time to opt out or HELP for assistance.
          Consent is not a condition of purchase or obtaining services.&rdquo;
        </p>
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
