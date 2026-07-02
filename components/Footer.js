import Link from "next/link";
import { useRouter } from "next/router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  { label: "Twitter", href: "https://twitter.com", icon: "X" },
  { label: "Instagram", href: "https://instagram.com", icon: "ig" },
  { label: "GitHub", href: "https://github.com", icon: "gh" },
];

export default function Footer() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">AFH</span>
              </div>
              <span className="font-bold text-lg">AFH Projects</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              {t.footer_description || "Delivering innovative digital solutions for businesses worldwide."}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center text-xs font-bold text-white/60 hover:text-primary transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.nav_services}</h4>
            <ul className="space-y-2.5">
              {[
                { label: t.nav_services_website || "Website Development", href: "/services/website-development" },
                { label: t.nav_services_mobile || "Mobile Apps", href: "/services/mobile-aplication" },
                { label: t.nav_services_backend || "Backend & API", href: "/services/backend-api-development" },
                { label: t.nav_services_uiux || "UI/UX Design", href: "/services/uiux-design" },
                { label: t.nav_services_consulting || "IT Consulting", href: "/services/it-consulting" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: t.nav_home || "Home", href: "/" },
                { label: t.nav_about || "About", href: "/about" },
                { label: t.nav_portfolio || "Portfolio", href: "/portfolio" },
                { label: t.nav_contact || "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.nav_contact || "Contact"}</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <a href="mailto:info@afhprojects.com" className="text-sm text-white/50 hover:text-white transition-colors">
                  info@afhprojects.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <a href="tel:+6289528842802" className="text-sm text-white/50 hover:text-white transition-colors">
                  +62 895-2884-2802
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">Pekanbaru, Riau, Indonesia</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-xs text-white/40 mb-2">Subscribe to our newsletter</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 min-w-0 px-3 py-2 bg-white/5 border border-white/10 rounded-l-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-primary rounded-r-lg hover:bg-primary/90 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} AFH Projects. {t.footer_rights || "All rights reserved."}
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Cookie Policy", href: "/cookie-policy" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
