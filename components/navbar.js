import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { locale, locales, asPath } = useRouter();

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-lg font-bold">
        <Link href="/">MyCompany</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/" locale={locale}>
          Home
        </Link>
        <Link href="/about" locale={locale}>
          About
        </Link>
        <Link href="/services" locale={locale}>
          Services
        </Link>
        <Link href="/contact" locale={locale}>
          Contact
        </Link>

        {/* Language Switcher */}
        <select
          value={locale}
          onChange={(e) => {
            const newLocale = e.target.value;
            window.location.href = `/${newLocale}${asPath}`;
          }}
          className="border border-gray-300 rounded p-1 text-sm focus:outline-none focus:ring focus:border-blue-400"
        >
          {locales.map((loc) => (
            <option key={loc} value={loc}>
              {loc === "id" ? "🇮🇩 Indonesia" : "🇬🇧 English"}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}
