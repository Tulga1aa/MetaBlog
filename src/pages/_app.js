import "@/styles/globals.css";
import { Header } from "../components/component/Header";
import { Footer } from "../components/component/Footer";
import { ThemeContextProvider } from "@/components/component/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <ThemeContextProvider>
        <Header />
        <Component {...pageProps} />;
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}
