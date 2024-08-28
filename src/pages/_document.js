import { Html, Head, Main, NextScript } from "next/document";
import axios from "axios";

export default function Document(props) {
  const { locale, dir } = props;

  return (
    <Html lang={locale} dir={dir}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  const locale = ctx.query.locale || "ar";

  let dir = "rtl";

  try {
    const response = await axios.get(
      `https://app.thisislam.net/api/get_direction/${locale}`
    );
    dir = response?.dir.data.dir || "rtl";
  } catch (error) {
    console.error("Failed to fetch direction from API:", error);
  }

  return {
    ...initialProps,
    locale,
    dir,
  };
};
