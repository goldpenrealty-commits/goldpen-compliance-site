import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PendingField } from "@/components/PendingField";
import { brand, hasValue } from "@/config/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GOLDPEN GROUP collects, uses, stores, and protects personal and mobile information, including SMS opt-in and consent data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="GOLDPEN GROUP Privacy Policy" />
      <p className="last-updated">Last updated: {brand.lastUpdatedDisplay}</p>

      <section>
        <h2>Introduction</h2>
        <p>
          This policy describes how {brand.publicBrandName} collects, uses, stores, and protects
          personal information in connection with its websites, services, communications, and
          business transactions, including communications sent through the {brand.programName}{" "}
          messaging program.
        </p>
        <p>
          {brand.publicBrandName} is a trade name and public-facing brand of{" "}
          {brand.legalBusinessName}.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>Depending on the nature of your interaction with {brand.publicBrandName}, we may collect:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Telephone or mobile number</li>
          <li>Company</li>
          <li>Professional role</li>
          <li>Transaction or acquisition information</li>
          <li>Documents or information you voluntarily provide</li>
          <li>Communication history</li>
          <li>Website or device information, where applicable</li>
        </ul>
        <p>
          We collect only the categories of information described in this policy in connection
          with the services we actually provide.
        </p>
      </section>

      <section>
        <h2>How Information Is Used</h2>
        <p>Information we collect may be used to:</p>
        <ul>
          <li>Respond to active inquiries</li>
          <li>Communicate regarding acquisitions or transactions</li>
          <li>Support due diligence</li>
          <li>Process document requests</li>
          <li>Facilitate pricing discussions</li>
          <li>Coordinate negotiations</li>
          <li>Arrange scheduling</li>
          <li>Administer transactions</li>
          <li>Provide customer care and support</li>
          <li>Meet legal, security, and compliance obligations</li>
        </ul>
      </section>

      <section>
        <h2>SMS and Mobile Information</h2>
        <p>
          Mobile information, including mobile phone numbers, SMS opt-in data, and SMS consent
          records, will not be sold, rented, or shared with third parties or affiliates for their
          own marketing or promotional purposes.
        </p>
        <p>SMS opt-in and consent information will not be shared with third parties for marketing purposes.</p>
        <p>
          Where service providers process communications on our behalf — for example, messaging
          or telecommunications platforms — they may process that data only as necessary to
          provide the services we have contracted them for, and they are not authorized to use
          mobile information for their own independent marketing purposes.
        </p>
      </section>

      <section>
        <h2>Messaging Program</h2>
        <p>
          {brand.programName}
          <br />
          SMS: <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a>
        </p>
        <p>Messages sent through this program may relate to:</p>
        <ul>
          <li>Active acquisition inquiries</li>
          <li>Asset information</li>
          <li>Due diligence</li>
          <li>Maintenance or document requests</li>
          <li>Pricing discussions</li>
          <li>Negotiation updates</li>
          <li>Scheduling</li>
          <li>Transaction coordination</li>
          <li>Customer care</li>
        </ul>
        <p>
          <strong>Message frequency varies based on the active inquiry or transaction.</strong>
        </p>
        <p>
          <strong>Message and data rates may apply.</strong>
        </p>
        <p>
          <strong>Reply STOP to opt out.</strong>
        </p>
        <p>
          <strong>Reply HELP for assistance.</strong>
        </p>
      </section>

      <section>
        <h2>Consent</h2>
        <p>
          SMS consent is voluntary. Consent to receive SMS messages is not a condition of purchase
          or obtaining services.
        </p>
      </section>

      <section>
        <h2>Data Sharing</h2>
        <p>
          We work with a limited number of operational service providers — such as
          telecommunications, hosting, and business-software platforms — who process information
          only as necessary to deliver the services we have engaged them for and under
          confidentiality and data-processing obligations. This is distinct from, and does not
          override, the mobile-data protections described above: mobile information, SMS opt-in
          data, and SMS consent records are not shared with any party for that party&apos;s own
          marketing or promotional purposes.
        </p>
      </section>

      <section>
        <h2>Data Retention</h2>
        <p>
          We retain information only as reasonably necessary for legitimate business,
          compliance, security, legal, and transaction purposes, after which it is deleted or
          de-identified in accordance with our internal retention practices.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We maintain reasonable administrative, technical, and organizational safeguards designed
          to protect personal information against unauthorized access, use, or disclosure. No
          method of transmission or storage is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </section>

      <section>
        <h2>User Choices and Rights</h2>
        <p>You may:</p>
        <ul>
          <li>Stop receiving SMS messages at any time by replying STOP</li>
          <li>Request corrections to information we hold about you</li>
          <li>Request information regarding data we have stored about you, where applicable</li>
          <li>
            Contact {brand.publicBrandName} regarding this policy or any privacy-related question
          </li>
        </ul>
      </section>

      <section>
        <h2>Updates</h2>
        <p>
          We may update this policy from time to time. The date below reflects the most recent
          revision.
        </p>
        <p className="last-updated">Last updated: {brand.lastUpdatedDisplay}</p>
      </section>

      <section>
        <h2>SMS Program Resources</h2>
        <p>
          For additional information regarding the {brand.programName} messaging program, please
          review:
        </p>
        <ul className="resource-links">
          <li>
            <Link href="/sms-terms">SMS Terms &amp; Conditions — {brand.productionUrl}/sms-terms</Link>
          </li>
          <li>
            <Link href="/sms-consent">SMS Consent Information — {brand.productionUrl}/sms-consent</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Legal Business Name:{" "}
          {hasValue(brand.legalBusinessName) ? (
            brand.legalBusinessName
          ) : (
            <PendingField value={brand.legalBusinessName} label="legal business name" />
          )}
          <br />
          Business Address: <PendingField value={brand.businessAddress} label="business address" />
          <br />
          Privacy Email:{" "}
          {hasValue(brand.privacyEmail || brand.supportEmail) ? (
            <a href={`mailto:${brand.privacyEmail || brand.supportEmail}`}>
              {brand.privacyEmail || brand.supportEmail}
            </a>
          ) : (
            <PendingField value={brand.privacyEmail} label="privacy email" />
          )}
          <br />
          Support Phone: <PendingField value={brand.supportPhone} label="support phone" />
        </p>
        <p>
          For assistance with the {brand.programName} SMS program, reply HELP to{" "}
          <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a> or contact{" "}
          {brand.publicBrandName} using the information above.
        </p>
      </section>
    </>
  );
}
