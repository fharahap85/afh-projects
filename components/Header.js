import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  return (
    <header className="p-4 shadow flex justify-between items-center">
      <nav className="space-x-4">
        <Link href="/">{locale === "id" ? "Beranda" : "Home"}</Link>
        <Link href="/about">{locale === "id" ? "Tentang" : "About"}</Link>
        <Link href="/services">{locale === "id" ? "Layanan" : "Services"}</Link>
        <Link href="/contact">{locale === "id" ? "Kontak" : "Contact"}</Link>
      </nav>
      <div>
        {(locales || []).map((lng) => (
          <Link key={lng} href={asPath} locale={lng} className="ml-2 underline">
            {lng.toUpperCase()}
          </Link>
        ))}
      </div>
    </header>
  );
}
