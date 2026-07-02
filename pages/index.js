import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Globe, Smartphone, Monitor, Palette, Brain, Cloud, Link as LinkIcon, Headphones,
  ArrowRight, CheckCircle, ChevronDown, ChevronUp, Zap, Shield, Users, TrendingUp,
  Clock, Target, Rocket, Bug, Settings, Send, Menu, X, Code,
} from "lucide-react";

const iconMap = { Globe, Smartphone, Monitor, Palette, Brain, Cloud, Link: LinkIcon, Headphones };

function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ target, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const processIcons = [Target, Settings, Palette, Code, Bug, Rocket, Headphones];

export default function Home() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;
  const [openFaq, setOpenFaq] = useState(null);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-medium mb-6">
                <Zap className="w-3.5 h-3.5" />
                Digital Solutions Agency
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.1] tracking-tight mb-6 whitespace-pre-line">
                {t.hero_headline}
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
                {t.hero_sub}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
                >
                  {t.hero_cta_primary}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface text-secondary font-medium rounded-xl border border-border hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                  {t.hero_cta_secondary}
                </Link>
              </div>
            </motion.div>

            {/* Right — Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl border border-border p-6">
                {/* Mockup Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 flex-1 h-6 bg-surface rounded-md" />
                </div>
                {/* Mockup Body */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="col-span-2 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl" />
                  <div className="space-y-3">
                    <div className="h-14 bg-surface rounded-xl" />
                    <div className="h-14 bg-surface rounded-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-16 bg-surface rounded-xl" />
                  ))}
                </div>
                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Revenue</p>
                    <p className="text-sm font-bold text-secondary">+127%</p>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Users</p>
                    <p className="text-sm font-bold text-secondary">24.5K</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-16 border-y border-border bg-surface/50">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <AnimatedSection>
            <p className="text-center text-sm text-muted mb-8">{t.trusted_title}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40">
              {["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix"].map((brand) => (
                <span key={brand} className="text-xl md:text-2xl font-bold text-secondary/60 tracking-tight">
                  {brand}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">{t.our_services}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {locale === "id" ? "Solusi Digital Lengkap" : "Complete Digital Solutions"}
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              {locale === "id"
                ? "Kami menyediakan layanan teknologi end-to-end untuk membantu bisnis Anda tumbuh."
                : "We provide end-to-end technology services to help your business grow."}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services_extended.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Globe;
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <Link href={svc.href} className="group block p-6 rounded-2xl border border-border bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                    <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">{svc.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{svc.desc}</p>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">{t.why_title}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              {locale === "id" ? "Mengapa Bekerja Sama dengan Kami" : "Why Work With Us"}
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.why_items.map((item, i) => {
              const icons = [Users, TrendingUp, Zap, Target, Clock, Shield];
              const Icon = icons[i] || CheckCircle;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="flex gap-4 p-6 rounded-2xl bg-white border border-border hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">{t.projects_title}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{t.projects_subtitle}</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {t.projects.map((proj, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border bg-white overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-surface relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center">
                        <Globe className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur rounded-lg text-xs font-medium text-secondary">
                      {proj.industry}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-secondary text-lg mb-3">{proj.name}</h3>
                    <div className="space-y-2.5 text-sm flex-1">
                      <div>
                        <p className="text-xs font-semibold text-muted/60 uppercase tracking-wider mb-0.5">Challenge</p>
                        <p className="text-muted">{proj.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted/60 uppercase tracking-wider mb-0.5">Result</p>
                        <p className="text-success font-medium">{proj.result}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted">{proj.tech}</span>
                      <Link href="/portfolio" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1">
                        View Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">{t.process_title}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              {locale === "id" ? "Dari Ide hingga Peluncuran" : "From Idea to Launch"}
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-border" />

            <div className="grid grid-cols-2 md:grid-cols-7 gap-6 md:gap-4">
              {t.process_steps.map((step, i) => {
                const Icon = processIcons[i] || CheckCircle;
                return (
                  <AnimatedSection key={i} delay={i * 0.08} className="text-center">
                    <div className="relative inline-flex">
                      <div className="w-14 h-14 rounded-2xl bg-white border-2 border-border flex items-center justify-center relative z-10 group-hover:border-primary transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-secondary text-sm mt-3 mb-1">{step.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2">{t.tech_title}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">{t.tech_subtitle}</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {t.tech_stack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-3 rounded-xl border border-border bg-white hover:border-primary/20 hover:shadow-md transition-all cursor-default"
                >
                  <span className="text-sm font-medium text-secondary">{tech}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-medium text-primary-light mb-2">{t.stats_title}</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">{t.testimonials_title}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              {locale === "id" ? "Dipercaya oleh Klien Kami" : "Trusted by Our Clients"}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.map((test, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-border bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-muted leading-relaxed flex-1 mb-6">&ldquo;{test.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                      {test.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">{test.name}</p>
                      <p className="text-xs text-muted">{test.position}, {test.company}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[720px] mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2">{t.faq_title}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              {locale === "id" ? "Ada Pertanyaan?" : "Got Questions?"}
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {t.faq_items.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-secondary pr-4">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-muted shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="relative rounded-3xl bg-secondary overflow-hidden p-12 md:p-16 text-center">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta_title}</h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">{t.cta_sub}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] text-lg"
                >
                  {t.cta_button}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
