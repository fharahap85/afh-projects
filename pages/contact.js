import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <SEO title={t.nav_contact} description="Contact us" />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-1/2 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-xs font-mono text-accent tracking-wider uppercase">
              01 — Contact
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-6">
              {t.nav_contact}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-muted text-lg leading-relaxed">
              {locale === "id"
                ? "Hubungi kami untuk konsultasi gratis atau diskusi tentang proyek Anda."
                : "Contact us for a free consultation or to discuss your project."}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-card-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid lg:grid-cols-5 gap-12 lg:gap-16"
          >
            {/* Form - Left */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <form
                action="https://formspree.io/f/mzzvryrg"
                method="POST"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {locale === "id" ? "Nama" : "Name"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={locale === "id" ? "Nama Anda" : "Your name"}
                      className="w-full px-4 py-3 bg-card-bg border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 bg-card-bg border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {locale === "id" ? "Subjek" : "Subject"}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder={locale === "id" ? "Tentang apa?" : "What's this about?"}
                    className="w-full px-4 py-3 bg-card-bg border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {locale === "id" ? "Pesan" : "Message"}
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder={locale === "id" ? "Ceritakan tentang proyek Anda..." : "Tell us about your project..."}
                    className="w-full px-4 py-3 bg-card-bg border border-card-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-all hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                >
                  <Send className="w-4 h-4" />
                  {locale === "id" ? "Kirim Pesan" : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Info - Right */}
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
              <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-6">
                <h3 className="font-semibold text-lg">
                  {locale === "id" ? "Informasi Kontak" : "Contact Information"}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted">Email</p>
                      <a href="mailto:info@afhprojects.com" className="text-foreground hover:text-accent transition-colors">
                        info@afhprojects.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted">
                        {locale === "id" ? "Telepon" : "Phone"}
                      </p>
                      <a href="tel:+6289528842802" className="text-foreground hover:text-accent transition-colors">
                        +62 895-2884-2802
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted">
                        {locale === "id" ? "Alamat" : "Address"}
                      </p>
                      <p className="text-foreground">
                        Jl. Sekolah Gang Ikhlas, Pekanbaru, Riau, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold">
                    {locale === "id" ? "Jam Kerja" : "Working Hours"}
                  </h3>
                </div>
                <div className="text-sm text-muted space-y-1">
                  <p>{locale === "id" ? "Senin - Jumat" : "Monday - Friday"}: 09:00 - 17:00</p>
                  <p>{locale === "id" ? "Sabtu" : "Saturday"}: 09:00 - 14:00</p>
                  <p>{locale === "id" ? "Minggu & Hari Libur" : "Sunday & Holidays"}: {locale === "id" ? "Tutup" : "Closed"}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
