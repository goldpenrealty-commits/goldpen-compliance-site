# Twilio A2P 10DLC Submission — GOLDPEN Acquisition Intelligence

Internal reference only. Not published or linked from the public site.

This file is not copied into the Next.js `public/` directory and is not routed by the app —
it will not be reachable at any `compliance.goldpengroup.com` URL.

## Use Case

Customer Care

## Campaign Description

> GOLDPEN GROUP uses this campaign for one-to-one customer care and business communications
> with brokers, sellers, representatives, vendors, business advisors, and other authorized
> contacts involved in active acquisition inquiries and transactions. Messages may include
> responses to inquiries, requests for aircraft or other asset information, maintenance and
> due-diligence documentation, pricing discussions, negotiation updates, scheduling, and
> transaction coordination. Recipients have affirmatively consented to receive SMS
> communications in connection with an active business inquiry or transaction. Messages are
> conversational and transactional in nature and are not used for unsolicited bulk marketing.

## Opt-In Methods

- Via Text
- Verbal

Do **not** select "Web Form" in the Twilio console. The web consent form exists in the codebase
(`src/components/future/SmsConsentForm.tsx`) but is not wired to durable storage and is not
linked from the live `/sms-consent` page. Only enable it as a declared opt-in method once
submissions are actually being persisted.

## Recipient Consent / Message Flow

> Recipients are brokers, sellers, representatives, vendors, business advisors, and other
> authorized contacts involved in active acquisition inquiries or transactions with GOLDPEN
> GROUP. Consent is obtained when the recipient initiates an SMS conversation with GOLDPEN
> Acquisition Intelligence at (786) 460-4334, affirmatively agrees by SMS to continue an
> existing business conversation through text messaging, or verbally provides or confirms
> their mobile number and affirmatively agrees to receive transaction-related SMS
> communications. During verbal consent, recipients are informed that message frequency
> varies, message and data rates may apply, they may reply STOP to opt out or HELP for
> assistance, and consent is not a condition of purchase or obtaining services. Public
> availability of a telephone number does not constitute consent. Messages may include asset
> information, due diligence, maintenance or document requests, pricing discussions,
> negotiation updates, scheduling, and transaction coordination. Privacy Policy:
> https://compliance.goldpengroup.com/privacy-policy. SMS Terms:
> https://compliance.goldpengroup.com/sms-terms. Consent details:
> https://compliance.goldpengroup.com/sms-consent.

## Sample Messages

1. "GOLDPEN Acquisition Intelligence: Thank you for speaking with us regarding the active
   acquisition inquiry. Please send the latest specification sheet and available due-diligence
   documentation when convenient. Message frequency varies. Msg & data rates may apply. Reply
   STOP to opt out or HELP for help."

2. "GOLDPEN Acquisition Intelligence: We reviewed the asset information and would like to
   discuss the seller's current asking price and the latest maintenance or inspection status.
   Reply STOP to opt out or HELP for help."

3. "GOLDPEN Acquisition Intelligence: We received the requested documents. Our acquisition team
   is reviewing the information and will follow up regarding pricing and next steps. Reply STOP
   to opt out or HELP for help."

4. "GOLDPEN Acquisition Intelligence: The buyer would like to continue discussions regarding the
   current offer. Please let us know whether the seller has provided a counteroffer or revised
   terms. Reply STOP to opt out or HELP for help."

5. "GOLDPEN Acquisition Intelligence: We are coordinating the next due-diligence step for this
   transaction. Please confirm your availability and the preferred time for scheduling. Reply
   STOP to opt out or HELP for help."

## HELP / STOP / Opt-In Confirmation Language

**HELP**

> GOLDPEN Acquisition Intelligence: For assistance regarding an active acquisition inquiry or
> transaction, contact GOLDPEN GROUP at [SUPPORT CONTACT — pending final business info]. Message
> and data rates may apply. Reply STOP to opt out.

**STOP**

> You have opted out of GOLDPEN Acquisition Intelligence SMS messages. You will no longer
> receive messages from this program. Reply START to opt back in.

**Opt-In Confirmation**

> GOLDPEN Acquisition Intelligence: You are subscribed to customer-care and transaction-related
> SMS regarding active acquisition inquiries. Message frequency varies. Message and data rates
> may apply. Reply STOP to opt out or HELP for assistance.

## Open Items Before Submission

- [ ] Replace `[SUPPORT CONTACT]` in the HELP response above with the final support phone/email.
- [ ] Confirm `src/config/brand.ts` has the exact legal business name and address from the
      approved Twilio Business Profile.
- [ ] Confirm production deployment is live at the URLs referenced above before submitting.
