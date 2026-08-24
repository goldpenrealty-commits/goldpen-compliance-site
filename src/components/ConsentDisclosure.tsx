import Link from "next/link";
import { brand } from "@/config/brand";

export function ConsentDisclosure() {
  return (
    <aside className="disclosure-box" aria-label="SMS consent disclosure">
      <p>
        By agreeing to receive SMS communications from {brand.publicBrandName}, you agree to
        receive customer-care and transaction-related text messages from {brand.programName}{" "}
        regarding active acquisition inquiries, asset information, due diligence, document
        requests, pricing discussions, negotiation updates, scheduling, and transaction
        coordination.
      </p>
      <p>
        <strong>Message frequency varies.</strong>
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
      <p>Consent is not a condition of purchase or obtaining services.</p>
      <p>See our:</p>
      <ul className="resource-links">
        <li>
          <Link href="/privacy-policy">Privacy Policy — {brand.productionUrl}/privacy-policy</Link>
        </li>
        <li>
          <Link href="/sms-terms">SMS Terms &amp; Conditions — {brand.productionUrl}/sms-terms</Link>
        </li>
      </ul>
    </aside>
  );
}
