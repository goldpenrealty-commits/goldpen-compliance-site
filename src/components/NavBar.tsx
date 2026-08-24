import { brand } from "@/config/brand";

const links = [
  { path: "", label: "Home" },
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/sms-terms", label: "SMS Terms" },
  { path: "/sms-consent", label: "SMS Consent" },
  { path: "/sms-opt-in", label: "SMS Opt-In" },
];

export function NavBar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href={`${brand.productionUrl}/`} className="brand-mark">
          {brand.publicBrandName}
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.path}>
                <a href={`${brand.productionUrl}${link.path}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
