import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/tabs.css";
import "@/styles/sections.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* Elfsight Platform */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        strategy="afterInteractive"
      ></Script>
    </>
  );
}
