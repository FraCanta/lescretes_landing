import React, { useState, useEffect } from "react";
import Link from "next/link";

const ScrollButton = ({ link, title, threshold = 300, children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [threshold]);

  return (
    visible && (
      <a
        title={title}
        href={link}
        passHref
        download
        className="fixed flex items-center gap-2 px-4 py-2 text-white transition-all rounded-full shadow-lg bottom-8 right-8 bg-main hover:bg-white hover:text-main z-[9999999]"
      >
        {children}
      </a>
    )
  );
};

export default ScrollButton;
