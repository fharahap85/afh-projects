import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Link from "next/link";
import Slider from "react-slick"; // Import react-slick for carousel
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

export default function Portfolio() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  // Updated projects array with multiple images per project
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
      images: [{ src: "/assets/portfolio/website/absenpro.svg", alt: t.portfolio_project3_alt }],
    },
    {
      id: 4,
      images: [{ src: "/assets/portfolio/website/connectify.svg", alt: t.portfolio_project3_alt }],
    },
    {
      id: 5,
      images: [
        { src: "/assets/portfolio/website/connectsphere1.svg", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/website/connectsphere2.svg", alt: t.portfolio_project1_alt + " 2" },
      ],
    },
    {
      id: 6,
      images: [
        { src: "/assets/portfolio/mobile/absensi1.png", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/mobile/absensi2.png", alt: t.portfolio_project3_al + " 2" },
      ],
    },
    {
      id: 7,
      images: [
        { src: "/assets/portfolio/mobile/skillbook1.png", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/mobile/skillbook2.png", alt: t.portfolio_project3_alt + " 2" },
      ],
    },
    {
      id: 8,
      images: [
        { src: "/assets/portfolio/mobile/eventhub1.png", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/mobile/eventhub2.png", alt: t.portfolio_project3_alt + " 2" },
      ],
    },
    {
      id: 9,
      images: [
        { src: "/assets/portfolio/mobile/inventaris1.png", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/mobile/inventaris2.png", alt: t.portfolio_project3_alt + " 2" },
      ],
    },
    {
      id: 10,
      images: [{ src: "/assets/portfolio/website/frontier.svg", alt: t.portfolio_project3_alt }],
    },
    {
      id: 11,
      images: [{ src: "/assets/portfolio/website/greenspace.svg", alt: t.portfolio_project3_alt }],
    },
    {
      id: 12,
      images: [
        { src: "/assets/portfolio/website/innoval1.svg", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/website/innoval2.svg", alt: t.portfolio_project1_alt + " 2" },
      ],
    },
    {
      id: 13,
      images: [
        { src: "/assets/portfolio/mobile/notemate1.png", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/mobile/notemate2.png", alt: t.portfolio_project3_alt + " 2" },
      ],
    },
    {
      id: 14,
      images: [
        { src: "/assets/portfolio/website/insightsphere1.svg", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/website/insightsphere2.svg", alt: t.portfolio_project1_alt + " 2" },
      ],
    },
    {
      id: 15,
      images: [
        { src: "/assets/portfolio/website/kopnet1.svg", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/website/kopnet2.svg", alt: t.portfolio_project1_alt + " 2" },
      ],
    },
    {
      id: 16,
      images: [
        { src: "/assets/portfolio/website/nusantara1.svg", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/website/nusantara2.svg", alt: t.portfolio_project1_alt + " 2" },
      ],
    },
    {
      id: 17,
      images: [{ src: "/assets/portfolio/website/logistik1.svg", alt: t.portfolio_project3_alt }],
    },
    {
      id: 18,
      images: [
        { src: "/assets/portfolio/mobile/salesflow1.png", alt: t.portfolio_project3_alt },
        { src: "/assets/portfolio/mobile/salesflow2.png", alt: t.portfolio_project3_alt + " 2" },
      ],
    },
    {
      id: 19,
      images: [
        { src: "/assets/portfolio/website/vortex1.svg", alt: t.portfolio_project1_alt },
        { src: "/assets/portfolio/website/vortex2.svg", alt: t.portfolio_project1_alt + " 2" },
        { src: "/assets/portfolio/website/vortex3.svg", alt: t.portfolio_project1_alt + " 3" },
      ],
    },
    {
      id: 20,
      images: [{ src: "/assets/portfolio/website/pos.svg", alt: t.portfolio_project3_alt }],
    },
    {
      id: 21,
      images: [{ src: "/assets/portfolio/website/skillforge.svg", alt: t.portfolio_project3_alt }],
    },
    {
      id: 22,
      images: [{ src: "/assets/portfolio/website/taskflow.svg", alt: t.portfolio_project3_alt }],
    },
  ];

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: false, // Hide arrows (relying on dots and swipe)
    swipe: true, // Enable manual swipe
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <Layout>
      <SEO title={t.nav_portfolio} description={t.portfolio_description} />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 bg-black text-white h-screen">
        <div className="absolute inset-0">
          <Image
            src="/assets/portfolio.png"
            alt={t.portfolio_hero_image_alt}
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            priority
          />
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-200 text-blue-900 relative">
        <div className="container mx-auto px-4 sm:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t.portfolio_cta_title}</h2>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">{t.portfolio_cta_text}</p>
          <Link
            href="/contact"
            className="bg-white text-indigo-800 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            {t.nav_contact}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
