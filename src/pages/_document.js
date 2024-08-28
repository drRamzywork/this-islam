// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document(props) {
//   const { locale, dir } = props;

//   return (
//     <Html lang={locale} dir={dir}>
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

// Document.getInitialProps = async (ctx) => {
//   const initialProps = await ctx.defaultGetInitialProps(ctx);
//   const locale = ctx.query.locale;

//   const dirResponse = await fetch(
//     `https://app.thisislam.net/api/get_direction/${locale}`
//   );
//   const dir = await dirResponse.json();
//   return {
//     ...initialProps,
//     locale,
//     dir,
//   };
// };

import { Html, Head, Main, NextScript } from "next/document";

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
  const locale = ctx.query.locale || "ar"; // Default to 'en' if locale is not defined

  let dir = "rtl"; // Default direction

  try {
    const dirResponse = await fetch(
      `https://app.thisislam.net/api/get_direction/${locale}`
    );

    if (!dirResponse.ok) {
      throw new Error(`Failed to fetch direction for locale ${locale}`);
    }

    const dirData = await dirResponse.json();

    dir = dirData?.data?.dir || "rtl"; // Fallback to 'ltr' if dir is not found in the response
  } catch (error) {
    console.error("Error fetching direction:", error.message);
  }

  return {
    ...initialProps,
    locale,
    dir,
  };
};
