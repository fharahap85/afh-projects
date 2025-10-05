import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Link from "next/link";

export default function TermsAndConditions() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.terms_title} description={t.terms_description} />

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">{t.terms_hero_title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">{t.terms_hero_text}</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8">{t.terms_and_conditions.intro}</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.interpretation_and_definitions.title}</h2>
              <h3 className="text-xl font-medium mb-2">{t.terms_and_conditions.interpretation_and_definitions.interpretation}</h3>
              <p className="text-gray-700 mb-4">{t.terms_and_conditions.interpretation_and_definitions.interpretation}</p>
              <h3 className="text-xl font-medium mb-2">Definitions</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">{t.terms_and_conditions.interpretation_and_definitions.definitions.affiliate}</li>
                <li className="mb-2">{t.terms_and_conditions.interpretation_and_definitions.definitions.country}</li>
                <li className="mb-2">{t.terms_and_conditions.interpretation_and_definitions.definitions.company}</li>
                <li className="mb-2">{t.terms_and_conditions.interpretation_and_definitions.definitions.device}</li>
                <li className="mb-2">{t.terms_and_conditions.interpretation_and_definitions.definitions.service}</li>
                <li className="mb-2">{t.terms_and_conditions.interpretation_and_definitions.definitions.terms}</li>
                <li className="mb-2">{t.terms_and_conditions.interpretation_and_definitions.definitions.third_party_social_media}</li>
                <li className="mb-2">{t.terms_and_conditions.interpretation_and_definitions.definitions.website}</li>
                <li className="mb-2">{t.terms_and_conditions.interpretation_and_definitions.definitions.you}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.acknowledgment.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.acknowledgment.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.links_to_other_websites.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.links_to_other_websites.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.termination.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.termination.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.limitation_of_liability.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.limitation_of_liability.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.as_is_disclaimer.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.as_is_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.governing_law.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.governing_law.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.disputes_resolution.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.disputes_resolution.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.eu_users.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.eu_users.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.us_legal_compliance.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.us_legal_compliance.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.severability_and_waiver.title}</h2>
              <h3 className="text-xl font-medium mb-2">Severability</h3>
              <p className="text-gray-700 mb-4">{t.terms_and_conditions.severability_and_waiver.severability}</p>
              <h3 className="text-xl font-medium mb-2">Waiver</h3>
              <p className="text-gray-700">{t.terms_and_conditions.severability_and_waiver.waiver}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.translation_interpretation.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.translation_interpretation.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.changes_to_terms.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.changes_to_terms.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.terms_and_conditions.contact_us.title}</h2>
              <p className="text-gray-700">{t.terms_and_conditions.contact_us.content}</p>
              <p className="text-gray-700">{t.terms_and_conditions.contact_us.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
