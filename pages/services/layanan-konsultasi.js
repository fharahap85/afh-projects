import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { useRouter } from "next/router";
import en from "../../locales/en/common.json";
import id from "../../locales/id/common.json";

export default function Services() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO
        title={t.nav_services_consulting || "Konsultasi IT"}
        description={
          t.services_consulting_description || "Consulting sessions for technology solutions, system architecture, and digital strategy."
        }
      />
      <div className="flex flex-col md:grid md:grid-cols-[40%_60%] min-h-screen">
        {/* Hero Section - Full-screen on Mobile, Fixed on Desktop */}
        <section className="relative flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 bg-gray-100 h-screen md:sticky md:top-0 md:h-screen">
          <div className="absolute inset-0 bg-animated-transparent z-0" />
          <div className="relative z-10 text-blue-900 text-center drop-shadow-xl">
            <h1 className="text-3xl md:text-5xl font-extrabold">{t.nav_services_consulting || "Konsultasi IT"}</h1>
            <p className="mt-4 text-lg md:text-2xl font-light">
              {t.services_consulting_description || "Sesi konsultasi untuk solusi teknologi, arsitektur sistem, dan strategi digital."}
            </p>
          </div>
        </section>

        {/* Scrollable Content */}
        <section className="overflow-y-auto md:h-screen bg-white">
          <div className="py-12 px-4 sm:px-6 md:py-20 md:px-6">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-900 mb-8 md:mb-10">
              {t.services_consulting_why_title || "Membantu Anda Membuat Keputusan Teknologi Terbaik"}
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {t.services_consulting_why_content ||
                    "Kami hadir untuk menjadi mitra strategis Anda dalam menghadapi tantangan teknologi. Tim ahli kami akan memberikan panduan dan rekomendasi yang terukur untuk mencapai tujuan bisnis Anda."}
                </p>
                <ul className="mt-6 space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_consulting_architecture || "Arsitektur Sistem"}:</span>{" "}
                      {t.services_consulting_architecture_desc || "Membangun fondasi teknologi yang solid dan skalabel."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_consulting_strategy || "Strategi Digital"}:</span>{" "}
                      {t.services_consulting_strategy_desc || "Merancang roadmap digital yang efektif untuk pertumbuhan bisnis."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_consulting_technology || "Pemilihan Teknologi"}:</span>{" "}
                      {t.services_consulting_technology_desc || "Membantu Anda memilih teknologi yang tepat sesuai anggaran dan kebutuhan."}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/assets/konsultasi_it.png"
                  alt={t.services_consulting_image_alt || "Ilustrasi Konsultasi IT"}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-gray-100 py-12 md:py-20 mt-12 md:mt-20">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
                  {t.services_consulting_process_title || "Langkah-langkah Konsultasi Kami"}
                </h2>
                <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_consulting_process_analysis || "1. Analisis Kebutuhan"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_consulting_process_analysis_desc || "Kami mendalami masalah dan tujuan bisnis Anda secara menyeluruh."}
                    </p>
                  </div>
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_consulting_process_strategy || "2. Penyusunan Strategi"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_consulting_process_strategy_desc ||
                        "Kami merumuskan solusi dan rekomendasi teknologi yang paling sesuai."}
                    </p>
                  </div>
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_consulting_process_implementation || "3. Implementasi & Evaluasi"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_consulting_process_implementation_desc ||
                        "Kami membantu implementasi dan mengevaluasi hasilnya bersama Anda."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 text-white py-12 md:py-16 text-center mt-12 md:mt-20 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold">
                {t.services_consulting_cta_title || "Siap Mengoptimalkan Strategi Teknologi Anda?"}
              </h2>
              <p className="mt-4">{t.services_consulting_cta_desc || "Hubungi kami untuk konsultasi gratis."}</p>
              <a
                href="/contact"
                className="mt-6 inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                {t.services_consulting_cta_button || "Hubungi Kami Sekarang"}
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
