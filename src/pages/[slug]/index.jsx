import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TopicBanner from '@/components/Pages/TopicBanner';
import TopicContent from '@/components/Pages/TopicContent';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Topic = ({ dir,
  allLangs,
  allTopics,
  contentData,
  siteInfo }) => {
  const { locale, query } = useRouter();
  const imagePath2 = `/assets/imgs/white_logo.png`;
  const slug = query.slug;
  const topicImage = contentData?.parent?.image;
  const imagePath = topicImage;

  const parent = contentData.parent;
  const SiteDescription = parent?.short_intro?.replace(/&nbsp;/g, " ")
  const siteTitle = parent?.title?.replace(/&nbsp;/g, " ");


  return (
    <>
      <Head>
        <title>{`${siteInfo?.site_name} | ${siteTitle}`}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content={siteTitle} />
        <link rel="icon" type="image/png" href={`${imagePath2}`} />
        <meta name="theme-color" content="#092e47" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={`${siteInfo?.site_name} | ${siteTitle}`} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={`${siteInfo?.site_name} | ${siteTitle}`} />
        <link
          rel="apple-touch-icon"
          href={`${imagePath}`}
        />
        <link
          rel="apple-touch-startup-image"
          href={`${imagePath}`}
        />
        <meta name="author" content={`${siteInfo?.site_name} | ${siteTitle}`} />
        <meta name="description" content={SiteDescription} />
        <link
          rel="canonical"
          href={`https://this-islam.vercel.app/${locale}/${slug}`}
        />
        <meta name="msapplication-TileColor" content="#092e47" />
        <meta
          name="msapplication-TileImage"
          content={`${imagePath}`}
        />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={`${siteInfo?.site_name} | ${siteTitle}`} />
        <meta property="og:locale" content={locale} />
        <meta property="og:locale:alternate" content={locale} />
        <meta
          property="og:url"
          content={`https://this-islam.vercel.app/${locale}/${slug}`}
        />
        <meta property="og:title" content={`${siteInfo?.site_name} | ${siteTitle}`} />
        <meta property="og:description" content={SiteDescription} />
        <meta
          property="og:image"
          content={`${imagePath}`}
        />
        <meta itemProp="name" content={`${siteInfo?.site_name} | ${siteTitle}`} />
        <meta itemProp="author" content={`${siteInfo?.site_name} | ${siteTitle}`} />
        <meta
          itemProp="image"
          content={`${imagePath}`}
        />
        <meta itemProp="description" content={SiteDescription} />
        <meta
          name="twitter:image"
          content={`${imagePath}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={`${siteInfo?.site_name} | ${siteTitle}`} />
        <meta
          name="twitter:image:src"
          content={`${imagePath}`}
        />
        <meta name="twitter:description" content={SiteDescription} />
      </Head>

      <Navbar
        dir={dir?.data?.dir}
        allLangs={allLangs?.data}
        allTopics={allTopics?.data} />
      <section className='topic'>


        <TopicBanner contentData={contentData} dir={dir?.data?.dir} />

        <TopicContent contentData={contentData} dir={dir?.data?.dir} />

      </section>
      <Footer />
    </>
  )
}

export default Topic


export async function getStaticProps({ locale, params }) {
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


    const allTopicsRes = await fetch(`${baseURL}/all_menu_items/${locale}`);
    if (!allTopicsRes.ok) throw new Error("Failed to fetch all_menu_items");
    const allTopics = await allTopicsRes.json();

    const contentRes = await fetch(`${baseURL}/get_content/${locale}/${params.slug}`);
    if (!contentRes.ok) throw new Error("Failed to fetch all_menu_items");
    const contentData = await contentRes.json();



    return {
      props: {
        allLangs,
        dir,
        allTopics,
        contentData,
        siteInfo: siteInfo.data,

      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("API call error:", error.message);
    return {
      props: {
        allLangs: null,
        dir: null,
        allTopics: null,
        contentData: null,
        siteInfo: null,

      },
      revalidate: 10,
    };
  }
}


export async function getStaticPaths() {
  try {
    const res = await fetch("https://app.thisislam.net/api/get-slugs");
    const data = await res.json();

    if (!data || !data.data) {
      throw new Error('Invalid data format');
    }

    const paths = data.data.map((item) => {
      // تأكد من أن العنصر هو سلسلة نصية
      if (typeof item !== 'string') {
        throw new Error(`Invalid slug: ${item}`);
      }
      return {
        params: { slug: item }
      };
    });

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}