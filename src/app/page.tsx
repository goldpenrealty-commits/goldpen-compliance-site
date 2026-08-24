import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "GOLDPEN GROUP Messaging Compliance",
  description:
    "Privacy Policy, SMS Terms & Conditions, and SMS Consent information for GOLDPEN GROUP and the GOLDPEN Acquisition Intelligence messaging program.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <PageHeader
        title="GOLDPEN GROUP Messaging Compliance"
        subtitle="Privacy, SMS Terms & Messaging Consent"
      />

      <p>
        {brand.publicBrandName} provides one-to-one messaging related to active business
        inquiries, acquisition opportunities, due diligence, negotiation, scheduling,
        documentation, and transaction coordination. This site publishes the privacy, messaging
        terms, and consent disclosures that apply to those communications.
      </p>

      <div className="link-cards">
        <a className="link-card" href={`${brand.productionUrl}/privacy-policy`}>
          <h2>Privacy Policy</h2>
          <p>How {brand.publicBrandName} collects, uses, and protects personal and mobile information.</p>
        </a>
        <a className="link-card" href={`${brand.productionUrl}/sms-terms`}>
          <h2>SMS Terms &amp; Conditions</h2>
          <p>Program description, message frequency, opt-out, and messaging terms.</p>
        </a>
        <a className="link-card" href={`${brand.productionUrl}/sms-consent`}>
          <h2>SMS Consent</h2>
          <p>Who receives these messages and how consent is obtained.</p>
        </a>
        <a className="link-card" href={`${brand.productionUrl}/sms-opt-in`}>
          <h2>SMS Opt-In</h2>
          <p>
            View {brand.programName} SMS keyword opt-in instructions and consent flow.
          </p>
        </a>
      </div>

      <div className="program-panel">
        <p className="program-name">{brand.programName}</p>
        <p>
          SMS: <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a>
        </p>
      </div>
    </>
  );
}
