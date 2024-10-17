import Image from "next/image";
import React from "react";

function SinglePage() {
  return (
    <div className="w-[90%] mx-auto h-screen flex items-center justify-center p-20">
      <div className="relative aspect-square w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] ">
        <Image
          src="/tabella.jpg"
          alt="Static Image"
          fill
          className="w-full h-full obejct-cover"
        />
      </div>
    </div>
  );
}

export default SinglePage;

export async function getStaticProps() {
  return {
    props: {}, // Non ci sono props da passare, visto che l'immagine è statica
  };
}

export async function getStaticPaths({ locale }) {
  return {
    paths: [
      {
        params: {
          title: "separethewase",
          locale: locale,
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
}
