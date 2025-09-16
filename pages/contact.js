import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";

export default function Contact() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.nav_contact} description="Contact us" />
      <section className="p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{t.nav_contact}</h1>
        <form action="https://formspree.io/f/mzzvryrg" method="POST" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={locale === "id" ? "Nama Anda" : "Your Name"}
            className="w-full border rounded p-2"
            required
          />
          <input type="email" name="email" placeholder="Email" className="w-full border rounded p-2" required />
          <textarea
            name="message"
            placeholder={locale === "id" ? "Pesan Anda" : "Your Message"}
            className="w-full border rounded p-2"
            rows="4"
            required
          />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            {locale === "id" ? "Kirim Pesan" : "Send Message"}
          </button>
        </form>
      </section>
    </Layout>
  );
}
