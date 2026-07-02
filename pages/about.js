import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  Zap,
  Award,
  Users,
  Code2,
  Palette,
  Server,
  Wrench,
  Target,
  Handshake,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST API"],
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
  },
];

const timeline = [
  { year: "2020", title: "Founded", desc: "AFH Projects started with a passion for technology and digital innovation." },
  { year: "2021", title: "First Clients", desc: "Delivered first enterprise projects in finance and transportation sectors." },
  { year: "2022", title: "Team Growth", desc: "Expanded the team and capabilities to cover full-stack development and consulting." },
  { year: "2023", title: "50+ Projects", desc: "Reached milestone of 50+ successful projects across multiple industries." },
  { year: "2024", title: "Global Reach", desc: "Extended services to international clients and enterprise-grade solutions." },
];

const values = [
  { icon: Lightbulb, img: "/assets/inovasi.png", titleKey: "values_innovation_title", textKey: "values_innovation_text" },
  { icon: ShieldCheck, img: "/assets/integritas.png", titleKey: "values_integrity_title", textKey: "values_integrity_text" },
  { icon: Zap, img: "/assets/growth_icon.png", titleKey: "values_agility_title", textKey: "values_agility_text" },
  { icon: Award, img: "/assets/keunggulan.png", titleKey: "values_excellence_title", textKey: "values_excellence_text" },
];

const whyChooseUs = [
  { img: "/assets/solusi.png", titleKey: "why_tailored_title", textKey: "why_tailored_text" },
  { img: "/assets/pendekatan.png", titleKey: "why_client_title", textKey: "why_client_text" },
  { img: "/assets/pengembangan.png", titleKey: "why_agile_title", textKey: "why_agile_text" },
];

export default function About() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.nav_about} description={t.about_description} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/assets/Hero.png" alt={t.hero_image_alt} fill className="object-cover opacity-20" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">
              01 — About
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-6">
              {t.about_hero_title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
              {t.about_hero_text}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="text-xs font-mono text-accent tracking-wider uppercase">02 — Story</span>
              <h2 className="text-3xl font-bold mt-3 mb-6">{t.about_story_title}</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>{t.about_story_text1}</p>
                <p>{t.about_story_text2}</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden border border-card-border">
                <Image src="/assets/Our_Story.png" alt={t.story_image_alt} fill className="object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">03 — Team</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mt-3 mb-4">{t.about_team_title}</motion.h2>
            <motion.p variants={fadeUp} className="text-muted max-w-2xl mx-auto">{t.about_team_text}</motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {[
              { img: "/assets/icon_designer.png", titleKey: "team_creative_title", textKey: "team_creative_text" },
              { img: "/assets/icon_developer.png", titleKey: "team_tech_title", textKey: "team_tech_text" },
              { img: "/assets/icon_support_2.png", titleKey: "team_client_title", textKey: "team_client_text" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-center bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/40 transition-colors">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-accent/20">
                    <Image src={item.img} alt={t[item.titleKey]} width={96} height={96} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t[item.titleKey]}</h3>
                  <p className="text-sm text-muted">{t[item.textKey]}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">04 — Values</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mt-3 mb-12">{t.about_values_title}</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="h-full bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/40 transition-colors text-center">
                  <Image src={item.img} alt={t[item.titleKey]} width={80} height={80} className="mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{t[item.titleKey]}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t[item.textKey]}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">05 — Why Us</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mt-3 mb-12">{t.about_why_title}</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="h-full bg-card-bg border border-card-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors">
                  <div className="aspect-video relative">
                    <Image src={item.img} alt={t[item.titleKey]} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{t[item.titleKey]}</h3>
                    <p className="text-sm text-muted leading-relaxed">{t[item.textKey]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">06 — Skills</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mt-3 mb-12">{t.about_team_title}</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillGroups.map((group, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="h-full bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/40 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <group.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-mono rounded-md">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">07 — Journey</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mt-3 mb-12">{t.about_team_text}</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="relative"
          >
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-card-border" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full border-4 border-background z-10" />
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <span className="font-mono text-sm text-accent">{item.year}</span>
                    <h3 className="font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{t.about_cta_title}</h2>
            <p className="text-muted text-lg mb-8">{t.about_cta_text}</p>
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
