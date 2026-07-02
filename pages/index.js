import Layout from "../components/Layout";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Smartphone,
  BrainCircuit,
  Server,
  Palette,
  Code2,
  Terminal,
  Braces,
  ChevronDown,
} from "lucide-react";

const serviceIconMap = {
  "🔧": Monitor,
  "📱": Smartphone,
  "🧠": BrainCircuit,
  "⚙️": Server,
  "🎨": Palette,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  const projects = [
    { id: 1, name: "FixItNow", images: ["/assets/portfolio/mobile/fixitnow1.png", "/assets/portfolio/mobile/fixitnow2.png"], category: "mobile" },
    { id: 2, name: "EventEase", images: ["/assets/portfolio/website/eventease1.svg", "/assets/portfolio/website/eventease2.svg"], category: "website" },
    { id: 3, name: "Innoval", images: ["/assets/portfolio/website/innoval1.svg", "/assets/portfolio/website/innoval2.svg"], category: "website" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/2 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              {/* Badge */}
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-xs font-mono text-accent">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  Trusted by clients across finance, transport, education
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
              >
                <span className="text-foreground">{t.title_home}</span>
                <br />
                <span className="text-accent">{t.tag_line}</span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed max-w-xl">
                {t.desc_home}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-all hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                >
                  {t.our_portfolio}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-card-border text-foreground font-semibold rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all"
                >
                  {locale === "id" ? "Hubungi Kami" : "Contact Us"}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Visual - Code Terminal Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <div className="relative bg-card-bg border border-card-border rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-card-border/30 border-b border-card-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-muted ml-2">afh-projects ~ </span>
                </div>
                {/* Terminal content */}
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">$</span>
                    <span className="text-muted">npx create-afh-app my-project</span>
                  </div>
                  <div className="text-muted/60 text-xs">Creating a new AFH Projects app...</div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">$</span>
                    <span className="text-muted">cd my-project && npm run dev</span>
                  </div>
                  <div className="text-green-400 text-xs">✓ Ready in 1.2s</div>
                  <div className="text-muted/60 text-xs">  ➜ Local:   http://localhost:3000</div>
                  <div className="text-muted/60 text-xs">  ➜ Network: http://192.168.1.1:3000</div>
                  <div className="pt-2 border-t border-card-border/50">
                    <div className="flex items-center gap-2">
                      <span className="text-accent">$</span>
                      <span className="text-muted animate-pulse">▌</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-muted">scroll</span>
          <ChevronDown className="w-4 h-4 text-accent animate-scroll-indicator" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">
              01 — Services
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight">
              {t.our_services}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {t.services.map((service, index) => {
              const Icon = serviceIconMap[service.icon] || Monitor;
              return (
                <motion.div key={index} variants={fadeUp}>
                  <Link href={service.link} className="group block">
                    <div className="h-full bg-card-bg border border-card-border rounded-xl p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.08)]">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {service.description}
                      </p>
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

      {/* Portfolio Section */}
      <section className="py-24 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">
              02 — Portfolio
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mt-3 tracking-tight">
              {t.portfolio_title}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <div className="group relative bg-card-bg border border-card-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.08)]">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href="/portfolio"
                        className="px-4 py-2 bg-accent text-background text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors"
                      >
                        {t.portfolio_learn_more || "View Details"}
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-mono rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border border-card-border text-foreground font-semibold rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all"
            >
              {t.portfolio_view_more}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/3 rounded-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t.portfolio_cta_title}
            </h2>
            <p className="text-muted text-lg mb-8">{t.portfolio_cta_text}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-all hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]"
            >
              {t.nav_contact}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
