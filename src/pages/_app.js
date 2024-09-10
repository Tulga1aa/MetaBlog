import "@/styles/globals.css";
import { Header } from "../components/projectComponent/Header";
import { Footer } from "../components/projectComponent/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}
