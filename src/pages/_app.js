import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cairo } from "next/font/google";
const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900", "1000"],
  style: ["normal"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={` ${cairo.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
