import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TopicBanner from '@/components/Pages/TopicBanner';
import TopicContent from '@/components/Pages/TopicContent';

const Topic = ({ dir,
  allLangs,
  allTopics,
  contentData }) => {
  return (
    <>
      <Navbar
        dir={dir?.data?.dir}
        allLangs={allLangs?.data}
        allTopics={allTopics?.data} />
      <section className='topic'>
        <TopicBanner contentData={contentData} />
        <TopicContent contentData={contentData} />

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
        contentData
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