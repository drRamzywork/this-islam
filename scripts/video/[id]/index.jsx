import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';
import vStyles from './index.module.scss'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Video = ({ siteInfo, dir, allLangs, allTopics }) => {

  const SiteDescription = siteInfo?.data?.description;
  const SiteKeyWords = siteInfo?.data?.keywords;
  const SiteName = siteInfo?.data?.site_name;

  const videos = [
    {
      id: 1,
      locales: {
        en: { title: 'Why Allah?', url: 'YpJtfoJ9qS8' },
        ar: { title: 'لماذا الله؟', url: 'YpJtfoJ9qS8' },
        fr: { title: 'Pourquoi Allah?', url: '_ETIdmzSXnM' }
      }
    },
    {
      id: 2,
      locales: {
        en: { title: 'The Hijab', url: 'ndA_LzoH2wk' },
        ar: { title: 'الحجاب', url: 'udFmkBak_nc' },
        ru: { title: 'Хиджаб', url: 'TN5P0qJ_7Yo' }
      }
    },
  ];

  const router = useRouter();
  const { locale } = useRouter();
  const { id } = router.query;

  const videoId = parseInt(id, 10);
  const video = videos.find(v => v.id === videoId);
  // const videoFiltred = video?.locales[locale];
  const videoFiltred = video?.locales[locale] || video?.locales['ar'];

  const youtubeUrl = `https://www.youtube.com/embed/${videoFiltred?.url}`;


  return (
    <>
      <Head>
        <title>{`${SiteName} - ${videoFiltred?.title}`}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={SiteDescription} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={SiteKeyWords} />
        <meta property="og:title" content={SiteName} />
        <meta property="og:description" content={SiteDescription} />
        <meta property="og:url" content={"https://thisislam.net/"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:domain" content="https://thisislam.net/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SiteName} />
        <meta name="twitter:description" content={SiteDescription} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="google-site-verification" content="ZMcQQyaUJV6fuXkMty467caCYlHFOkDuUh9qeXZNpYw" />
        <meta property="og:image" content="https://thisislam.net/assets/images/blueLogo.jpeg" />
        <meta name="twitter:image" content="https://thisislam.net/assets/images/blueLogo.jpeg" />
      </Head>

      <Navbar
        dir={dir?.data?.dir}
        allLangs={allLangs?.data}
        allTopics={allTopics?.data}
      />

      <section className={vStyles.video}>
        <h1 style={{
          fontFamily: "BoldSans",
        }}>{videoFiltred?.title}</h1>
        <div className="container">

          <iframe
            width="560"
            height="315"
            src={youtubeUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

      </section>


      <Footer />
    </>
  );
};

export default Video;

export async function getStaticProps({ locale }) {
  const baseURL = "https://app.thisislam.net/api";

  const allLangsRes = await fetch(`${baseURL}/all_langs`);
  const allLangs = await allLangsRes.json();


  const languageValuesRes = await fetch(`https://app.thisislam.net/api/get_home/${locale}`);
  const languageValues = await languageValuesRes.json();

  const siteInfoRes = await fetch(`https://app.thisislam.net/api/get_site_info/${locale}`);
  const siteInfo = await siteInfoRes.json();



  const dirResponse = await fetch(`${baseURL}/get_direction/${locale}`);
  const dir = await dirResponse.json();



  const allTopicsRes = await fetch(`${baseURL}/all_menu_items/${locale}`);
  const allTopics = await allTopicsRes.json();


  return {
    props: {
      languageValues,
      allLangs,
      dir,
      siteInfo,
      allTopics
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const videosIds = [1, 2, 3, 4, 5];

  const paths = videosIds.map((data) => {
    return {
      params: { id: data.toString() }, // Convert id to string
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
