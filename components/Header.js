import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";

const services = [
  { title: "Website Development", icon: "🌐", href: "/services/website-development" },
  { title: "Mobile App Development", icon: "📱", href: "/services/mobile-aplication" },
  { title: "Web Application", icon: "⚡", href: "/services/backend-api-development" },
  { title: "UI/UX Design", icon: "🎨", href: "/services/uiux-design" },
  { title: "AI Automation", icon: "🧠", href: "/services/it-consulting" },
  { title: "Cloud Solutions", icon: "☁️", href: "/services/backend-api-development" },
];

export default function Header() {
  const router = useRouter();
  const { locale, locales, asPath } = router;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const t = locale === "id" ? id : en;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(href + "/");
  };

  const navLinks = [
    { label: t.nav_home, href: "/" },
    { label: t.nav_about, href: "/about" },
    { label: t.nav_services, href: "/services", hasDropdown: true },
    { label: t.nav_portfolio, href: "/portfolio" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">AFH</span>
              </div>
              <span className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? "text-secondary" : "text-secondary"
              }`}>
                AFH Projects
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-primary bg-primary/5"
                          : "text-muted hover:text-secondary hover:bg-surface"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-border p-2"
                        >
                          {services.map((svc) => (
                            <Link
                              key={svc.href}
                              href={svc.href}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface transition-colors group"
                            >
                              <span className="text-lg">{svc.icon}</span>
                              <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                                {svc.title}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-primary bg-primary/5"
                        : "text-muted hover:text-secondary hover:bg-surface"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-surface rounded-lg px-1 py-1">
                {locales?.map((lng) => (
                  <Link
                    key={lng}
                    href={asPath}
                    locale={lng}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      locale === lng
                        ? "bg-white text-secondary shadow-sm"
                        : "text-muted hover:text-secondary"
                    }`}
                  >
                    {lng.toUpperCase()}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-secondary" />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-lg text-secondary">Menu</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg hover:bg-surface transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-secondary" />
                  </button>
                </div>

                <nav className="flex-1 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-primary bg-primary/5"
                          : "text-muted hover:text-secondary hover:bg-surface"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile Services Submenu */}
                  <div className="pt-2">
                    <p className="px-4 py-2 text-xs font-semibold text-muted/60 uppercase tracking-wider">
                      {t.nav_services}
                    </p>
                    {services.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-muted hover:text-secondary hover:bg-surface transition-colors"
                      >
                        <span>{svc.icon}</span>
                        <span>{svc.title}</span>
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile Language Switcher */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  {locales?.map((lng) => (
                    <Link
                      key={lng}
                      href={asPath}
                      locale={lng}
                      onClick={() => setMobileOpen(false)}
                      className={`flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        locale === lng
                          ? "bg-primary text-white"
                          : "bg-surface text-muted hover:text-secondary"
                      }`}
                    >
                      {lng.toUpperCase()}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 block text-center px-5 py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 transition-all"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
