import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="font-script">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
