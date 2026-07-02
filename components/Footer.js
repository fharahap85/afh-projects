import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <footer className="border-t border-card-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-accent">A</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-accent transition-colors">
                AFH Projects
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              {t.footer_description || "Delivering innovative digital solutions for a better future."}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/fharahap85"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card-bg border border-card-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card-bg border border-card-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-card-bg border border-card-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">
              {locale === "id" ? "Tautan" : "Quick Links"}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: t.nav_home },
                { href: "/about", label: t.nav_about },
                { href: "/portfolio", label: t.nav_portfolio },
                { href: "/contact", label: t.nav_contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy-policy", label: t.footer_privacy_policy || "Privacy Policy" },
                { href: "/terms-of-service", label: t.footer_terms_conditions || "Terms & Conditions" },
                { href: "/cookie-policy", label: t.footer_cookie_policy || "Cookie Policy" },
                { href: "/disclaimer", label: t.footer_disclaimer || "Disclaimer" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">
              {t.nav_contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@afhprojects.com" className="text-sm text-muted hover:text-accent transition-colors">
                  info@afhprojects.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+6289528842802" className="text-sm text-muted hover:text-accent transition-colors">
                  +62 895-2884-2802
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted">
                  Jl. Sekolah Gang Ikhlas, Pekanbaru, Riau
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} AFH Projects. {t.footer_rights || "All rights reserved."}
          </p>
          <p className="text-xs text-muted font-mono">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
