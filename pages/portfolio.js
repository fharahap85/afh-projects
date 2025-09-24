import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";

export default function Portfolio() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  // Daftar proyek contoh (ganti dengan proyek Anda)
  const projects = [
    {
      id: 1,
      title: t.portfolio_project1_title,
      description: t.portfolio_project1_description,
      image: "",
      alt: t.portfolio_project1_alt,
    },
    {
      id: 2,
      title: t.portfolio_project2_title,
      description: t.portfolio_project2_description,
      image: "",
      alt: t.portfolio_project2_alt,
    },
    {
      id: 3,
      title: t.portfolio_project3_title,
      description: t.portfolio_project3_description,
      image: "",
      alt: t.portfolio_project3_alt,
    },
  ];

  return (
    <Layout>
      <SEO title={t.nav_portfolio} description={t.portfolio_description} />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="absolute inset-0">
          <Image src="" alt={t.portfolio_hero_image_alt} layout="fill" objectFit="cover" className="opacity-30" priority />
        </div>
        <div className="container mx-auto px-4 sm:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t.portfolio_hero_title}</h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">{t.portfolio_hero_text}</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">{t.portfolio_title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Image src={project.image} alt={project.alt} width={600} height={400} className="w-full h-48 sm:h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{project.description}</p>
                  <a href="#" className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300">
                    {t.portfolio_learn_more}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-800 text-white relative">
        <div className="absolute inset-0">
          <Image src="" alt={t.portfolio_cta_image_alt} layout="fill" objectFit="cover" className="opacity-30" />
        </div>
        <div className="container mx-auto px-4 sm:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t.portfolio_cta_title}</h2>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">{t.portfolio_cta_text}</p>
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
