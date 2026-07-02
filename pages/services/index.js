import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { useRouter } from "next/router";
import en from "../../locales/en/common.json";
import id from "../../locales/id/common.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Smartphone, BrainCircuit, Server, Palette, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const serviceIcons = [Monitor, Smartphone, BrainCircuit, Server, Palette];
const serviceLinks = [
  "/services/website-development",
  "/services/mobile-application",
  "/services/it-consulting",
  "/services/backend-api-development",
  "/services/uiux-design",
];

export default function Services() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.nav_services} description="Our services" />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">
              01 — Services
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-6">
              {t.nav_services}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
              {locale === "id"
                ? "Membangun solusi digital yang sesuai dengan kebutuhan bisnis Anda."
                : "Building digital solutions tailored to your business needs."}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {t.services.map((service, index) => {
              const Icon = serviceIcons[index] || Monitor;
              return (
                <motion.div key={index} variants={fadeUp}>
                  <Link href={serviceLinks[index]} className="group block h-full">
                    <div className="h-full bg-card-bg border border-card-border rounded-xl p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.08)]">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">{service.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        {t.view_more}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
