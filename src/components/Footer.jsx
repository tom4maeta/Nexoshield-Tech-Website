import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61574696861347",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nexoshieldsoln-254s",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "#",
  },
];

const COMPANY_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Book a Service", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

const SERVICE_LINKS = [
  { name: "Software Development", path: "/services#software" },
  { name: "Web Design & Development", path: "/services#web" },
  { name: "POS Systems", path: "/services#pos" },
  { name: "IT Services", path: "/services#it" },
  { name: "Cybersecurity", path: "/services#cybersecurity" },
  { name: "Computer Repair", path: "/services#repair" },
];

const CONTACT_LINKS = [
  {
    icon: FaMapMarkerAlt,
    label: "Shepherd-Arcade Building, Nairobi, Kenya",
    href: "https://maps.google.com/?q=Shepherd-Arcade%20Building%20Nairobi%20Kenya",
  },
  {
    icon: FaPhoneAlt,
    label: "+254 738 552 698",
    href: "tel:+254738552698",
  },
  {
    icon: FaPhoneAlt,
    label: "+254 728 107 598",
    href: "tel:+254728107598",
  },
  {
    icon: FaEnvelope,
    label: "info@nexoshieldtech.co.ke",
    href: "mailto:info@nexoshieldtech.co.ke",
  },
];

function FooterLinkList({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
        {title}
      </h3>

      <ul className="mt-6 space-y-3">
        {links.map(({ name, path }) => (
          <li key={name}>
            <Link
              to={path}
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-400">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img
                  src="/logo.png"
                  alt="Nexoshield Technology Solutions"
                  className="h-full w-full object-contain"
                />
              </span>

              <span className="max-w-[13rem] text-lg font-black leading-tight text-white">
                Nexoshield Technology Solutions
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              We design, build, and secure modern digital solutions for
              businesses that need reliable technology, practical support, and
              stronger protection.
            </p>

            <Link
              to="/booking"
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-black text-white shadow-[0_18px_40px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Book a Service
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="mt-8 flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-blue-400 hover:bg-blue-600"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <FooterLinkList title="Company" links={COMPANY_LINKS} />

          <FooterLinkList title="Services" links={SERVICE_LINKS} />

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <ul className="mt-6 space-y-4">
              {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex gap-3 text-sm leading-6 text-slate-400 transition hover:text-white"
                  >
                    <Icon className="mt-1 shrink-0 text-blue-400" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
            <p>
              &copy; {currentYear} Nexoshield Technology Solutions. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link to="/contact" className="transition hover:text-white">
                Support
              </Link>
              <Link to="/booking" className="transition hover:text-white">
                Request Service
              </Link>
              <Link to="/services" className="transition hover:text-white">
                Service Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
