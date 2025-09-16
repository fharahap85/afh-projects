import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { useRouter } from "next/router";
import en from "../../locales/en/common.json";
import id from "../../locales/id/common.json";
import Link from "next/link";

export default function Services() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.nav_services} description="Our services" />
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">Layanan Kami</h1>
          <p className="mt-4 text-xl md:text-2xl font-light">Membangun solusi digital yang sesuai dengan kebutuhan bisnis Anda.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Link href="services/layanan-website">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center">Pembuatan Website</h3>
                <p className="mt-4 text-gray-600 text-center">
                  Kami membangun website profesional dan responsif sesuai kebutuhan bisnis Anda.
                </p>
              </div>
            </Link>

            <Link href="services/layanan-aplikasi">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center">Aplikasi Mobile</h3>
                <p className="mt-4 text-gray-600 text-center">Pengembangan aplikasi mobile Android dan iOS dengan performa tinggi.</p>
              </div>
            </Link>

            <Link href="services/layanan-konsultasi">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19V6l-2 2m0-4l4 4m-4-4l-4 4m8 8h8m-8-4h4"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center">Konsultasi IT</h3>
                <p className="mt-4 text-gray-600 text-center">
                  Sesi konsultasi untuk solusi teknologi, arsitektur sistem, dan strategi digital.
                </p>
              </div>
            </Link>

            <Link href="services/layanan-backend">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8m-4 4h4m-4-8h4m-4 4V8"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center">Backend & API</h3>
                <p className="mt-4 text-gray-600 text-center">
                  Pembuatan backend yang scalable, aman, dan cepat dengan integrasi API modern.
                </p>
              </div>
            </Link>

            <Link href="services/layanan-uiux">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center">UI/UX Design</h3>
                <p className="mt-4 text-gray-600 text-center">
                  Menciptakan pengalaman pengguna yang intuitif dan desain antarmuka yang memukau.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
