import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/tabs.css";
import "@/styles/sections.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
