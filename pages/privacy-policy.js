import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Link from "next/link";

export default function PrivacyPolicy() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.privacy_title} description={t.privacy_description} />

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">{t.privacy_hero_title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">{t.privacy_hero_text}</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8">{t.privacy_policy.intro}</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.interpretation_and_definitions.title}</h2>
              <h3 className="text-xl font-medium mb-2">{t.privacy_policy.interpretation_and_definitions.interpretation}</h3>
              <p className="text-gray-700 mb-4">{t.privacy_policy.interpretation_and_definitions.interpretation}</p>
              <h3 className="text-xl font-medium mb-2">Definitions</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.account}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.affiliate}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.company}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.cookies}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.country}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.device}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.personal_data}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.service}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.service_provider}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.usage_data}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.website}</li>
                <li className="mb-2">{t.privacy_policy.interpretation_and_definitions.definitions.you}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.collecting_and_using_personal_data.title}</h2>
              <h3 className="text-xl font-medium mb-2">
                {t.privacy_policy.collecting_and_using_personal_data.types_of_data_collected.title}
              </h3>
              <h4 className="text-lg font-medium mb-2">
                {t.privacy_policy.collecting_and_using_personal_data.types_of_data_collected.personal_data.title}
              </h4>
              <p className="text-gray-700 mb-4">
                {t.privacy_policy.collecting_and_using_personal_data.types_of_data_collected.personal_data.content}
              </p>
              <h4 className="text-lg font-medium mb-2">
                {t.privacy_policy.collecting_and_using_personal_data.types_of_data_collected.usage_data.title}
              </h4>
              <p className="text-gray-700 mb-4">
                {t.privacy_policy.collecting_and_using_personal_data.types_of_data_collected.usage_data.content}
              </p>
              <h3 className="text-xl font-medium mb-2">
                {t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.content}
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">
                  <strong>
                    {t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.necessary.title}
                  </strong>
                  : {t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.necessary.type},{" "}
                  {
                    t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.necessary
                      .administered_by
                  }
                  , {t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.necessary.purpose}
                </li>
                <li className="mb-2">
                  <strong>
                    {
                      t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.policy_acceptance
                        .title
                    }
                  </strong>
                  :{" "}
                  {
                    t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.policy_acceptance
                      .type
                  }
                  ,{" "}
                  {
                    t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.policy_acceptance
                      .administered_by
                  }
                  ,{" "}
                  {
                    t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.policy_acceptance
                      .purpose
                  }
                </li>
                <li className="mb-2">
                  <strong>
                    {
                      t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.functionality
                        .title
                    }
                  </strong>
                  : {t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.functionality.type}
                  ,{" "}
                  {
                    t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.functionality
                      .administered_by
                  }
                  ,{" "}
                  {
                    t.privacy_policy.collecting_and_using_personal_data.tracking_technologies_and_cookies.cookies_types.functionality
                      .purpose
                  }
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.use_of_personal_data.title}</h2>
              <p className="text-gray-700">{t.privacy_policy.use_of_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.sharing_personal_data.title}</h2>
              <p className="text-gray-700">{t.privacy_policy.sharing_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.retention_of_personal_data.title}</h2>
              <p className="text-gray-700">{t.privacy_policy.retention_of_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.transfer_of_personal_data.title}</h2>
              <p className="text-gray-700">{t.privacy_policy.transfer_of_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.delete_personal_data.title}</h2>
              <p className="text-gray-700">{t.privacy_policy.delete_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.disclosure_of_personal_data.title}</h2>
              <h3 className="text-xl font-medium mb-2">{t.privacy_policy.disclosure_of_personal_data.business_transactions.title}</h3>
              <p className="text-gray-700 mb-4">{t.privacy_policy.disclosure_of_personal_data.business_transactions.content}</p>
              <h3 className="text-xl font-medium mb-2">{t.privacy_policy.disclosure_of_personal_data.law_enforcement.title}</h3>
              <p className="text-gray-700 mb-4">{t.privacy_policy.disclosure_of_personal_data.law_enforcement.content}</p>
              <h3 className="text-xl font-medium mb-2">{t.privacy_policy.disclosure_of_personal_data.other_legal_requirements.title}</h3>
              <p className="text-gray-700">{t.privacy_policy.disclosure_of_personal_data.other_legal_requirements.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.security_of_personal_data.title}</h2>
              <p className="text-gray-700">{t.privacy_policy.security_of_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.childrens_privacy.title}</h2>
              <p className="text-gray-700">{t.privacy_policy.childrens_privacy.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.links_to_other_websites.title}</h2>
              <p className="text-gray-700">{t.privacy_policy.links_to_other_websites.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.changes_to_privacy_policy.title}</h2>
              <p className="text-gray-700">{t.privacy_policy.changes_to_privacy_policy.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.privacy_policy.contact_us.title}</h2>
              <p className="text-gray-700">{t.privacy_policy.contact_us.content}</p>
              <p className="text-gray-700">{t.privacy_policy.contact_us.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
