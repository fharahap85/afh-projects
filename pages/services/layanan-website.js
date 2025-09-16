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
        title={t.nav_services_website || "Pembuatan Website"}
        description={t.services_website_description || "Professional and responsive website development tailored to your business needs."}
      />
      <div className="flex flex-col md:grid md:grid-cols-[40%_60%] min-h-screen">
        {/* Hero Section - Full-screen on Mobile, Fixed on Desktop */}
        <section className="relative flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 bg-gray-100 h-screen md:sticky md:top-0 md:h-screen">
          <div className="absolute inset-0 bg-animated-transparent z-0" />
          <div className="relative z-10 text-blue-900 text-center drop-shadow-xl">
            <h1 className="text-3xl md:text-5xl font-extrabold">{t.nav_services_website || "Pembuatan Website"}</h1>
            <p className="mt-4 text-lg md:text-2xl font-light">
              {t.services_website_description || "Kami membangun website profesional dan responsif sesuai kebutuhan bisnis Anda."}
            </p>
          </div>
        </section>

        {/* Scrollable Content */}
        <section className="overflow-y-auto md:h-screen bg-white">
          <div className="py-12 px-4 sm:px-6 md:py-20 md:px-6">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-900 mb-8 md:mb-10">
              {t.services_website_why_title || "Mengapa Website Penting untuk Bisnis Anda?"}
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {t.services_website_why_content ||
                    "Di era digital ini, website bukan lagi sekadar pilihan, melainkan keharusan. Website adalah representasi digital dari bisnis Anda, tempat pelanggan dapat menemukan informasi, produk, atau layanan Anda kapan saja."}
                </p>
                <ul className="mt-6 space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_website_credibility || "Peningkatan Kredibilitas"}:</span>{" "}
                      {t.services_website_credibility_desc || "Website profesional membangun kepercayaan dengan calon pelanggan."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_website_reach || "Jangkauan Pasar Lebih Luas"}:</span>{" "}
                      {t.services_website_reach_desc || "Website memungkinkan Anda menjangkau audiens di luar batas geografis."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_website_marketing || "Pemasaran dan Penjualan 24/7"}:</span>{" "}
                      {t.services_website_marketing_desc || "Website Anda bekerja tanpa henti sebagai alat pemasaran dan penjualan."}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/assets/layanan_website.png"
                  alt={t.services_website_image_alt || "Ilustrasi Pembuatan Website"}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-gray-100 py-12 md:py-20 mt-12 md:mt-20">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
                  {t.services_website_process_title || "Proses Pembuatan Website Kami"}
                </h2>
                <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_website_process_consultation || "1. Konsultasi"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_website_process_consultation_desc ||
                        "Kami mendengarkan kebutuhan dan tujuan bisnis Anda untuk merancang strategi yang tepat."}
                    </p>
                  </div>
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_website_process_design || "2. Desain & Pengembangan"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_website_process_design_desc ||
                        "Tim kami merancang tampilan dan membangun website fungsional sesuai standar modern."}
                    </p>
                  </div>
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_website_process_launch || "3. Peluncuran & Dukungan"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_website_process_launch_desc ||
                        "Setelah peluncuran, kami memberikan pelatihan dan dukungan teknis berkelanjutan."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 text-white py-12 md:py-16 text-center mt-12 md:mt-20 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold">{t.services_website_cta_title || "Siap Membangun Website Anda?"}</h2>
              <p className="mt-4">
                {t.services_website_cta_desc || "Hubungi kami sekarang untuk mendapatkan konsultasi dan penawaran gratis."}
              </p>
              <a
                href="/contact"
                className="mt-6 inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                {t.services_website_cta_button || "Hubungi Kami Sekarang"}
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
