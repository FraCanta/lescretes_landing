import Link from "next/link";
import React from "react";
import Script from "next/script";

const Footer = () => {
  return (
    <>
      <footer className="lg:text-center px-10 py-4 border-t  text-main/80 border-[#D4D2E3]">
        <aside>
          <p>
            Copyright © 2024 Les Crêtes - P.iva 00520450073 | All Rights
            Reserved |{" "}
            <Link
              href="https://www.iubenda.com/privacy-policy/43776831"
              className="iubenda-white iubenda-noiframe iubenda-embed "
              title="Privacy Policy "
              target="_blank"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://www.iubenda.com/privacy-policy/43776831/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Cookie Policy"
              target="_blank"
            >
              {" "}
              Cookie Policy
            </Link>
          </p>
        </aside>
        {/* Script Iubenda per la gestione della Privacy Policy */}
        <Script id="iubenda-loader" strategy="lazyOnload">
          {`
          (function (w,d) {
            var loader = function () {
              var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
              s.src="https://cdn.iubenda.com/iubenda.js";
              tag.parentNode.insertBefore(s,tag);
            };
            if(w.addEventListener){
              w.addEventListener("load", loader, false);
            }else if(w.attachEvent){
              w.attachEvent("onload", loader);
            }else{
              w.onload = loader;
            }
          })(window, document);
        `}
        </Script>
        {/* Script Iubenda per la gestione della Cookie Policy */}
        <Script id="iubenda-cookie-loader" strategy="lazyOnload">
          {`
          (function (w, d) {
            var loader = function () {
              var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
              s.src = "https://cdn.iubenda.com/iubenda.js";
              tag.parentNode.insertBefore(s, tag);
            };
            if (w.addEventListener) {
              w.addEventListener("load", loader, false);
            } else if (w.attachEvent) {
              w.attachEvent("onload", loader);
            } else {
              w.onload = loader;
            }
          })(window, document);
        `}
        </Script>
      </footer>
    </>
  );
};

export default Footer;
