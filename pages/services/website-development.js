import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { useRouter } from "next/router";
import en from "../../locales/en/common.json";
import id from "../../locales/id/common.json";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight, Monitor } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.nav_services_website} description={t.services_website_description} />
      <div className="flex flex-col md:grid md:grid-cols-[40%_60%] min-h-screen">
        {/* Hero - Sticky Left */}
        <section className="relative flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 bg-accent/5 border-b md:border-b-0 md:border-r border-card-border h-auto md:h-screen md:sticky md:top-16">
          <div className="relative z-10 text-center max-w-md">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <Monitor className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{t.nav_services_website}</h1>
            <p className="mt-4 text-muted leading-relaxed">{t.services_website_description}</p>
          </div>
        </section>

        {/* Scrollable Content - Right */}
        <section className="bg-background">
          <div className="py-12 px-4 sm:px-6 md:py-20 md:px-8 max-w-2xl mx-auto">
            {/* Why Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-mono text-accent tracking-wider uppercase">Why</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{t.services_website_why_title}</h2>
              <p className="text-muted leading-relaxed mb-6">{t.services_website_why_content}</p>
            </motion.div>

            <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-4 mb-16">
              {[
                { title: t.services_website_credibility, desc: t.services_website_credibility_desc },
                { title: t.services_website_reach, desc: t.services_website_reach_desc },
                { title: t.services_website_marketing, desc: t.services_website_marketing_desc },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div>
                    <span className="font-semibold">{item.title}</span>
                    <p className="text-sm text-muted mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </motion.ul>

            {/* Process Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-mono text-accent tracking-wider uppercase">Process</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-8">{t.services_website_process_title}</h2>
            </motion.div>

            <div className="space-y-4 mb-16">
              {[t.services_website_process_consultation, t.services_website_process_design, t.services_website_process_launch].map((title, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <div className="bg-card-bg border border-card-border rounded-xl p-5 hover:border-accent/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center font-mono text-sm font-bold text-accent">
                        {i + 1}
                      </span>
                      <h3 className="font-semibold">{title}</h3>
                    </div>
                    <p className="text-sm text-muted mt-2 ml-11">
                      {[t.services_website_process_consultation_desc, t.services_website_process_design_desc, t.services_website_process_launch_desc][i]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 text-center">
                <h2 className="text-xl font-bold mb-2">{t.services_website_cta_title}</h2>
                <p className="text-muted text-sm mb-6">{t.services_website_cta_desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-all hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                >
                  {t.services_website_cta_button}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
