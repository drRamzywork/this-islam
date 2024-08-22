import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cairo } from "next/font/google";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900", "1000"],
  style: ["normal"],
});

export default function App({ Component, pageProps }) {
  return (
    <SimpleBar
      style={{
        maxHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <main className={` ${cairo.className}`}>
        <Component {...pageProps} />
      </main>
    </SimpleBar>
  );
}
