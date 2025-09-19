import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";

export default function About() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.nav_about} description={t.about_description} />

      {/* Hero Section */}
      <section className="relative min-h-screen sm:min-h-screen bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="absolute inset-0">
          <Image src="/assets/Hero.png" alt={t.hero_image_alt} layout="fill" objectFit="cover" className="opacity-30" priority />
        </div>
        <div className="container mx-auto px-4 sm:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t.about_hero_title}</h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">{t.about_hero_text}</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">{t.about_story_title}</h2>
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="md:w-1/2">
              <Image src="" alt={t.story_image_alt} width={600} height={400} className="rounded-lg shadow-md w-full" />
            </div>
            <div className="md:w-1/2">
              <p className="text-base sm:text-lg mb-4">{t.about_story_text1}</p>
              <p className="text-base sm:text-lg">{t.about_story_text2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">{t.about_team_title}</h2>
          <p className="text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">{t.about_team_text}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Image src="" alt={t.team_creative_alt} width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.team_creative_title}</h3>
              <p className="text-sm sm:text-base">{t.team_creative_text}</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Image src="" alt={t.team_tech_alt} width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.team_tech_title}</h3>
              <p className="text-sm sm:text-base">{t.team_tech_text}</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Image src="" alt={t.team_client_alt} width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.team_client_title}</h3>
              <p className="text-sm sm:text-base">{t.team_client_text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">{t.about_values_title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <Image src="" alt={t.values_innovation_alt} width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-600">{t.values_innovation_title}</h3>
              <p className="text-sm sm:text-base">{t.values_innovation_text}</p>
            </div>
            <div className="text-center">
              <Image src="" alt={t.values_integrity_alt} width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-600">{t.values_integrity_title}</h3>
              <p className="text-sm sm:text-base">{t.values_integrity_text}</p>
            </div>
            <div className="text-center">
              <Image src="" alt={t.values_agility_alt} width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-600">{t.values_agility_title}</h3>
              <p className="text-sm sm:text-base">{t.values_agility_text}</p>
            </div>
            <div className="text-center">
              <Image src="" alt={t.values_excellence_alt} width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-600">{t.values_excellence_title}</h3>
              <p className="text-sm sm:text-base">{t.values_excellence_text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">{t.about_why_title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Image src="" alt={t.why_tailored_alt} width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.why_tailored_title}</h3>
              <p className="text-sm sm:text-base">{t.why_tailored_text}</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Image src="" alt={t.why_client_alt} width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.why_client_title}</h3>
              <p className="text-sm sm:text-base">{t.why_client_text}</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <Image src="" alt={t.why_agile_alt} width={120} height={120} className="rounded-full mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.why_agile_title}</h3>
              <p className="text-sm sm:text-base">{t.why_agile_text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-800 text-white relative">
        <div className="absolute inset-0">
          <Image src="" alt={t.cta_image_alt} layout="fill" objectFit="cover" className="opacity-30" />
        </div>
        <div className="container mx-auto px-4 sm:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t.about_cta_title}</h2>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">{t.about_cta_text}</p>
          <a
            href="/contact"
            className="bg-white text-indigo-800 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            {t.nav_contact}
          </a>
        </div>
      </section>
    </Layout>
  );
}
