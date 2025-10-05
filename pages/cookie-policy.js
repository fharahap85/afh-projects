import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Link from "next/link";

export default function CookiesPolicy() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.cookies_title} description={t.cookies_description} />

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">{t.cookies_hero_title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">{t.cookies_hero_text}</p>
        </div>
      </section>

      {/* Cookies Policy Content */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8">{t.cookies_policy.intro}</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.cookies_policy.interpretation_and_definitions.title}</h2>
              <h3 className="text-xl font-medium mb-2">{t.cookies_policy.interpretation_and_definitions.interpretation}</h3>
              <p className="text-gray-700 mb-4">{t.cookies_policy.interpretation_and_definitions.interpretation}</p>
              <h3 className="text-xl font-medium mb-2">Definitions</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">{t.cookies_policy.interpretation_and_definitions.definitions.company}</li>
                <li className="mb-2">{t.cookies_policy.interpretation_and_definitions.definitions.cookies}</li>
                <li className="mb-2">{t.cookies_policy.interpretation_and_definitions.definitions.website}</li>
                <li className="mb-2">{t.cookies_policy.interpretation_and_definitions.definitions.you}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.cookies_policy.type_of_cookies.title}</h2>
              <p className="text-gray-700 mb-4">{t.cookies_policy.type_of_cookies.intro}</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">
                  <strong>{t.cookies_policy.type_of_cookies.cookies_types.necessary.title}</strong>:{" "}
                  {t.cookies_policy.type_of_cookies.cookies_types.necessary.type},{" "}
                  {t.cookies_policy.type_of_cookies.cookies_types.necessary.administered_by},{" "}
                  {t.cookies_policy.type_of_cookies.cookies_types.necessary.purpose}
                </li>
                <li className="mb-2">
                  <strong>{t.cookies_policy.type_of_cookies.cookies_types.functionality.title}</strong>:{" "}
                  {t.cookies_policy.type_of_cookies.cookies_types.functionality.type},{" "}
                  {t.cookies_policy.type_of_cookies.cookies_types.functionality.administered_by},{" "}
                  {t.cookies_policy.type_of_cookies.cookies_types.functionality.purpose}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.cookies_policy.your_choices.title}</h2>
              <p className="text-gray-700 mb-4">{t.cookies_policy.your_choices.content}</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">
                  <Link href={t.cookies_policy.your_choices.browser_instructions.chrome} className="text-blue-600 hover:underline">
                    Chrome
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href={t.cookies_policy.your_choices.browser_instructions.internet_explorer}
                    className="text-blue-600 hover:underline"
                  >
                    Internet Explorer
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href={t.cookies_policy.your_choices.browser_instructions.firefox} className="text-blue-600 hover:underline">
                    Firefox
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href={t.cookies_policy.your_choices.browser_instructions.safari} className="text-blue-600 hover:underline">
                    Safari
                  </Link>
                </li>
                <li className="mb-2">{t.cookies_policy.your_choices.browser_instructions.other}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.cookies_policy.more_information.title}</h2>
              <p className="text-gray-700">
                <Link href="https://www.termsfeed.com/blog/cookies/" className="text-blue-600 hover:underline">
                  {t.cookies_policy.more_information.content}
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.cookies_policy.contact_us.title}</h2>
              <p className="text-gray-700">{t.cookies_policy.contact_us.content}</p>
              <p className="text-gray-700">{t.cookies_policy.contact_us.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
