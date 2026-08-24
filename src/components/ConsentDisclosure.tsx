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
        coordination. Message frequency varies. Message and data rates may apply. Reply STOP to
        opt out or HELP for assistance. Consent is not a condition of purchase or obtaining
        services. See our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
        <Link href="/sms-terms">SMS Terms &amp; Conditions</Link>.
      </p>
    </aside>
  );
}
