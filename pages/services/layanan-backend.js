import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { useRouter } from "next/router";
import en from "../../locales/en/common.json";
import id from "../../locales/id/common.json";
import Image from "next/image";

export default function Services() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO
        title={t.nav_services_backend || "Backend & API"}
        description={t.services_backend_description || "Scalable, secure, and fast backend development with modern API integration."}
      />
      <div className="flex flex-col md:grid md:grid-cols-[40%_60%] min-h-screen">
        {/* Hero Section - Fixed on Desktop */}
        <section className="relative flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 bg-gray-100 h-screen md:sticky md:top-0 md:h-screen">
          <div className="absolute inset-0 bg-animated-transparent z-0" />
          <div className="relative z-10 text-blue-900 text-center drop-shadow-xl">
            <h1 className="text-3xl md:text-5xl font-extrabold">{t.nav_services_backend || "Backend & API Development"}</h1>
            <p className="mt-4 text-lg md:text-2xl font-light">
              {t.services_backend_description || "Pembuatan backend yang scalable, aman, dan cepat dengan integrasi API modern."}
            </p>
          </div>
        </section>

        {/* Scrollable Content */}
        <section className="overflow-y-auto md:h-screen bg-white">
          <div className="py-12 px-4 sm:px-6 md:py-20 md:px-6">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-900 mb-8 md:mb-10">
              {t.services_foundation_title || "Fondasi Kuat untuk Aplikasi Anda"}
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {t.services_backend_intro ||
                    "Backend yang handal adalah jantung dari setiap aplikasi digital. Kami merancang dan membangun sistem backend yang efisien dan aman, memastikan aplikasi Anda dapat beroperasi dengan lancar, bahkan di bawah beban yang tinggi."}
                </p>
                <ul className="mt-6 space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_scalability || "Skalabilitas"}:</span>{" "}
                      {t.services_scalability_desc || "Backend yang siap tumbuh bersama bisnis Anda tanpa kendala performa."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_api || "Integrasi API"}:</span>{" "}
                      {t.services_api_desc || "Menghubungkan aplikasi Anda dengan layanan pihak ketiga dengan API modern."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_security || "Keamanan Data"}:</span>{" "}
                      {t.services_security_desc || "Menerapkan praktik keamanan terbaik untuk melindungi data Anda dan pengguna."}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/assets/backend.png"
                  alt={t.services_backend_image_alt || "Ilustrasi Backend Development"}
                  width={500} // Sesuaikan ukuran lebar gambar sesuai kebutuhan
                  height={300} // Sesuaikan ukuran tinggi gambar sesuai kebutuhan
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-gray-100 py-12 md:py-20 mt-12 md:mt-20">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
                  {t.services_process_title || "Proses Backend & API Development Kami"}
                </h2>
                <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                  <div className="bg-white p-6 md:px-2 md:py-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_process_design || "1. Perancangan Arsitektur"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_process_design_desc || "Kami merancang struktur backend dan database yang efisien."}
                    </p>
                  </div>
                  <div className="bg-white p-6 md:px-2 md:py-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_process_development || "2. Pengembangan & Pengujian"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_process_development_desc || "Kami menulis kode, membangun API, dan mengujinya secara menyeluruh."}
                    </p>
                  </div>
                  <div className="bg-white p-6 md:px-2 md:py-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_process_deployment || "3. Integrasi & Deployment"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_process_deployment_desc ||
                        "Kami mengintegrasikan backend dengan frontend dan melakukan deployment yang aman."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 text-white py-12 md:py-16 text-center mt-12 md:mt-20 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold">{t.services_cta_title || "Siap membangun backend Anda?"}</h2>
              <p className="mt-4">{t.services_cta_desc || "Hubungi kami untuk konsultasi gratis."}</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
