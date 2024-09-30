import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Logo from "@/public/logo/logo.png";
import Mobile from "./mobile";

const NavBar = ({ translation }) => {
  const { locale, pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Riferimento per il sottomenu

  useEffect(() => {
    // Funzione per gestire il clic esterno
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Aggiunge l'event listener per i clic
    document.addEventListener("mousedown", handleClickOutside);

    // Rimuove l'event listener quando il componente viene smontato
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="relative">
      <nav className="h-[60px] md:h-[100px] lg:h-[70px] xl:h-[90px] fxl:h-[100px] 3xl:h-[180px] 4xl:h-[250px] 3xl flex w-full items-center justify-between relative z-[999999] nav-scroll ">
        <div className="flex w-[90%] mx-auto justify-between items-center">
          <div>
            <Image
              src={Logo}
              alt="Logo di Les Crêtes"
              className="w-[85px] md:w-[150px] lg:w-[110px] xl:w-[130px] 2xl:w-[110px] fxl:w-[150px] 3xl:w-[200px] 4xl:w-[300px]"
            />
          </div>
          <div className="xl:flex items-center hidden font-black text-[#4A4A49] ">
            <div className="flex items-center gap-20 3xl:gap-32">
              <Link
                href={`#chisiamo`}
                title="I nostri vini"
                className="text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
              >
                {translation?.[locale]?.storia.name}
              </Link>

              <Link
                href={`#degustazioni`}
                title="Le nostre degustazioni"
                className={`text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center${
                  pathname === "/i-vini"
                    ? "underline underline-offset-4 decoration-main"
                    : ""
                }`}
              >
                {translation?.[locale]?.degustazioni}
              </Link>
              <Link
                href={`#vini`}
                title="I nostri vini"
                className="text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
              >
                {translation?.[locale]?.vini}
              </Link>
            </div>
          </div>
          <div className="items-center justify-end hidden gap-8 font-black xl:flex ">
            <Link
              href="#contatti"
              title="Pagina info e contatti"
              className="mr-[1rem] gap-2 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
            >
              {translation?.[locale]?.contatti}
            </Link>
          </div>
          <div className="flex items-center justify-end py-1 text-main xl:hidden ">
            <Mobile translation={translation} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
