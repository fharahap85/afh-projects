import Link from "next/link";
import Image from "next/image";
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
        title={t.nav_services_uiux || "UI/UX Design"}
        description={t.services_uiux_description || "Creating intuitive user experiences and stunning interface designs."}
      />
      <div className="flex flex-col md:grid md:grid-cols-[40%_60%] min-h-screen">
        {/* Hero Section - Full-screen on Mobile, Fixed on Desktop */}
        <section className="relative flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 bg-gray-100 h-screen md:sticky md:top-0 md:h-screen">
          <div className="absolute inset-0 bg-animated-transparent z-0" />
          <div className="relative z-10 text-blue-900 text-center drop-shadow-xl">
            <h1 className="text-3xl md:text-5xl font-extrabold">{t.nav_services_uiux || "UI/UX Design"}</h1>
            <p className="mt-4 text-lg md:text-2xl font-light">
              {t.services_uiux_description || "Menciptakan pengalaman pengguna yang intuitif dan desain antarmuka yang memukau."}
            </p>
          </div>
        </section>

        {/* Scrollable Content */}
        <section className="overflow-y-auto md:h-screen bg-white">
          <div className="py-12 px-4 sm:px-6 md:py-20 md:px-6">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-blue-900 mb-8 md:mb-10">
              {t.services_uiux_why_title || "Desain yang Tidak Hanya Cantik, Tapi Juga Berfungsi"}
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {t.services_uiux_why_content ||
                    "UI/UX bukan hanya tentang estetika, tetapi juga tentang bagaimana pengguna berinteraksi dengan produk digital Anda. Kami merancang alur yang logis dan antarmuka yang menarik untuk memastikan pengalaman pengguna yang tak terlupakan."}
                </p>
                <ul className="mt-6 space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_uiux_interface || "Antarmuka Menarik"}:</span>{" "}
                      {t.services_uiux_interface_desc || "Desain visual yang konsisten dan sesuai dengan identitas merek Anda."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_uiux_experience || "Pengalaman Intuitif"}:</span>{" "}
                      {t.services_uiux_experience_desc || "Alur navigasi yang mudah dipahami, mengurangi gesekan bagi pengguna."}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-semibold text-blue-900">{t.services_uiux_conversion || "Optimasi Konversi"}:</span>{" "}
                      {t.services_uiux_conversion_desc || "Desain yang teruji untuk meningkatkan konversi dan retensi pengguna."}
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <Image
                  src="/assets/ui_ux.png"
                  alt={t.services_uiux_image_alt || "Ilustrasi UI/UX Design"}
                  width={500} // Sesuaikan ukuran lebar gambar sesuai kebutuhan
                  height={300} // Sesuaikan ukuran tinggi gambar sesuai kebutuhan
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-gray-50 py-12 md:py-20 mt-12 md:mt-20">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
                  {t.services_uiux_process_title || "Proses Desain UI/UX Kami"}
                </h2>
                <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_uiux_process_research || "1. Riset & Analisis"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_uiux_process_research_desc || "Kami melakukan riset pengguna dan menganalisis kebutuhan produk."}
                    </p>
                  </div>
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_uiux_process_prototyping || "2. Wireframing & Prototyping"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_uiux_process_prototyping_desc || "Kami membuat sketsa, wireframe, dan prototipe interaktif untuk diuji."}
                    </p>
                  </div>
                  <div className="bg-white p-6 md:py-8 md:px-2 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900">
                      {t.services_uiux_process_design || "3. Desain Visual & Uji Usability"}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services_uiux_process_design_desc || "Kami menyempurnakan desain visual dan menguji alur dengan pengguna nyata."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 text-white py-12 md:py-16 text-center mt-12 md:mt-20 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold">
                {t.services_uiux_cta_title || "Siap Meningkatkan Pengalaman Pengguna Anda?"}
              </h2>
              <p className="mt-4">{t.services_uiux_cta_desc || "Hubungi kami untuk konsultasi gratis."}</p>

              <Link
                href="/contact"
                className="mt-6 inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                {t.services_uiux_cta_button || "Hubungi Kami Sekarang"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
