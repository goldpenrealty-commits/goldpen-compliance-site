import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PendingField } from "@/components/PendingField";
import { brand, hasValue } from "@/config/brand";

export const metadata: Metadata = {
  title: "SMS Terms & Conditions",
  description:
    "SMS messaging terms and conditions for GOLDPEN Acquisition Intelligence, including consent, message frequency, opt-out, and carrier disclosures.",
  alternates: { canonical: "/sms-terms" },
};

export default function SmsTermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="GOLDPEN GROUP SMS Messaging Terms & Conditions" />
      <p className="program-name">
        Program: {brand.programName}
        <br />
        Number: <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a>
      </p>
      <p className="last-updated">Last updated: {brand.lastUpdatedDisplay}</p>

      <section>
        <h2>Program Description</h2>
        <p>
          {brand.programName} is a one-to-one customer-care and business messaging program used
          for communications with brokers, sellers, representatives, vendors, and other authorized
          business contacts involved in active inquiries and transactions with {brand.publicBrandName}.
        </p>
        <p>Messages may include:</p>
        <ul>
          <li>Asset information</li>
          <li>Availability questions</li>
          <li>Due diligence</li>
          <li>Maintenance or document requests</li>
          <li>Pricing discussions</li>
          <li>Offers and negotiation updates</li>
          <li>Scheduling</li>
          <li>Transaction coordination</li>
          <li>Customer support</li>
        </ul>
        <p>
          This program is limited to customer-care, transactional, and business communications
          related to active inquiries and transactions and is not used for unsolicited
          promotional marketing.
        </p>
      </section>

      <section>
        <h2>Consent</h2>
        <p>
          Recipients receive messages after providing or confirming their mobile number and
          consenting to business-related SMS communications, or after initiating the SMS
          conversation.
        </p>
        <p>Consent to receive SMS messages is not a condition of purchase or obtaining services.</p>
      </section>

      <section>
        <h2>Message Frequency</h2>
        <p>
          <strong>Message frequency varies depending on the active inquiry or transaction.</strong>
        </p>
      </section>

      <section>
        <h2>Message and Data Rates</h2>
        <p>
          <strong>Message and data rates may apply.</strong>
        </p>
      </section>

      <section>
        <h2>Opt-Out</h2>
        <p>
          <strong>Reply STOP to opt out at any time.</strong>
        </p>
        <p>
          After you reply STOP, you will no longer receive messages from this program, except for
          a one-time confirmation of your opt-out where permitted.
        </p>
        <p>You may reply START to opt back in.</p>
      </section>

      <section>
        <h2>Help</h2>
        <p>
          <strong>Reply HELP for assistance.</strong>
        </p>
        <p>You may also contact {brand.publicBrandName} at:</p>
        <p>
          Email:{" "}
          {hasValue(brand.supportEmail) ? (
            <a href={`mailto:${brand.supportEmail}`}>{brand.supportEmail}</a>
          ) : (
            <PendingField value={brand.supportEmail} label="support email" />
          )}
          <br />
          Phone: <PendingField value={brand.supportPhone} label="support phone" />
        </p>
      </section>

      <section>
        <h2>Automated Messaging</h2>
        <p>Some messages may be generated, routed, or assisted by automated systems or artificial intelligence.</p>
        <p>
          Automated or AI-assisted communications are provided for communication and
          transaction-coordination purposes. Binding commercial commitments, executed agreements,
          deposits, purchases, or other legally binding actions remain subject to appropriate human
          authorization and applicable transaction documents.
        </p>
      </section>

      <section>
        <h2>No Binding Transaction Through SMS Alone</h2>
        <p>
          SMS discussions, price discussions, or negotiation communications do not by themselves
          replace executed transaction documents or create a binding purchase agreement unless
          expressly documented through the appropriate legal instruments.
        </p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p>
          For information about how {brand.publicBrandName} collects, uses, and protects your
          information, see our{" "}
          <a href={`${brand.productionUrl}/privacy-policy`}>
            Privacy Policy — {brand.productionUrl}/privacy-policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>SMS Consent</h2>
        <p>
          For information about how recipients provide consent to receive messages from{" "}
          {brand.programName}, see{" "}
          <a href={`${brand.productionUrl}/sms-consent`}>{brand.productionUrl}/sms-consent</a>.
        </p>
      </section>

      <section>
        <h2>Carrier Disclaimer</h2>
        <p>Wireless carriers are not liable for delayed or undelivered messages.</p>
      </section>

      <section>
        <h2>Availability</h2>
        <p>
          Messaging availability may be interrupted by carriers, technology providers,
          maintenance, network conditions, or other circumstances outside our control.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>These terms may be updated from time to time.</p>
        <p className="last-updated">Last updated: {brand.lastUpdatedDisplay}</p>
      </section>
    </>
  );
}
