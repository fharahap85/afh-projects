import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CookiesPolicy() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;
  const c = t.cookies_policy;

  return (
    <Layout>
      <SEO title={t.cookies_title} description={t.cookies_description} />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-xs font-mono text-accent tracking-wider uppercase">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-4">{t.cookies_hero_title}</h1>
            <p className="text-muted text-lg">{t.cookies_hero_text}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-muted leading-relaxed">
            <p>{c.intro}</p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{c.interpretation_and_definitions.title}</h2>
              <p className="mb-4">{c.interpretation_and_definitions.interpretation}</p>
              <h3 className="text-lg font-semibold text-foreground mb-3">Definitions</h3>
              <ul className="space-y-2 list-disc pl-6">
                {Object.values(c.interpretation_and_definitions.definitions).map((def, i) => (
                  <li key={i}>{def}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{c.type_of_cookies.title}</h2>
              <p className="mb-4">{c.type_of_cookies.intro}</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>
                  <strong>{c.type_of_cookies.cookies_types.necessary.title}</strong>: {c.type_of_cookies.cookies_types.necessary.purpose}
                </li>
                <li>
                  <strong>{c.type_of_cookies.cookies_types.functionality.title}</strong>: {c.type_of_cookies.cookies_types.functionality.purpose}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{c.your_choices.title}</h2>
              <p>{c.your_choices.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{c.more_information.title}</h2>
              <p>{c.more_information.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{c.contact_us.title}</h2>
              <p>{c.contact_us.content}</p>
              <p>{c.contact_us.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
