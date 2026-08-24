import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "SMS Opt-In",
  description:
    "How to opt in to GOLDPEN Acquisition Intelligence SMS messages by texting START to +1 (786) 460-4334.",
  alternates: { canonical: "/sms-opt-in" },
};

export default function SmsOptInPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title={`${brand.programName} — SMS Opt-In`} />

      <div className="optin-cta">
        <p>
          Text <strong>START</strong> to{" "}
          <strong>
            <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a>
          </strong>
        </p>
      </div>

      <aside className="disclosure-box" aria-label="SMS opt-in disclosure">
        <p>
          Text <strong>START</strong> to{" "}
          <strong>
            <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a>
          </strong>{" "}
          to receive customer-care and transaction-related SMS messages from {brand.programName}{" "}
          regarding active acquisition inquiries and transactions.
        </p>
        <p>
          <strong>Message frequency varies.</strong>
        </p>
        <p>
          <strong>Message and data rates may apply.</strong>
        </p>
        <p>
          Reply <strong>STOP</strong> to opt out or <strong>HELP</strong> for assistance.
        </p>
        <p>Consent is not a condition of purchase or obtaining services.</p>
        <p>See our:</p>
        <ul className="resource-links">
          <li>
            <a href={`${brand.productionUrl}/privacy-policy`}>
              Privacy Policy — {brand.productionUrl}/privacy-policy
            </a>
          </li>
          <li>
            <a href={`${brand.productionUrl}/sms-terms`}>
              SMS Terms — {brand.productionUrl}/sms-terms
            </a>
          </li>
          <li>
            <a href={`${brand.productionUrl}/sms-consent`}>
              SMS Consent — {brand.productionUrl}/sms-consent
            </a>
          </li>
        </ul>
      </aside>

      <section>
        <h2>How SMS Opt-In Works</h2>
        <ol>
          <li>
            User sends <strong>START</strong> to{" "}
            <strong>
              <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a>
            </strong>
            .
          </li>
          <li>
            {brand.programName} confirms enrollment and provides the program disclosures,
            including message frequency, message and data rates, and STOP/HELP instructions.
          </li>
          <li>
            The recipient may reply <strong>STOP</strong> at any time to opt out or{" "}
            <strong>HELP</strong> for assistance.
          </li>
          <li>Public availability of a phone number alone does not constitute consent.</li>
        </ol>
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
    </>
  );
}
