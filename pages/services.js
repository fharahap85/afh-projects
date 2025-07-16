import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";

export default function Services() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.nav_services} description="Our services" />
      <section className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{t.nav_services}</h1>
        <ul className="list-disc ml-6 space-y-2">
          <li>{locale === "id" ? "Konsultasi IT" : "IT Consultation"}</li>
          <li>{locale === "id" ? "Desain Website" : "Website Design"}</li>
          <li>{locale === "id" ? "Manajemen Proyek" : "Project Management"}</li>
        </ul>
      </section>
    </Layout>
  );
}
