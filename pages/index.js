import Layout from "../components/Layout";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick"; // Import react-slick for carousel
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

export default function Home() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  // Portfolio items (same as provided in the original index.js)
  const projects = [
    {
      id: 1,
      images: [
        { src: "/assets/portfolio/mobile/fixitnow1.png", alt: t.portfolio_project1_alt },
        { src: "/assets/portfolio/mobile/fixitnow2.png", alt: t.portfolio_project1_alt + " 2" },
        { src: "/assets/portfolio/mobile/fixitnow3.png", alt: t.portfolio_project1_alt + " 3" },
      ],
    },
    {
      id: 2,
      images: [
        { src: "/assets/portfolio/website/eventease1.svg", alt: t.portfolio_project2_alt },
        { src: "/assets/portfolio/website/eventease2.svg", alt: t.portfolio_project2_alt + " 2" },
      ],
    },
    {
      id: 3,
      images: [
        { src: "/assets/portfolio/website/innoval1.svg", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/website/innoval2.svg", alt: t.portfolio_project1_alt + " 2" },
      ],
    },
  ];

  // Slider settings for react-slick (consistent with Portfolio.js)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    pauseOnHover: true,
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gray-200 text-white flex flex-col py-5 md:px-14 sm:px-14 sm:p-8 text-center">
        {/* Container Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute w-20 h-20 bg-blue-500 opacity-60 animate-float-up-slow left-[10%] delay-[0s]"></div>
          <div className="absolute w-8 h-8 bg-yellow-500 opacity-60 animate-float-up-slow left-[11%] delay-[0s]"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 opacity-60 animate-float-up left-[30%] delay-[2s]"></div>
          <div className="absolute w-10 h-10 bg-pink-500 opacity-60 animate-float-up left-[50%] delay-[4s]"></div>
          <div className="absolute w-6 h-6 bg-green-400 opacity-60 animate-float-up-fast left-[70%] delay-[1s]"></div>
          <div className="absolute w-5 h-5 bg-red-500 opacity-60 animate-float-up left-[90%] delay-[3s]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 sm:px-20 items-center sm:text-right">
          <div>
            <p className="text-blue-900 font-bold text-2xl md:text-4xl sm:text-4xl leading-snug">
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
            <Image src="/assets/Gambar_Home_Kanan.png" alt="Logo" width={500} height={300} className="rounded-md" />
          </div>
        </div>
        <Link href="/portfolio">
          <p className="inline-block bg-yellow-600 text-white hover:bg-blue-900 animate-bounce hover:text-white shadow-black shadow-sm font-semibold py-2 px-4 rounded transition duration-200">
            {t.our_portfolio}
          </p>
        </Link>
      </div>

      {/* Services Section */}
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
              <p className="text-sm text-gray-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                {service.description}
              </p>
              <div className="text-center mt-8">
                <Link
                  href={service.link}
                  className="inline-block bg-yellow-600 text-white hover:bg-blue-900 hover:text-white font-semibold py-2 px-6 rounded transition duration-200"
                >
                  {t.view_more}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">{t.portfolio_title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                {/* Carousel for project images */}
                <Slider {...sliderSettings}>
                  {project.images.map((image, index) => (
                    <div key={index}>
                      <Image src={image.src} alt={image.alt} width={600} height={600} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </Slider>
                <div className="p-6"></div>
              </div>
            ))}
          </div>
          {/* View More Portfolio Button */}
          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="inline-block bg-yellow-600 text-white hover:bg-yello-900 hover:text-white font-semibold py-2 px-6 rounded transition duration-200"
            >
              {t.portfolio_view_more}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
