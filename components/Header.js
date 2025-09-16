import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../components/NavLink";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";

const flags = {
  id: "https://flagcdn.com/w40/id.png",
  en: "https://flagcdn.com/w40/gb.png",
};

export default function Header() {
  const router = useRouter();
  const { locale, locales, asPath } = router;
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef();

  const t = locale === "id" ? id : en;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to determine if a menu item is active
  const isActive = (href) => {
    // Only mark "Home" as active if the pathname is exactly "/"
    if (href === "/") {
      return router.pathname === "/";
    }
    // For other routes, check if pathname matches or starts with href
    return router.pathname === href || router.pathname.startsWith(href + "/");
  };

  return (
    <div className="flex flex-wrap place-items-center">
      <section className="relative mx-auto w-full">
        {/* Navbar */}
        <nav className="flex justify-between bg-blue-900 text-white w-full">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold font-heading">
              Logo Here.
            </Link>

            {/* Nav Links - Desktop */}
            <ul className="hidden md:flex px-6 mx-auto font-semibold font-heading space-x-16">
              <li>
                <NavLink href="/">{t.nav_home}</NavLink>
              </li>
              <li>
                <NavLink href="/about">{t.nav_about}</NavLink>
              </li>
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center space-x-1 hover:text-blue-600 focus:outline-none ${
                    isActive("/services") ? "border-b border-gray-200 text-yellow-500" : ""
                  }`}
                >
                  <span>{t.nav_services}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {servicesOpen && (
                  <ul className="absolute left-0 mt-2 w-64 bg-white text-gray-900 rounded-lg shadow-lg z-50">
                    <li className="px-4 py-3 hover:bg-gray-100 text-md">
                      <Link href="/services/layanan-website">
                        🌐 Pembuatan Website
                        <p className="text-xs text-gray-500">
                          Kami membangun website profesional dan responsif sesuai kebutuhan bisnis Anda.
                        </p>
                      </Link>
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-100 text-md">
                      <Link href="/services/layanan-aplikasi">
                        📱 Aplikasi Mobile
                        <p className="text-xs text-gray-500">Pengembangan aplikasi Android dan iOS dengan performa tinggi.</p>
                      </Link>
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-100 text-md">
                      <Link href="/services/layanan-konsultasi">
                        🧠 Konsultasi IT
                        <p className="text-xs text-gray-500">Sesi konsultasi untuk solusi teknologi dan strategi digital.</p>
                      </Link>
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-100 text-md">
                      <Link href="/services/layanan-backend">
                        ⚙️ Backend & API
                        <p className="text-xs text-gray-500">Backend yang scalable, aman, dan cepat dengan integrasi API modern.</p>
                      </Link>
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-100 text-md">
                      <Link href="/services/layanan-uiux">
                        🎨 UI/UX Design
                        <p className="text-xs text-gray-500">Desain antarmuka dan pengalaman pengguna yang menarik dan intuitif.</p>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <NavLink href="/portfolio">{t.nav_portfolio}</NavLink>
              </li>
            </ul>

            {/* Language Switcher - Desktop */}
            <div className="hidden md:flex space-x-2 mr-6">
              {(locales || []).map((lng) => (
                <Link
                  key={lng}
                  href={asPath}
                  locale={lng}
                  className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm transition ${
                    router.locale === lng
                      ? "bg-yellow-600 text-white border-2 border-yellow-600"
                      : "text-gray-300 hover:text-white hover:bg-blue-900 hover:border-2 hover:border-yellow-600"
                  }`}
                >
                  <Image
                    src={flags[lng]} // Pastikan flags[lng] adalah URL yang valid
                    alt={`${lng} flag`}
                    width={20} // Sesuaikan ukuran gambar
                    height={20} // Sesuaikan ukuran gambar
                    className="rounded-sm object-cover"
                  />
                  <span>{lng.toUpperCase()}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Toggle Button */}
            <div className="flex md:hidden ml-auto">
              <button className="flex items-center text-white" onClick={() => setMenuOpen(!menuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            className={`md:hidden fixed top-0 right-0 w-3/4 h-screen bg-gray-900 bg-opac text-white z-50 transform transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-6 space-y-6 flex flex-col">
              {/* Close Button */}
              <div className="flex justify-end">
                <button onClick={() => setMenuOpen(false)} className="text-white focus:outline-none">
                  ✖
                </button>
              </div>

              {/* Menu Links */}
              <nav className="space-y-4 text-lg font-semibold">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className={`block hover:text-blue-400 ${isActive("/") ? "text-yellow-500" : ""}`}
                >
                  {t.nav_home}
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className={`block hover:text-blue-400 ${isActive("/about") ? "text-yellow-500" : ""}`}
                >
                  {t.nav_about}
                </Link>
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex items-center space-x-1 hover:text-blue-400 focus:outline-none ${
                      isActive("/services") ? "text-yellow-500" : ""
                    }`}
                  >
                    <span>{t.nav_services}</span>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : "rotate-0"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <ul className="mt-2 space-y-2 pl-4">
                      <li className="hover:text-blue-400 text-md">
                        <Link
                          href="/services/layanan-website"
                          onClick={() => setMenuOpen(false)}
                          className={`block ${isActive("/services/layanan-website") ? "text-yellow-500" : ""}`}
                        >
                          🌐 {t.nav_services_website || "Pembuatan Website"}
                          <p className="text-xs text-gray-400">
                            {t.nav_services_website_desc ||
                              "Kami membangun website profesional dan responsif sesuai kebutuhan bisnis Anda."}
                          </p>
                        </Link>
                      </li>
                      <li className="hover:text-blue-400 text-md">
                        <Link
                          href="/services/layanan-aplikasi"
                          onClick={() => setMenuOpen(false)}
                          className={`block ${isActive("/services/layanan-aplikasi") ? "text-yellow-500" : ""}`}
                        >
                          📱 {t.nav_services_mobile || "Aplikasi Mobile"}
                          <p className="text-xs text-gray-400">
                            {t.nav_services_mobile_desc || "Pengembangan aplikasi Android dan iOS dengan performa tinggi."}
                          </p>
                        </Link>
                      </li>
                      <li className="hover:text-blue-400 text-md">
                        <Link
                          href="/services/layanan-konsultasi"
                          onClick={() => setMenuOpen(false)}
                          className={`block ${isActive("/services/layanan-konsultasi") ? "text-yellow-500" : ""}`}
                        >
                          🧠 {t.nav_services_consulting || "Konsultasi IT"}
                          <p className="text-xs text-gray-400">
                            {t.nav_services_consulting_desc || "Sesi konsultasi untuk solusi teknologi dan strategi digital."}
                          </p>
                        </Link>
                      </li>
                      <li className="hover:text-blue-400 text-md">
                        <Link
                          href="/services/layanan-backend"
                          onClick={() => setMenuOpen(false)}
                          className={`block ${isActive("/services/layanan-backend") ? "text-yellow-500" : ""}`}
                        >
                          ⚙️ {t.nav_services_backend || "Backend & API"}
                          <p className="text-xs text-gray-400">
                            {t.nav_services_backend_desc || "Backend yang scalable, aman, dan cepat dengan integrasi API modern."}
                          </p>
                        </Link>
                      </li>
                      <li className="hover:text-blue-400 text-md">
                        <Link
                          href="/services/layanan-uiux"
                          onClick={() => setMenuOpen(false)}
                          className={`block ${isActive("/services/layanan-uiux") ? "text-yellow-500" : ""}`}
                        >
                          🎨 {t.nav_services_uiux || "UI/UX Design"}
                          <p className="text-xs text-gray-400">
                            {t.nav_services_uiux_desc || "Desain antarmuka dan pengalaman pengguna yang menarik dan intuitif."}
                          </p>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
                <Link
                  href="/portfolio"
                  onClick={() => setMenuOpen(false)}
                  className={`block hover:text-blue-400 ${isActive("/portfolio") ? "text-yellow-500" : ""}`}
                >
                  {t.nav_portfolio}
                </Link>
              </nav>

              {/* Language Switcher */}
              <div className="mt-10 flex space-x-4">
                {(locales || []).map((lng) => (
                  <Link
                    key={lng}
                    href={asPath}
                    locale={lng}
                    onClick={() => setMenuOpen(false)} // Menutup menu setelah memilih bahasa
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm transition ${
                      router.locale === lng ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                  >
                    <Image
                      src={flags[lng]} // Pastikan flags[lng] berisi URL gambar bendera yang valid
                      alt={`${lng} flag`}
                      width={20} // Ukuran gambar (dalam px)
                      height={20} // Ukuran gambar (dalam px)
                      className="rounded-sm object-cover"
                    />
                    <span>{lng.toUpperCase()}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
