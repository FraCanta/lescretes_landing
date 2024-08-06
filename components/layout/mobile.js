import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
const Mobile = ({ translation }) => {
  const { locale, pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const svgVariants = {
    closed: {
      path: "M4 6h16M4 12h16M4 18h16",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    open: {
      path: "M6 18L18 6M6 6l12 12",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const variants = {
    open: { opacity: 1, height: "100vh", transition: { duration: 0.5 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
    item: { opacity: 0, y: 100, transition: { duration: 0.5 } },
    visibleItem: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center">
      <motion.div id="close" onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={open ? svgVariants.open.path : svgVariants.closed.path}
            variants={svgVariants}
          />
        </svg>
      </motion.div>

      {/* Conditionally render the menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className=" absolute top-[60px] left-0 right-0 bg-white min-h-screen w-screen text-main   bg-pattern2 divide-y"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
            }}
          >
            <ul className="w-[90%] mx-auto h-full  flex flex-col gap-10">
              {" "}
              {/* Add your menu items here */}
              <motion.li variants={variants.item} animate="visibleItem">
                {translation?.[locale]?.home}
              </motion.li>
              <motion.li variants={variants.item} animate="visibleItem">
                <Link
                  href={`/#chisiamo`}
                  title="I vini di Les Crêtes"
                  className={`menu-item block   text-[25px] md:text-4xl leading-[30px] font-regular text-main ${
                    pathname === "/i-vini" ? "font-bold" : ""
                  }`}
                >
                  {translation?.[locale]?.storia.name}
                </Link>
              </motion.li>
              <motion.li variants={variants.item} animate="visibleItem">
                <Link
                  href={`/#vini`}
                  title="I vini di Les Crêtes"
                  className={`menu-item block   text-[25px] md:text-4xl leading-[30px] font-regular text-main ${
                    pathname === "/i-vini" ? "font-bold" : ""
                  }`}
                >
                  {translation?.[locale]?.vini}
                </Link>
              </motion.li>
              <motion.li variants={variants.item} animate="visibleItem">
                <Link
                  href={`/#degustazioni`}
                  title="I miei articoli"
                  className={`menu-item block   text-[25px] md:text-4xl leading-[30px] font-regular text-main ${
                    pathname === "/le-degustazioni" ? "font-bold" : ""
                  }`}
                >
                  {translation?.[locale]?.degustazioni}
                </Link>
              </motion.li>
              <motion.li variants={variants.item} animate="visibleItem">
                <Link
                  href="/#contatti"
                  title="Come raggiungerci e contattarci"
                  className={`menu-item block   text-[25px] md:text-4xl leading-[30px] font-regular text-main ${
                    pathname === "/contatti" ? "font-bold" : ""
                  }`}
                >
                  {translation?.[locale]?.contatti}
                </Link>
              </motion.li>
              <motion.div
                ariants={variants.item}
                animate="visibleItem"
                className="my-10 text-center md:py-4"
              >
                <h3 className="text-[20px] md:text-3xl font-bold">
                  Les Crêtes
                </h3>
                <p className="text-[14px] md:text-xl">
                  SR20, 5011010 Aymavilles (AO) <br /> Valle d’Aosta, Italia
                </p>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;
