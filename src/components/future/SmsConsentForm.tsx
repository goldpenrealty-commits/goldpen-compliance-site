"use client";

import { useState } from "react";

const DISCLOSURE_TEXT =
  "By agreeing to receive SMS communications from GOLDPEN GROUP, you agree to receive " +
  "customer-care and transaction-related text messages from GOLDPEN Acquisition Intelligence " +
  "regarding active acquisition inquiries, asset information, due diligence, document requests, " +
  "pricing discussions, negotiation updates, scheduling, and transaction coordination. Message " +
  "frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for " +
  "assistance. Consent is not a condition of purchase or obtaining services. See our Privacy " +
  "Policy and SMS Terms & Conditions.";

/**
 * Not wired to durable storage yet, so it must not be treated as a live
 * opt-in method or linked from the routed /sms-consent page — Twilio
 * "Web Form" consent can only be declared once this actually persists
 * submissions. Kept here so the backend hookup is a small follow-up
 * rather than a rebuild.
 */
export function SmsConsentForm() {
  const [consented, setConsented] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="consent-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="form-field">
        <label htmlFor="fullName">Full name</label>
        <input id="fullName" name="fullName" type="text" required autoComplete="name" />
      </div>

      <div className="form-field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" required autoComplete="organization" />
      </div>

      <div className="form-field">
        <label htmlFor="role">Professional role</label>
        <input id="role" name="role" type="text" required autoComplete="organization-title" />
      </div>

      <div className="form-field">
        <label htmlFor="mobileNumber">Mobile number</label>
        <input id="mobileNumber" name="mobileNumber" type="tel" required autoComplete="tel" />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email (optional)</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>

      <div className="form-field">
        <label htmlFor="dealReference">Acquisition/deal reference (optional)</label>
        <input id="dealReference" name="dealReference" type="text" />
      </div>

      <div className="form-field consent-checkbox">
        <label>
          <input
            type="checkbox"
            name="smsConsent"
            required
            checked={consented}
            onChange={(event) => setConsented(event.target.checked)}
          />
          <span>{DISCLOSURE_TEXT}</span>
        </label>
      </div>

      <button type="submit" disabled={!consented}>
        Submit
      </button>

      {submitted && (
        <p role="status">
          This form is not yet connected to a live submission backend. Please contact GOLDPEN
          GROUP directly by phone or text in the meantime.
        </p>
      )}
    </form>
  );
}
