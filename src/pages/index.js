import Head from "next/head";
import Navbar from "@/components/Navbar";
import HeroApi from "@/components/Home/HeroApi";
import Quran from "@/components/Home/Quran";
import Footer from "@/components/Footer";
import Questions from "@/components/Home/Questions";
import Prophet from "@/components/Prophet";
import Arkan from "@/components/Home/Arkan";
import { useRouter } from "next/router";
import Arkan2 from "@/components/Home/Arkan2";

export default function Data({
  homeData,
  contentFamily,
  contentQuran,
  contentPeace,
  contentOneCreator,
  contentJesus,
  contentSin,
  siteInfo,
  home,
  arkan,
  dir,
  mohamedSights,
  whoIsMohamed,
  allWords,
  mohameSaying,
  allTopics,
  desMohamed,
  questions,
  mohamedStories,
  allLangs,
}) {
  const { locale } = useRouter();
  const imagePath = `    nbh/assets/imgs/white_logo.png`;
  const SiteDescription = siteInfo?.description;
  const cleanedQuranDesc = contentQuran?.parent?.short_intro;
  const quranDesc = cleanedQuranDesc?.replace(/&nbsp;/g, " ");

  const quran = home?.quran;
  const mohamed = allWords?.mohamed;

  const quranTitle = allWords?.quran_title || "";
  const quranTitle2 = quranTitle.split(" ");
  const title_main1 = quranTitle2[0] || "";
  const title_main2 = quranTitle2[1] || "";

  const read_moreBtn = allWords?.read_more;
  const arkanDesc = allWords?.arkan_desc;
  const testimonyTitle = allWords?.testimony;
  const prophetDesc = allWords?.prophet_desc;

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

      <Navbar
        dir={dir?.data?.dir}
        allLangs={allLangs?.data}
        allTopics={allTopics?.data}
      />

      <HeroApi
        homeData={homeData}
        contentFamily={contentFamily}
        contentPeace={contentPeace}
        contentOneCreator={contentOneCreator}
        contentJesus={contentJesus}
        contentSin={contentSin}
        dir={dir?.data?.dir}
        read_moreBtn={read_moreBtn}
      />

      <Quran
        title_main1={title_main1}
        title_main2={title_main2}
        quranDesc={quranDesc}
        quran={quran}
        dir={dir?.data?.dir}
        read_moreBtn={read_moreBtn}
      />

      <Arkan2
        dir={dir?.data?.dir}
        arkan={arkan}
        home={home}
        testimonyTitle={testimonyTitle}
      />

      <Prophet
        dir={dir?.data?.dir}
        mohamed={mohamed}
        whoIsMohamed={whoIsMohamed?.parent}
        mohamedSights={mohamedSights?.parent}
        mohamedStories={mohamedStories?.parent}
        mohameSaying={mohameSaying?.parent}
        desMohamed={desMohamed?.parent}
        prophetDesc={prophetDesc}
        read_moreBtn={read_moreBtn}
      />
      {locale === "ar" && <Questions questions={questions} />}

      <Footer dir={dir?.data?.dir} />
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

    const allWordsRes = await fetch(`${baseURL}/get-trans/${locale}`);
    if (!allWordsRes.ok) throw new Error("Failed to fetch get_site_info");
    const allWords = await allWordsRes.json();

    const dirResponse = await fetch(`${baseURL}/get_direction/${locale}`);
    if (!dirResponse.ok) throw new Error("Failed to fetch get_direction");
    const dir = await dirResponse.json();

    const homeResponse = await fetch(`${baseURL}/home/${locale}`);
    if (!homeResponse.ok) throw new Error("Failed to fetch get_homeSction");
    const home = await homeResponse.json();

    const homeDataRes = await fetch(`${baseURL}/get_home/${locale}`);
    if (!homeDataRes.ok) throw new Error("Failed to fetch get_home");
    const homeData = await homeDataRes.json();

    const contentFamilyRes = await fetch(
      `${baseURL}/get_content/${locale}/the-family-in-islam`
    );
    if (!contentFamilyRes.ok)
      throw new Error("Failed to fetch the-family-in-islam");
    const contentFamily = await contentFamilyRes.json();

    const contentQuranRes = await fetch(
      `${baseURL}/get_content/${locale}/the-quran-the-eternal-miracle-of-islam`
    );
    if (!contentQuranRes.ok)
      throw new Error("Failed to fetch the-quran-the-eternal-miracle-of-islam");
    const contentQuran = await contentQuranRes.json();

    const contentPeaceRes = await fetch(
      `${baseURL}/get_content/${locale}/islam-is-the-religion-of-Peace`
    );
    if (!contentPeaceRes.ok)
      throw new Error("Failed to fetch islam-is-the-religion-of-Peace");
    const contentPeace = await contentPeaceRes.json();

    const arkanRes = await fetch(
      `${baseURL}/get_content/${locale}/the-true-reality-of-worship-in-islam`
    );
    if (!arkanRes.ok)
      throw new Error("Failed to fetch the-true-reality-of-worship-in-islam");
    const arkan = await arkanRes.json();

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

    const whoIsMohamedRes = await fetch(
      `${baseURL}/get_content/${locale}/who-is-the-messenger-of-islam`
    );
    if (!whoIsMohamedRes.ok)
      throw new Error("Failed to fetch who-is-the-messenger-of-islam");
    const whoIsMohamed = await whoIsMohamedRes.json();

    const mohamedSightsRes = await fetch(
      `${baseURL}/get_content/${locale}/prophet-muhammad-in-the-sight-of-fair-minded-people`
    );
    if (!mohamedSightsRes.ok)
      throw new Error(
        "Failed to fetch prophet-muhammad-in-the-sight-of-fair-minded-people"
      );
    const mohamedSights = await mohamedSightsRes.json();

    const mohamedStoriesRes = await fetch(
      `${baseURL}/get_content/${locale}/aspects-of-prophet-muhammads-life`
    );
    if (!mohamedStoriesRes.ok)
      throw new Error("Failed to fetch aspects-of-prophet-muhammads-life");
    const mohamedStories = await mohamedStoriesRes.json();

    const mohameSayingRes = await fetch(
      `${baseURL}/get_content/${locale}/some-sayings-of-prophet-muhammad`
    );
    if (!mohameSayingRes.ok)
      throw new Error("Failed to fetch some-sayings-of-prophet-muhammad");
    const mohameSaying = await mohameSayingRes.json();

    const desMohamedRes = await fetch(
      `${baseURL}/get_content/${locale}/description-of-prophet-muhammad`
    );
    if (!desMohamedRes.ok)
      throw new Error("Failed to fetch description-of-prophet-muhammad");
    const desMohamed = await desMohamedRes.json();

    const allTopicsRes = await fetch(`${baseURL}/all_menu_items/${locale}`);
    if (!allTopicsRes.ok) throw new Error("Failed to fetch all_menu_items");
    const allTopics = await allTopicsRes.json();

    const questionsRes = await fetch(
      `${baseURL}/get_content/${locale}/thought-provoking-questions`
    );
    if (!questionsRes.ok) throw new Error("Failed to fetch all_menu_items");
    const questions = await questionsRes.json();

    return {
      props: {
        homeData,
        allLangs,
        contentFamily,
        contentQuran,
        contentPeace,
        contentOneCreator,
        contentJesus,
        contentSin,
        allWords,
        dir,
        siteInfo: siteInfo.data,
        home,
        arkan,
        whoIsMohamed,
        mohamedSights,
        mohameSaying,
        mohamedStories,
        desMohamed,
        questions,
        allTopics,
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
        contentQuran: null,
        contentPeace: null,
        contentOneCreator: null,
        contentJesus: null,
        contentSin: null,
        dir: null,
        siteInfo: null,
        questions: null,
        home: null,
        allWords: null,
        arkan: null,
        whoIsMohamed: null,
        mohamedSights: null,
        mohamedStories: null,
        mohameSaying: null,
        desMohamed: null,
        allTopics: null,
      },
      revalidate: 10,
    };
  }
}
