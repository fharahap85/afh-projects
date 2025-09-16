import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";

export default function About() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.nav_about} description="About our company" />
      <section className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{t.nav_portfolio}</h1>
        <p>
          {locale === "id"
            ? "Kami adalah perusahaan yang berdedikasi untuk kualitas dan layanan terbaik."
            : "We are a company dedicated to quality and top-notch service."}
        </p>
      </section>
    </Layout>
  );
}
