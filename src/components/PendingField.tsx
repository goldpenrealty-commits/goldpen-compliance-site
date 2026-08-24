import { hasValue } from "@/config/brand";

/**
 * Renders a brand-config value, or a visibly-flagged placeholder when
 * that value hasn't been provided yet. Keeps unverified business
 * details from silently shipping as blank or fabricated text.
 */
export function PendingField({ value, label }: { value: string; label: string }) {
  if (hasValue(value)) return <>{value}</>;
  return <span className="pending-field">[Pending — {label}]</span>;
}
