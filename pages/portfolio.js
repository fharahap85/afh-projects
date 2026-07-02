import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

const projects = [
  { id: 1, name: "FixItNow", category: "mobile", images: ["/assets/portfolio/mobile/fixitnow1.png", "/assets/portfolio/mobile/fixitnow2.png", "/assets/portfolio/mobile/fixitnow3.png"], tech: ["React Native", "Firebase"] },
  { id: 2, name: "EventEase", category: "website", images: ["/assets/portfolio/website/eventease1.svg", "/assets/portfolio/website/eventease2.svg"], tech: ["Next.js", "Tailwind"] },
  { id: 3, name: "AbsenPro", category: "website", images: ["/assets/portfolio/website/absenpro.svg"], tech: ["React", "Node.js"] },
  { id: 4, name: "Connectify", category: "website", images: ["/assets/portfolio/website/connectify.svg"], tech: ["Vue.js", "Express"] },
  { id: 5, name: "ConnectSphere", category: "website", images: ["/assets/portfolio/website/connectsphere1.svg", "/assets/portfolio/website/connectsphere2.svg"], tech: ["Next.js", "PostgreSQL"] },
  { id: 6, name: "Absensi", category: "mobile", images: ["/assets/portfolio/mobile/absensi1.png", "/assets/portfolio/mobile/absensi2.png"], tech: ["Flutter", "Django"] },
  { id: 7, name: "SkillBook", category: "mobile", images: ["/assets/portfolio/mobile/skillbook1.png", "/assets/portfolio/mobile/skillbook2.png"], tech: ["React Native", "MongoDB"] },
  { id: 8, name: "EventHub", category: "mobile", images: ["/assets/portfolio/mobile/eventhub1.png", "/assets/portfolio/mobile/eventhub2.png"], tech: ["Flutter", "Firebase"] },
  { id: 9, name: "Inventaris", category: "mobile", images: ["/assets/portfolio/mobile/inventaris1.png", "/assets/portfolio/mobile/inventaris2.png"], tech: ["Kotlin", "SQLite"] },
  { id: 10, name: "Frontier", category: "website", images: ["/assets/portfolio/website/frontier.svg"], tech: ["Next.js", "Tailwind"] },
  { id: 11, name: "GreenSpace", category: "website", images: ["/assets/portfolio/website/greenspace.svg"], tech: ["React", "Node.js"] },
  { id: 12, name: "Innoval", category: "website", images: ["/assets/portfolio/website/innoval1.svg", "/assets/portfolio/website/innoval2.svg"], tech: ["Vue.js", "Laravel"] },
  { id: 13, name: "NoteMate", category: "mobile", images: ["/assets/portfolio/mobile/notemate1.png", "/assets/portfolio/mobile/notemate2.png"], tech: ["Flutter", "Firebase"] },
  { id: 14, name: "InsightSphere", category: "website", images: ["/assets/portfolio/website/insightsphere1.svg", "/assets/portfolio/website/insightsphere2.svg"], tech: ["Next.js", "GraphQL"] },
  { id: 15, name: "KopNet", category: "website", images: ["/assets/portfolio/website/kopnet1.svg", "/assets/portfolio/website/kopnet2.svg"], tech: ["React", "Express"] },
  { id: 16, name: "Nusantara", category: "website", images: ["/assets/portfolio/website/nusantara1.svg", "/assets/portfolio/website/nusantara2.svg"], tech: ["Next.js", "Tailwind"] },
  { id: 17, name: "Logistik", category: "website", images: ["/assets/portfolio/website/logistik1.svg"], tech: ["Vue.js", "Django"] },
  { id: 18, name: "SalesFlow", category: "mobile", images: ["/assets/portfolio/mobile/salesflow1.png", "/assets/portfolio/mobile/salesflow2.png"], tech: ["React Native", "Node.js"] },
  { id: 19, name: "Vortex", category: "website", images: ["/assets/portfolio/website/vortex1.svg", "/assets/portfolio/website/vortex2.svg", "/assets/portfolio/website/vortex3.svg"], tech: ["Next.js", "PostgreSQL"] },
  { id: 20, name: "POS System", category: "website", images: ["/assets/portfolio/website/pos.svg"], tech: ["React", "Firebase"] },
  { id: 21, name: "SkillForge", category: "website", images: ["/assets/portfolio/website/skillforge.svg"], tech: ["Vue.js", "Node.js"] },
  { id: 22, name: "TaskFlow", category: "website", images: ["/assets/portfolio/website/taskflow.svg"], tech: ["Next.js", "Tailwind"] },
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "website", label: "Website" },
  { key: "mobile", label: "Mobile" },
];

export default function Portfolio() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <SEO title={t.nav_portfolio} description={t.portfolio_description} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">
              01 — Portfolio
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-6">
              {t.portfolio_hero_title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
              {t.portfolio_hero_text}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-card-bg border border-card-border rounded-full p-1 w-fit"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  filter === cat.key
                    ? "bg-accent text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={filter}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <div className="group relative bg-card-bg border border-card-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,212,191,0.08)]">
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                      <span className="text-lg font-bold">{project.name}</span>
                      <div className="flex flex-wrap gap-1.5 justify-center px-4">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-mono rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{project.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-mono rounded">
                            {project.category}
                          </span>
                          <div className="flex gap-1">
                            {project.tech.slice(0, 2).map((t) => (
                              <span key={t} className="text-xs text-muted font-mono">{t}</span>
                            ))}
                            {project.tech.length > 2 && (
                              <span className="text-xs text-muted font-mono">+{project.tech.length - 2}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card-bg/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t.portfolio_cta_title}</h2>
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
