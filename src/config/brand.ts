/**
 * Centralized brand + business configuration for the GOLDPEN GROUP
 * messaging compliance microsite.
 *
 * Fields left as empty strings are NOT invented and must be filled in
 * with the exact information from the approved Twilio Business Profile
 * before this site is treated as production-final. Pages render a
 * visible "Pending" marker (see src/components/PendingField.tsx)
 * wherever an empty field would otherwise be displayed.
 */

export const brand = {
  // Confirmed by the business owner — safe to use as-is.
  publicBrandName: "GOLDPEN GROUP",
  programName: "GOLDPEN Acquisition Intelligence",
  smsNumberDisplay: "+1 (786) 460-4334",
  smsNumberTel: "+17864604334",
  productionUrl: "https://compliance.goldpengroup.com",
  lastUpdatedDisplay: "August 24, 2026",
  lastUpdatedISO: "2026-08-24",

  // NOT YET PROVIDED — do not invent. Must match the approved Twilio
  // Business Profile exactly before production sign-off.
  legalBusinessName: "",
  businessAddress: "9835 SW 72 St Suite 211, Miami, FL 33173",
  supportEmail: "support@goldpengroup.com",
  supportPhone: "",
  /** Only set this if privacy inquiries go to a different address than supportEmail. */
  privacyEmail: "",
} as const;

export function hasValue(value: string): boolean {
  return value.trim().length > 0;
}
