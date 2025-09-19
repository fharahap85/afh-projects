//index.js
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <div className="bg-gray-200 text-white min-h-screen flex flex-col py-5 md:px-14 sm:px-14 sm:p-8 text-center">
        {/* <!-- Container Background --> */}
        <div class="absolute inset-0 z-0 pointer-events-none">
          {/* <!-- Generate multiple squares --> */}
          <div class="absolute w-20 h-20 bg-blue-500 opacity-60 animate-float-up-slow left-[10%] delay-[0s]"></div>
          <div class="absolute w-8 h-8 bg-yellow-500 opacity-60 animate-float-up-slow left-[11%] delay-[0s]"></div>
          <div class="absolute w-4 h-4 bg-yellow-400 opacity-60 animate-float-up left-[30%] delay-[2s]"></div>
          <div class="absolute w-10 h-10 bg-pink-500 opacity-60 animate-float-up left-[50%] delay-[4s]"></div>
          <div class="absolute w-6 h-6 bg-green-400 opacity-60 animate-float-up-fast left-[70%] delay-[1s]"></div>
          <div class="absolute w-5 h-5 bg-red-500 opacity-60 animate-float-up left-[90%] delay-[3s]"></div>
          {/* <!-- Tambahkan lebih banyak untuk variasi --> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 sm:px-20 items-center sm:text-right">
          <div>
            <p className="text-blue-900 font-bold text-2xl md:text-4xl sm:text-4xl leading-snug ">
              {t.title_home.split("").map((char, index) => (
                <span key={index} className="inline-block opacity-0 animate-fadeInUp" style={{ animationDelay: `${index * 50}ms` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>

            <p className="text-blue-900 text-xl text-center sm:text-right md:text-right mb-2 animate-fadeInUp">{t.tag_line}</p>
            <p className="mt-4 text-gray-700 text-justify mb-2">{t.desc_home}</p>
          </div>
          <div>
            <Image
              src="/assets/Gambar_Home_Kanan.png"
              alt="Logo"
              width={500} // Sesuaikan ukuran lebar gambar sesuai kebutuhan
              height={300} // Sesuaikan ukuran tinggi gambar sesuai kebutuhan
              className="rounded-md" // Menggunakan kelas Tailwind untuk border radius
            />
          </div>
        </div>
        <Link href="/portfolio">
          <p className="inline-block bg-yellow-600 text-white hover:bg-blue-900 hover:border-2 hover:border-yellow-600 animate-bounce hover:text-white shadow-white shadow-sm font-semibold py-2 px-4 rounded transition duration-200">
            {t.our_portfolio}
          </p>
        </Link>
      </div>
      <div className="bg-pattern-gray text-center py-10 justify-center text-gray-900">
        <div className="animate-fadeInUp">
          <p className="text-2xl font-bold">{t.our_services}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 py-10">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="group bg-blue-900 text-white px-4 py-4 rounded-xl shadow border border-gray-700
                 w-80 h-60 md:w-40 md:h-28 md:hover:w-80 md:hover:h-60 transition-all duration-500 overflow-hidden relative"
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <h3 className="text-base font-semibold mb-2">{service.title}</h3>

              {/* Deskripsi: selalu terlihat di mobile, hover di desktop */}
              <p className="text-sm text-gray-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
