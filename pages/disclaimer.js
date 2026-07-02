import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Disclaimer() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;
  const d = t.disclaimer;

  return (
    <Layout>
      <SEO title={t.disclaimer_title} description={t.disclaimer_description} />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-xs font-mono text-accent tracking-wider uppercase">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-4">{t.disclaimer_hero_title}</h1>
            <p className="text-muted text-lg">{t.disclaimer_hero_text}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{d.interpretation_and_definitions.title}</h2>
              <p className="mb-4">{d.interpretation_and_definitions.interpretation}</p>
              <h3 className="text-lg font-semibold text-foreground mb-3">Definitions</h3>
              <ul className="space-y-2 list-disc pl-6">
                {Object.values(d.interpretation_and_definitions.definitions).map((def, i) => (
                  <li key={i}>{def}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{d.disclaimer.title}</h2>
              <p>{d.disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{d.external_links_disclaimer.title}</h2>
              <p>{d.external_links_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{d.errors_and_omissions_disclaimer.title}</h2>
              <p>{d.errors_and_omissions_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{d.fair_use_disclaimer.title}</h2>
              <p>{d.fair_use_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{d.views_expressed_disclaimer.title}</h2>
              <p>{d.views_expressed_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{d.no_responsibility_disclaimer.title}</h2>
              <p>{d.no_responsibility_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{d.use_at_your_own_risk_disclaimer.title}</h2>
              <p>{d.use_at_your_own_risk_disclaimer.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{d.contact_us.title}</h2>
              <p>{d.contact_us.content}</p>
              <p>{d.contact_us.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
