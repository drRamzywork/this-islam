import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroApi from "@/components/Home/HeroApi";
import Quran from "@/components/Home/Quran";
import Footer from "@/components/Footer";
import Questions from "@/components/Home/Questions";
import Prophet from "@/components/Prophet";
import Arkan from "@/components/Home/Arkan";
import { useRouter } from "next/router";

export default function Data({
  homeData,
  contentFamily,
  contentPeace,
  contentOneCreator,
  contentJesus,
  contentSin,
  siteInfo,
  dir,
}) {
  const { locale } = useRouter();
  const imagePath = `/assets/imgs/white_logo.png`;

  const SiteDescription = siteInfo?.description;

  return (
    <>
      <Head>
        <title>{siteInfo?.site_name}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`${imagePath}`} />
        <meta name="theme-color" content="#092e47" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={siteInfo?.site_name} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={siteInfo?.site_name} />
        <link
          rel="apple-touch-icon"
          href={`https://this-islam.vercel.app${imagePath}`}
        />
        <link
          rel="apple-touch-startup-image"
          href={`https://this-islam.vercel.app${imagePath}`}
        />
        <meta name="author" content={siteInfo?.site_name} />
        <meta name="description" content={SiteDescription} />
        <link
          rel="canonical"
          href={`https://this-islam.vercel.app/${locale}`}
        />
        <meta name="msapplication-TileColor" content="#092e47" />
        <meta
          name="msapplication-TileImage"
          content={`https://this-islam.vercel.app${imagePath}`}
        />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteInfo?.site_name} />
        <meta property="og:locale" content={locale} />
        <meta property="og:locale:alternate" content={locale} />
        <meta
          property="og:url"
          content={`https://this-islam.vercel.app/${locale}`}
        />
        <meta property="og:title" content={siteInfo?.site_name} />
        <meta property="og:description" content={SiteDescription} />
        <meta
          property="og:image"
          content={`https://this-islam.vercel.app${imagePath}`}
        />
        <meta itemProp="name" content={siteInfo?.site_name} />
        <meta itemProp="author" content={siteInfo?.site_name} />
        <meta
          itemProp="image"
          content={`https://this-islam.vercel.app${imagePath}`}
        />
        <meta itemProp="description" content={SiteDescription} />
        <meta
          name="twitter:image"
          content={`https://this-islam.vercel.app${imagePath}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={siteInfo?.site_name} />
        <meta
          name="twitter:image:src"
          content={`https://this-islam.vercel.app${imagePath}`}
        />
        <meta name="twitter:description" content={SiteDescription} />
      </Head>

      <Navbar />
      <HeroApi
        homeData={homeData}
        contentFamily={contentFamily}
        contentPeace={contentPeace}
        contentOneCreator={contentOneCreator}
        contentJesus={contentJesus}
        contentSin={contentSin}
        dir={dir}
      />
      <Quran />
      <Arkan />
      <Prophet />
      <Questions />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const baseURL = "https://app.thisislam.net/api";

  try {
    const allLangsRes = await fetch(`${baseURL}/all_langs`);
    if (!allLangsRes.ok) throw new Error("Failed to fetch all_langs");
    const allLangs = await allLangsRes.json();

    const siteInfoRes = await fetch(`${baseURL}/get_site_info/${locale}`);
    if (!siteInfoRes.ok) throw new Error("Failed to fetch get_site_info");
    const siteInfo = await siteInfoRes.json();

    const dirResponse = await fetch(`${baseURL}/get_direction/${locale}`);
    if (!dirResponse.ok) throw new Error("Failed to fetch get_direction");
    const dir = await dirResponse.json();

    const homeDataRes = await fetch(`${baseURL}/get_home/${locale}`);
    if (!homeDataRes.ok) throw new Error("Failed to fetch get_home");
    const homeData = await homeDataRes.json();

    const contentFamilyRes = await fetch(
      `${baseURL}/get_content/${locale}/the-family-in-islam`
    );
    if (!contentFamilyRes.ok)
      throw new Error("Failed to fetch the-family-in-islam");
    const contentFamily = await contentFamilyRes.json();

    const contentPeaceRes = await fetch(
      `${baseURL}/get_content/${locale}/islam-is-the-religion-of-Peace`
    );
    if (!contentPeaceRes.ok)
      throw new Error("Failed to fetch islam-is-the-religion-of-Peace");
    const contentPeace = await contentPeaceRes.json();

    const contentOneCreatorRes = await fetch(
      `${baseURL}/get_content/${locale}/one-creator-who-alone-deserves-to-be-worshipped`
    );
    if (!contentOneCreatorRes.ok)
      throw new Error(
        "Failed to fetch one-creator-who-alone-deserves-to-be-worshipped"
      );
    const contentOneCreator = await contentOneCreatorRes.json();

    const contentJesusRes = await fetch(
      `${baseURL}/get_content/${locale}/islams-view-of-jesus-christ`
    );
    if (!contentJesusRes.ok)
      throw new Error("Failed to fetch islams-view-of-jesus-christ");
    const contentJesus = await contentJesusRes.json();

    const contentSinRes = await fetch(
      `${baseURL}/get_content/${locale}/sin-and-repentance`
    );
    if (!contentSinRes.ok)
      throw new Error("Failed to fetch sin-and-repentance");
    const contentSin = await contentSinRes.json();

    return {
      props: {
        homeData,
        allLangs,
        contentFamily: contentFamily?.data,
        contentPeace: contentPeace?.data,
        contentOneCreator: contentOneCreator?.data,
        contentJesus: contentJesus?.data,
        contentSin: contentSin?.data,
        dir: dir?.data?.dir,
        siteInfo: siteInfo?.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("API call error:", error.message);
    return {
      props: {
        homeData: null,
        allLangs: null,
        contentFamily: null,
        contentPeace: null,
        contentOneCreator: null,
        contentJesus: null,
        contentSin: null,
        dir: null,
        siteInfo: null,
      },
      revalidate: 10,
    };
  }
}

// export async function getStaticProps({ locale }) {
//   const baseURL = "https://app.thisislam.net/api";

//   const allLangsRes = await fetch(`${baseURL}/all_langs`);
//   const allLangs = await allLangsRes.json();

//   const siteInfoRes = await fetch(`${baseURL}/get_site_info/${locale}`);
//   const siteInfo = await siteInfoRes.json();

//   const dirResponse = await fetch(`${baseURL}/get_direction/${locale}`);
//   const dir = await dirResponse.json();

//   const homeDataRes = await fetch(`${baseURL}/get_home/${locale}`);
//   const homeData = await homeDataRes.json();

//   const contentFamilyRes = await fetch(
//     `${baseURL}/get_content/${locale}/the-family-in-islam`
//   );
//   const contentFamily = await contentFamilyRes.json();

//   const contentPeaceRes = await fetch(
//     `${baseURL}/get_content/${locale}/islam-is-the-religion-of-Peace`
//   );
//   const contentPeace = await contentPeaceRes.json();

//   const contentOneCreatorRes = await fetch(
//     `${baseURL}/get_content/${locale}/one-creator-who-alone-deserves-to-be-worshipped`
//   );
//   const contentOneCreator = await contentOneCreatorRes.json();

//   const contentJesusRes = await fetch(
//     `${baseURL}/get_content/${locale}/islams-view-of-jesus-christ`
//   );
//   const contentJesus = await contentJesusRes.json();

//   const contentSinRes = await fetch(
//     `${baseURL}/get_content/${locale}/sin-and-repentance`
//   );
//   const contentSin = await contentSinRes.json();

//   return {
//     props: {
//       homeData,
//       allLangs,
//       contentFamily: contentFamily?.data,
//       contentPeace: contentPeace?.data,
//       contentOneCreator: contentOneCreator?.data,
//       contentJesus: contentJesus?.data,
//       contentSin: contentSin?.data,
//       dir: dir?.data?.dir,
//       siteInfo: siteInfo?.data,
//     },
//     revalidate: 10,
//   };
// }
