import ContactCard from "@/components/Cards/ContactCard";
// import Hero from "@/components/heroHome/Hero";
import Link from "next/link";
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

const Sections5 = ({ translation }) => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    city: "",
    cap: "",
    dob: null,
    nation: "",
  });
  return (
    <>
      {/* <Hero text={translation.hero.title} img={Rifugio} /> */}
      <div className="w-[90%] mx-auto py-20 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold">{translation.references.title}</h2>
          <div className="grid grid-cols-2 gap-y-10">
            <ContactCard
              color="main"
              title="Email*"
              description=" info@lescretes.it"
            />
            <ContactCard
              color="main"
              title={translation.references.phone}
              description="(+ 39) 0165 / 90 22 74 "
            />
            <div className="flex flex-col gap-4">
              <ContactCard
                color="main"
                title={translation.references.address}
                description="Les Crêtes Produzione e vendita Vini | SR20, 50, 11010 Aymavilles AO"
                icon="ph:phone"
              />

              <Link
                href="https://maps.app.goo.gl/3cbSMTf1PybdEtZn9"
                className="font-bold underline text-main"
                target="_blank"
              >
                {translation.references.mapdirect}
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="collapse bg-second">
              <input type="checkbox" />
              <div className="text-xl font-medium collapse-title">
                <h3 className="text-main text-[20px]  font-bold  md:leading-[30.43px]">
                  {translation.references.listRef.title}
                </h3>
              </div>
              <div className="collapse-content">
                <ul className="flex flex-col gap-2 text-xl text-main/80">
                  {translation.references.listRef.list.map((l, i) => {
                    return (
                      <li
                        className="flex flex-col gap-2 text-lg lg:flex-row lg:items-center"
                        key={i}
                      >
                        <strong>{l.name}</strong> {l.value}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <nav className="grid grid-cols-1 gap-1">
            <header className="uppercase font-bold !text-main">
              {translation?.references.col1.title}
            </header>
            <p className="font-bold text-main/90">
              {translation?.references.col1.days}
            </p>
            <p className="text-main/80">8.30 – 13.00 / 14.30 – 19.20</p>
            <p className="text-main/80">9.30 – 13.00 / 14.30 – 19.20</p>
            <p className="font-bold text-main/90">
              {translation?.references.col1.close}
            </p>
            <p className="text-main/80">9.30 – 19.20</p>
          </nav>
        </div>
        {/* <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold">
            {translation.formContact.title}
          </h2>
          <ContactForm
            inputs={inputs}
            setInputs={setInputs}
            translation={translation.formContact}
          />
        </div> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.319582227219!2d7.245004511971469!3d45.704625217244065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478921853216a0e5%3A0x1b38ef9ac6af5c76!2sLes%20Cr%C3%AAtes%20Produzione%20e%20vendita%20Vini!5e0!3m2!1sit!2sit!4v1723031679015!5m2!1sit!2sit"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-full aspect-square"
        ></iframe>
      </div>
    </>
  );
};

export default Sections5;

// export async function getStaticProps(locale, context) {
//   let obj;
//   switch (locale.locale) {
//     case "it":
//       obj = contattiIT;
//       break;

//     case "en":
//       obj = contattiEN;
//       break;
//     case "fr":
//       obj = contattiFR;
//       break;
//     case "de":
//       obj = contattiDE;
//       break;
//     case "jp":
//       obj = contattiJP;
//       break;
//     case "ko":
//       obj = contattiKO;
//       break;
//     case "ru":
//       obj = contattiRU;
//       break;
//     case "zh":
//       obj = contattiZH;
//       break;
//     default:
//       obj = contattiIT;
//       break;
//   }

//   return {
//     props: {
//       translation: obj?.contatti,
//     },
//     revalidate: 60,
//   };
// }
