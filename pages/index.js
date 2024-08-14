import Hero from "@/components/Hero";
import homeIT from "@/public/locales/it/home.json";
import homeEN from "@/public/locales/en/home.json";
import homeFR from "@/public/locales/fr/home.json";
import homeDE from "@/public/locales/de/home.json";
import homeJP from "@/public/locales/jp/home.json";
import homeKO from "@/public/locales/ko/home.json";
import homeRU from "@/public/locales/ru/home.json";
import homeZH from "@/public/locales/zh/home.json";
import Sections2 from "@/components/sections/Sections2";
import Sections3 from "@/components/sections/Sections3";
import Sections4 from "@/components/sections/Sections4/Sections4";
import Sections5 from "@/components/sections/Section5/Sections5";
import Head from "next/head";
import ScrollButton from "@/components/ScrollButton/ScrollButton";
import { Icon } from "@iconify/react";

export default function Home({ translation, locale }) {
  return (
    <>
      <Head>
        <>
          <title>{translation.seo.title}</title>
          <meta name="author" content="Les Crêtes" />
          <meta name="description" content={translation.seo.description} />
          <meta name="robots" content="index, follow" />

          <link
            rel="canonical"
            href={`https://www.lescretes.it/${locale.locale}`}
          />
          <link
            rel="alternate"
            hrefLang="it"
            href="https://www.lescretes.it/it"
          />
          <link
            rel="alternate"
            hrefLang="en"
            href="https://www.lescretes.it/en"
          />
          <link
            rel="alternate"
            hrefLang="de"
            href="https://www.lescretes.it/de"
          />
          <link
            rel="alternate"
            hrefLang="fr"
            href="https://www.lescretes.it/fr"
          />
          <link
            rel="alternate"
            hrefLang="jp"
            href="https://www.lescretes.it/jp"
          />
          <link
            rel="alternate"
            hrefLang="ko"
            href="https://www.lescretes.it/ko"
          />
          <link
            rel="alternate"
            hrefLang="ru"
            href="https://www.lescretes.it/ru"
          />
          <link
            rel="alternate"
            hrefLang="zh"
            href="https://www.lescretes.it/zh"
          />

          <meta
            property="og:url"
            content={`https://www.lescretes.it/${locale.locale}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={translation.seo.title} />
          <meta property="og:locale" content={locale.locale} />
          <meta
            property="og:description"
            content={translation.seo.description}
          />
          <meta property="og:site_name" content="Les Crêtes" />
          <meta
            property="og:image"
            content="https://lescretes-liard.vercel.app/assets/seo/cover_home.png"
          />
          <meta property="og:image:alt" content="Les Crêtes cover image" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="lescretes.it" />
          <meta property="twitter:url" content="https://www.lescretes.it/" />
          <meta name="twitter:title" content={translation.seo.title} />
          <meta
            name="twitter:description"
            content={translation.seo.description}
          />
          <meta
            name="twitter:image"
            content="https://lescretes-liard.vercel.app/assets/seo/cover_home.png"
          />
          <meta name="twitter:image:alt" content="Les Crêtes cover image" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "${translation.seo.title}",
            "description": "${translation.seo.description}",
            "url": "https://www.lescretes.it/${locale.locale}",
            "logo": "https://www.lescretes.it/favicon.ico"
          }
        `,
            }}
          />
        </>
      </Head>
      <Hero translation={translation?.hero} />
      <div className="min-h-screen" id="chisiamo">
        <Sections2 translation={translation?.section2} />
      </div>
      <div
        className="relative flex flex-col items-center justify-center bg-main"
        id="degustazioni"
      >
        <Sections3 translation={translation?.section3} />
      </div>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen "
        id="vini"
      >
        <Sections4 translation={translation.section4} tabs={translation.tabs} />
      </div>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen "
        id="contatti"
      >
        <Sections5 translation={translation.section5} locale={locale} />
      </div>
      {/* Bottone per scaricare la brochure */}
      <ScrollButton link={translation.hero.pdf} title="Scarica la brochure">
        {translation?.hero.download}{" "}
        <Icon icon="material-symbols:download" className="w-6 h-6" />
      </ScrollButton>
    </>
  );
}

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = homeIT;
      break;

    case "en":
      obj = homeEN;
      break;
    case "fr":
      obj = homeFR;
      break;
    case "de":
      obj = homeDE;
      break;
    case "jp":
      obj = homeJP;
      break;
    case "ko":
      obj = homeKO;
      break;
    case "ru":
      obj = homeRU;
      break;
    case "zh":
      obj = homeZH;
      break;
    default:
      obj = homeIT;
      break;
  }

  return {
    props: {
      translation: obj?.home,
      locale: locale,
    },
    revalidate: 60,
  };
}
