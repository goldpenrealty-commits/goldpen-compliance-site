# GOLDPEN GROUP Messaging Compliance Site

Public compliance microsite supporting the Twilio A2P 10DLC Customer Care campaign for
**GOLDPEN Acquisition Intelligence** (+1 786 460-4334). Independent from the main
`goldpengroup.com` site; intended to run on its own `compliance.goldpengroup.com` subdomain.

## Stack

Next.js (App Router) + TypeScript. No UI framework, no database, no environment variables at
this phase — it's a static/informational site with four pages.

## Pages

- `/` — overview + links
- `/privacy-policy`
- `/sms-terms`
- `/sms-consent`

`sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run typecheck   # tsc --noEmit
npm run build       # production build (also type-checks)
```

## Brand / business configuration

All brand and contact details live in `src/config/brand.ts`. Fields that have not been supplied
(legal business name, business address, support email/phone, privacy email) are left blank on
purpose rather than invented, and render as a visible `[Pending — ...]` marker on the page until
filled in. Fill these in from the **approved Twilio Business Profile** before production
sign-off — search the codebase for `PendingField` usage to find every place a value is still
missing.

## Web SMS consent form (not yet live)

`src/components/future/SmsConsentForm.tsx` contains the front-end for an optional web-based
consent form (per the project spec), but it is **not** imported into the routed `/sms-consent`
page and does not submit anywhere. Do not enable it, and do not declare "Web Form" as a Twilio
opt-in method, until it's wired to durable storage that records at minimum: phone number, name,
company, timestamp, consent-language version, source URL, and consent method.

## Twilio A2P submission copy

Final campaign description, consent/message-flow copy, sample messages, and HELP/STOP language
are in [`TWILIO_A2P_SUBMISSION.md`](./TWILIO_A2P_SUBMISSION.md) (internal only — not part of the
routed site, not linked from any page).

## Legal review

The policy language on this site was drafted to align with Twilio A2P 10DLC Customer Care
registration requirements, but it has **not** been reviewed by counsel. Have GOLDPEN GROUP's
legal/compliance counsel review the Privacy Policy, SMS Terms, and SMS Consent pages before
treating them as definitive legal documents.

## Deployment

Deployed via Vercel. See the deployment report delivered alongside this project for project
name, production URL, and custom-domain/DNS status.
