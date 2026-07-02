import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { useRouter } from "next/router";
import en from "../../locales/en/common.json";
import id from "../../locales/id/common.json";
import { motion } from "framer-motion";
import { Check, ArrowRight, Server } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.nav_services_backend} description={t.services_backend_description} />
      <div className="flex flex-col md:grid md:grid-cols-[40%_60%] min-h-screen">
        <section className="relative flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 bg-accent/5 border-b md:border-b-0 md:border-r border-card-border h-auto md:h-screen md:sticky md:top-16">
          <div className="relative z-10 text-center max-w-md">
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <Image src="/assets/Backend.png" alt={t.nav_services_backend} fill className="object-contain" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{t.nav_services_backend}</h1>
            <p className="mt-4 text-muted leading-relaxed">{t.services_backend_description}</p>
          </div>
        </section>

        <section className="bg-background">
          <div className="py-12 px-4 sm:px-6 md:py-20 md:px-8 max-w-2xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-mono text-accent tracking-wider uppercase">Why</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{t.services_foundation_title}</h2>
              <p className="text-muted leading-relaxed mb-6">{t.services_backend_intro}</p>
            </motion.div>

            <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-4 mb-16">
              {[t.services_scalability, t.services_api, t.services_security].map((title, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div>
                    <span className="font-semibold">{title}</span>
                    <p className="text-sm text-muted mt-0.5">
                      {[t.services_scalability_desc, t.services_api_desc, t.services_security_desc][i]}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ul>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-xs font-mono text-accent tracking-wider uppercase">Process</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-8">{t.services_process_title}</h2>
            </motion.div>

            <div className="space-y-4 mb-16">
              {[t.services_process_design, t.services_process_development, t.services_process_deployment].map((title, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <div className="bg-card-bg border border-card-border rounded-xl p-5 hover:border-accent/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center font-mono text-sm font-bold text-accent">{i + 1}</span>
                      <h3 className="font-semibold">{title}</h3>
                    </div>
                    <p className="text-sm text-muted mt-2 ml-11">
                      {[t.services_process_design_desc, t.services_process_development_desc, t.services_process_deployment_desc][i]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 text-center">
                <h2 className="text-xl font-bold mb-2">{t.services_cta_title}</h2>
                <p className="text-muted text-sm mb-6">{t.services_cta_desc}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-all hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                  {locale === "id" ? "Hubungi Kami" : "Contact Us"}
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
