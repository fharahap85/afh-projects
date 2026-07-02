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

export default function PrivacyPolicy() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;
  const p = t.privacy_policy;

  return (
    <Layout>
      <SEO title={t.privacy_title} description={t.privacy_description} />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-xs font-mono text-accent tracking-wider uppercase">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-4">{t.privacy_hero_title}</h1>
            <p className="text-muted text-lg">{t.privacy_hero_text}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-muted leading-relaxed">
            <p>{p.intro}</p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.interpretation_and_definitions.title}</h2>
              <p className="mb-4">{p.interpretation_and_definitions.interpretation}</p>
              <h3 className="text-lg font-semibold text-foreground mb-3">Definitions</h3>
              <ul className="space-y-2 list-disc pl-6">
                {Object.values(p.interpretation_and_definitions.definitions).map((def, i) => (
                  <li key={i}>{def}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.collecting_and_using_personal_data.title}</h2>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.collecting_and_using_personal_data.types_of_data_collected.title}</h3>
              <p className="mb-4">{p.collecting_and_using_personal_data.types_of_data_collected.personal_data.content}</p>
              <p className="mb-4">{p.collecting_and_using_personal_data.types_of_data_collected.usage_data.content}</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.collecting_and_using_personal_data.tracking_technologies_and_cookies.title}</h3>
              <p>{p.collecting_and_using_personal_data.tracking_technologies_and_cookies.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.use_of_personal_data.title}</h2>
              <p>{p.use_of_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.sharing_personal_data.title}</h2>
              <p>{p.sharing_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.retention_of_personal_data.title}</h2>
              <p>{p.retention_of_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.transfer_of_personal_data.title}</h2>
              <p>{p.transfer_of_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.delete_personal_data.title}</h2>
              <p>{p.delete_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.disclosure_of_personal_data.title}</h2>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.disclosure_of_personal_data.business_transactions.title}</h3>
              <p className="mb-4">{p.disclosure_of_personal_data.business_transactions.content}</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.disclosure_of_personal_data.law_enforcement.title}</h3>
              <p className="mb-4">{p.disclosure_of_personal_data.law_enforcement.content}</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.disclosure_of_personal_data.other_legal_requirements.title}</h3>
              <p>{p.disclosure_of_personal_data.other_legal_requirements.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.security_of_personal_data.title}</h2>
              <p>{p.security_of_personal_data.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.childrens_privacy.title}</h2>
              <p>{p.childrens_privacy.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.links_to_other_websites.title}</h2>
              <p>{p.links_to_other_websites.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.changes_to_privacy_policy.title}</h2>
              <p>{p.changes_to_privacy_policy.content}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{p.contact_us.title}</h2>
              <p>{p.contact_us.content}</p>
              <p>{p.contact_us.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
