import "@/styles/globals.css";
import { Header } from "./projectComponent/Header";
import { Footer } from "./projectComponent/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}
