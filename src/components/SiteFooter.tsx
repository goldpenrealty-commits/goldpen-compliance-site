import Link from "next/link";
import { brand, hasValue } from "@/config/brand";
import { PendingField } from "@/components/PendingField";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-brand-name">{brand.publicBrandName}</p>
          <p>{brand.programName}</p>
          <p>
            SMS:{" "}
            <a href={`tel:${brand.smsNumberTel}`}>{brand.smsNumberDisplay}</a>
          </p>
          <p className="footer-contact">
            {hasValue(brand.supportEmail) ? (
              <a href={`mailto:${brand.supportEmail}`}>{brand.supportEmail}</a>
            ) : (
              <PendingField value={brand.supportEmail} label="support email" />
            )}
            {" · "}
            <PendingField value={brand.supportPhone} label="support phone" />
          </p>
          <p className="footer-address">
            <PendingField value={brand.businessAddress} label="business address" />
          </p>
        </div>

        <nav aria-label="Footer" className="footer-nav">
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/sms-terms">SMS Terms</Link>
            </li>
            <li>
              <Link href="/sms-consent">SMS Consent</Link>
            </li>
          </ul>
        </nav>

        <p className="footer-copyright">
          © {new Date(brand.lastUpdatedISO).getFullYear()} {brand.publicBrandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
