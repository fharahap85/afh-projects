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
        title={t.nav_services_mobile || "Aplikasi Mobile"}
        description={t.services_mobile_description || "High-performance Android and iOS mobile app development."}
      />
      <div className="flex flex-col md:grid md:grid-cols-[40%_60%] min-h-screen">
        {/* Hero Section - Fixed on Desktop */}
        <section className="relative flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 bg-gray-100 h-screen md:sticky md:top-0 md:h-screen">
          <div className="absolute inset-0 bg-animated-transparent z-0" />
          <div className="relative z-10 text-blue-900 text-center drop-shadow-xl">
            <h1 className="text-3xl md:text-5xl font-extrabold">{t.nav_services_mobile || "Aplikasi Mobile"}</h1>
            <p className="mt-4 text-lg md:text-2xl font-light">
              {t.services_mobile_description || "Pengembangan aplikasi mobile Android dan iOS dengan performa tinggi."}
            </p>
          </div>
        </section>

        {/* Scrollable Content */}
        <section className="overflow-y-auto md:h-screen bg-white">
          <div className="py-12 px-4 sm:px-6 md:py-20 md:px-6">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-900 mb-8 md:mb-10">
              {t.services_mobile_why_title || "Mengapa Bisnis Anda Membutuhkan Aplikasi Mobile?"}
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {t.services_mobile_why_content ||
                    "Aplikasi mobile memberikan interaksi yang lebih personal dan langsung dengan pelanggan. Ini adalah alat yang ampuh untuk meningkatkan loyalitas pelanggan, efisiensi operasional, dan jangkauan pasar."}
                </p>
                <ul className="mt-6 space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_mobile_reach || "Jangkauan Luas"}:</span>{" "}
                      {t.services_mobile_reach_desc || "Akses ke jutaan pengguna Android dan iOS di seluruh dunia."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_mobile_interaction || "Interaksi Langsung"}:</span>{" "}
                      {t.services_mobile_interaction_desc || "Notifikasi push dan fitur personalisasi untuk engagement yang lebih baik."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_mobile_performance || "Performa Terbaik"}:</span>{" "}
                      {t.services_mobile_performance_desc || "Aplikasi native yang dioptimalkan untuk kecepatan dan pengalaman pengguna."}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/assets/layanan_mobile.png"
                  alt={t.services_mobile_image_alt || "Ilustrasi Aplikasi Mobile"}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-gray-50 py-12 md:py-20 mt-12 md:mt-20">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
                  {t.services_mobile_process_title || "Proses Pengembangan Aplikasi Kami"}
                </h2>
                <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_mobile_process_design || "1. Perencanaan & Desain"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_mobile_process_design_desc || "Kami membuat wireframe dan prototipe UI/UX untuk aplikasi Anda."}
                    </p>
                  </div>
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_mobile_process_development || "2. Pengembangan & Pengujian"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_mobile_process_development_desc ||
                        "Tim developer kami menulis kode aplikasi dan melakukan pengujian ketat."}
                    </p>
                  </div>
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_mobile_process_launch || "3. Peluncuran & Perawatan"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_mobile_process_launch_desc ||
                        "Kami membantu Anda meluncurkan aplikasi di App Store dan Google Play, serta menyediakan dukungan pasca-rilis."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 text-white py-12 md:py-16 text-center mt-12 md:mt-20 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold">{t.services_mobile_cta_title || "Siap membangun aplikasi mobile Anda?"}</h2>
              <p className="mt-4">{t.services_mobile_cta_desc || "Hubungi kami untuk konsultasi gratis."}</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
