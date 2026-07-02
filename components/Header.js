import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Globe,
  ArrowRight,
  Monitor,
  Smartphone,
  BrainCircuit,
  Server,
  Palette,
} from "lucide-react";

const serviceIcons = {
  "/services/website-development": Monitor,
  "/services/mobile-application": Smartphone,
  "/services/it-consulting": BrainCircuit,
  "/services/backend-api-development": Server,
  "/services/uiux-design": Palette,
};

const serviceLinks = [
  { href: "/services/website-development", key: "nav_services_website" },
  { href: "/services/mobile-application", key: "nav_services_mobile" },
  { href: "/services/it-consulting", key: "nav_services_consulting" },
  { href: "/services/backend-api-development", key: "nav_services_backend" },
  { href: "/services/uiux-design", key: "nav_services_uiux" },
];

export default function Header() {
  const router = useRouter();
  const { locale, locales, asPath } = router;
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef();

  const t = locale === "id" ? id : en;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [router.pathname]);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(href + "/");
  };

  const navLinks = [
    { href: "/", label: t.nav_home },
    { href: "/about", label: t.nav_about },
    { href: "/portfolio", label: t.nav_portfolio },
    { href: "/contact", label: t.nav_contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-card-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="px-2.5 py-1 bg-accent text-background font-bold text-lg tracking-tight rounded-lg group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-shadow">
              AFH Projects
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 ${
                  isActive(link.href) ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-accent/10 ${
                  isActive("/services") ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {t.nav_services}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-card-bg border border-card-border rounded-xl shadow-xl p-2 animate-fade-in-up">
                  {serviceLinks.map((svc) => {
                    const Icon = serviceIcons[svc.href] || Monitor;
                    return (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted hover:bg-accent/10 hover:text-foreground transition-colors group"
                      >
                        <Icon className="w-4 h-4 text-accent/60 group-hover:text-accent transition-colors" />
                        <span>{t[svc.key]}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Language Pill */}
            <div className="hidden sm:flex items-center bg-card-bg border border-card-border rounded-full p-0.5">
              {(locales || []).map((lng) => (
                <Link
                  key={lng}
                  href={asPath}
                  locale={lng}
                  className={`px-2.5 py-1 text-xs font-mono font-medium rounded-full transition-all ${
                    locale === lng
                      ? "bg-accent text-background"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {lng.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-accent/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-accent text-background text-sm font-semibold rounded-lg hover:bg-accent-hover transition-all hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
            >
              {locale === "id" ? "Hubungi Kami" : "Contact Us"}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:bg-accent/5 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2">
            <p className="px-4 py-2 text-xs font-mono font-medium text-muted/60 uppercase tracking-wider">
              {t.nav_services}
            </p>
            {serviceLinks.map((svc) => {
              const Icon = serviceIcons[svc.href] || Monitor;
              return (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(svc.href)
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-accent/5 hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {t[svc.key]}
                </Link>
              );
            })}
          </div>

          {/* Mobile Language Switcher */}
          <div className="pt-4 px-4">
            <div className="flex items-center bg-card-bg border border-card-border rounded-full p-0.5 w-fit">
              {(locales || []).map((lng) => (
                <Link
                  key={lng}
                  href={asPath}
                  locale={lng}
                  className={`px-3 py-1.5 text-xs font-mono font-medium rounded-full transition-all ${
                    locale === lng
                      ? "bg-accent text-background"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {lng.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-4 px-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent text-background text-sm font-semibold rounded-lg hover:bg-accent-hover transition-all"
            >
              {locale === "id" ? "Hubungi Kami" : "Contact Us"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
