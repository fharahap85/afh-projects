import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Link from "next/link";

export default function Disclaimer() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.disclaimer_title} description={t.disclaimer_description} />

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">{t.disclaimer_hero_title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">{t.disclaimer_hero_text}</p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.disclaimer.interpretation_and_definitions.title}</h2>
              <h3 className="text-xl font-medium mb-2">{t.disclaimer.interpretation_and_definitions.interpretation}</h3>
              <p className="text-gray-700 mb-4">{t.disclaimer.interpretation_and_definitions.interpretation}</p>
              <h3 className="text-xl font-medium mb-2">Definitions</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">{t.disclaimer.interpretation_and_definitions.definitions.company}</li>
                <li className="mb-2">{t.disclaimer.interpretation_and_definitions.definitions.service}</li>
                <li className="mb-2">{t.disclaimer.interpretation_and_definitions.definitions.you}</li>
                <li className="mb-2">{t.disclaimer.interpretation_and_definitions.definitions.website}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.disclaimer.disclaimer.title}</h2>
              <p className="text-gray-700">{t.disclaimer.disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.disclaimer.external_links_disclaimer.title}</h2>
              <p className="text-gray-700">{t.disclaimer.external_links_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.disclaimer.errors_and_omissions_disclaimer.title}</h2>
              <p className="text-gray-700">{t.disclaimer.errors_and_omissions_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.disclaimer.fair_use_disclaimer.title}</h2>
              <p className="text-gray-700">{t.disclaimer.fair_use_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.disclaimer.views_expressed_disclaimer.title}</h2>
              <p className="text-gray-700">{t.disclaimer.views_expressed_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.disclaimer.no_responsibility_disclaimer.title}</h2>
              <p className="text-gray-700">{t.disclaimer.no_responsibility_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.disclaimer.use_at_your_own_risk_disclaimer.title}</h2>
              <p className="text-gray-700">{t.disclaimer.use_at_your_own_risk_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.disclaimer.contact_us.title}</h2>
              <p className="text-gray-700">{t.disclaimer.contact_us.content}</p>
              <p className="text-gray-700">{t.disclaimer.contact_us.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
