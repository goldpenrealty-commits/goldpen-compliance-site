import Link from "next/link";
import { brand } from "@/config/brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/sms-terms", label: "SMS Terms" },
  { href: "/sms-consent", label: "SMS Consent" },
];

export function NavBar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand-mark">
          {brand.publicBrandName}
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
