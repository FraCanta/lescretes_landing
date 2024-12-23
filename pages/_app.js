import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/tabs.css";
import "@/styles/sections.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      {/* Configurazione Iubenda */}
      <Script id="iubenda-cs-configuration" strategy="afterInteractive">
        {`
          var _iub = _iub || [];
          _iub.csConfiguration = {
            siteId: 3780565,
            cookiePolicyId: 43776831,
            lang: "it"
          };
        `}
      </Script>

      {/* Script di autoblocco Iubenda */}
      <Script
        src="https://cs.iubenda.com/autoblocking/3780565.js"
        strategy="afterInteractive"
      />

      {/* Script di soluzione cookie Iubenda */}
      <Script
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        charset="UTF-8"
        async
        strategy="afterInteractive"
      />
    </>
  );
}
