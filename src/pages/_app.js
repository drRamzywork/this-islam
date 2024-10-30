import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cairo, Tajawal } from "next/font/google";
import { useRouter } from "next/router";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900", "1000"],
  style: ["normal"],
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "800", "900"],
  style: ["normal"],
});

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  const combinedFontFamily = `${cairo.style.fontFamily}, ${tajawal.style.fontFamily}`;

  console.log(cairo.style.fontFamily, "cairo.style.fontFamily");
  console.log(tajawal.style.fontFamily, "tajawal.style.fontFamily");
  return (
    <SimpleBar
      style={{
        maxHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <main
        style={{ fontFamily: combinedFontFamily }}
        className={`App-${locale}`}
      >
        <Component {...pageProps} />
      </main>
    </SimpleBar>
  );
}
// import "@/styles/globals.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Cairo } from "next/font/google";
// import SimpleBar from "simplebar-react";
// import "simplebar-react/dist/simplebar.min.css";

// const cairo = Cairo({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "600", "700", "900", "1000"],
//   style: ["normal"],
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <SimpleBar
//       style={{
//         maxHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       <main className={` ${cairo.className}`}>
//         <Component {...pageProps} />
//       </main>
//     </SimpleBar>
//   );
// }
