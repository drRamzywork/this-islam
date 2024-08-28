import { Html, Head, Main, NextScript } from "next/document";
// import { useRouter } from "next/navigation";

export default function Document(props) {
  // const { locale } = useRouter();
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
  const locale = ctx.query.locale || "en"; // Default to 'en' if no locale is specified

  let dir = "ltr"; // Default direction

  try {
    const response = await axios.get(
      `https://app.thisisislam.net/api/get_site_info/${locale}`
    );
    dir = response.data.data.dir || "ltr"; // Use 'ltr' as a fallback if no dir is found
  } catch (error) {
    console.error("Failed to fetch direction from API:", error);
  }

  return {
    ...initialProps,
    locale,
    dir,
  };
};
