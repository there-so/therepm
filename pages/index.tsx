import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "../components/sharedstyles";

import Hero from "../sections/Hero";
import Quote from "../sections/Quote";
import Features from "../sections/Features";
import IsItReady from "../sections/IsItReady";
import TeamFeatures from "../sections/TeamFeatures";
import Footer from "../sections/Footer";
import Script from "next/script";

const crispScript = `
  window.$crisp=[];window.CRISP_WEBSITE_ID="bb14ccd2-0869-40e7-b0f1-b520e93db7e1";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
`;

const website = {
  title: "There™ - Work across timezones efficiently & remotely",
  homepage: "https://there.team",
  description: `Friends or co-workers' time across multiple timezones, for communicating with remote workers and open sources`,
  socialBannerUrl:
    "https://there.netlify.com/static/There-pm-banner-1024-512.png",
  color: "#3ACFFC",
};

export default function Home() {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="google-site-verification"
          content="xW2oWVUs189OsMqWU4okvkuvkgO7jI7svZsEFdeUhtw"
        />

        <title>{website.title}</title>

        <meta
          name="google-site-verification"
          content="XKtisJxke0C2Hpeb8rgDk6yPDLRZj3PDR3-UtNZ04Ac"
        />

        <link rel="icon" type="image/png" href="/favicons/favicon.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/icons/there-icon-pwa-180.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content={website.color} />

        <meta
          name="keywords"
          content="Timezone,remote,work,time,app,GMT,PST,rajabi"
        />
        <meta name="description" content={website.description} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={website.title} />
        <meta property="og:url" content={website.homepage} />
        <meta property="og:description" content={website.description} />
        <meta property="og:image:url" content={website.socialBannerUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={website.title} />
        <meta name="twitter:site" content="@ThereHQ" />
        <meta name="twitter:creator" content="@morajabi" />
        <meta name="twitter:description" content={website.description} />
        <meta name="twitter:image" content={website.socialBannerUrl} />

        <link rel="canonical" href={website.homepage} />

        {/* <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:700|Work+Sans:400,600"
          rel="stylesheet"
        /> */}
      </Head>
      <Hero />
      <Quote />
      <Features />
      <IsItReady />
      <TeamFeatures />
      <Footer />
      <Script
        id="cript"
        async
        dangerouslySetInnerHTML={{ __html: crispScript }}
      />
    </Container>
  );
}
