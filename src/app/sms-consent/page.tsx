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
          agree by SMS to continue an active business conversation through text messaging.
        </p>
      </section>

      <section>
        <h2>Verbal Consent</h2>
        <p>
          During an active business conversation, a recipient may provide or confirm their mobile
          telephone number and affirmatively agree to receive business-related SMS messages from{" "}
          {brand.publicBrandName}.
        </p>
      </section>

      <section>
        <h2>Consent Disclosure</h2>
        <ConsentDisclosure />
      </section>
    </>
  );
}
