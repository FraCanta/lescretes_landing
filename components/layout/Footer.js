import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo/logo.png";
import { useRouter } from "next/router";

const Footer = ({ translation }) => {
  const { locale } = useRouter();
  return (
    <>
      <footer className="lg:text-center px-10 py-4 border-t  text-main/80 border-[#D4D2E3]">
        <aside>
          <p>
            Copyright © 2024 Les Crêtes - P.iva 00520450073 | All Rights
            Reserved |{" "}
            <Link
              href="/privacy"
              title="Pagina privacy policy"
              className="underline"
            >
              Privacy Policy
            </Link>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
