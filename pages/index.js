//index.js
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import id from "../locales/id/common.json";

export default function Home() {
  const { locale } = useRouter();
  const t = locale === "id" ? id : en;

  return (
    <Layout>
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">{t.title_home}</h1>
        <p className="mt-4 text-gray-600">{t.desc_home}</p>
      </div>
    </Layout>
  );
}
