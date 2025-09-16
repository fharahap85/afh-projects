import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { locale, locales, asPath } = useRouter();

  return (
    <nav className="flex justify-between float-right items-center p-4 bg-gray-900 text-white shadow-md">
      <div className="text-xl font-semibold">
        <Link href="/" className="hover:text-blue-400 transition-all">
          MyCompany
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/" locale={locale} className="hover:text-blue-400 transition-all">
          Home
        </Link>
        <Link href="/about" locale={locale} className="hover:text-blue-400 transition-all">
          About
        </Link>
        <Link href="/services" locale={locale} className="hover:text-blue-400 transition-all">
          Services
        </Link>
        <Link href="/contact" locale={locale} className="hover:text-blue-400 transition-all">
          Contact
        </Link>

        <select
          value={locale}
          onChange={(e) => {
            const newLocale = e.target.value;
            window.location.href = `/${newLocale}${asPath}`;
          }}
          className="bg-gray-800 border border-gray-600 text-white rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:border-blue-400"
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
