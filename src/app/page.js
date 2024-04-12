"use client";
import Hero from "@/components/layout/Hero";
import ImageSlider from "@/components/layout/ImageSlider";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [menuItems, setMenuItems] = useState(false);

  useEffect(() => {
    fetch("/api/project").then((res) => {
      res.json().then((web) => {
        setMenuItems(web);
      });
    });
  }, []);
  return (
    <>
      <Hero />
      <section className="scroll-smooth bg-slate-950  ">
        <h1 className="text-3xl text-primary font-serif text-center font-medium underline">
          Website Demo
        </h1>
        {menuItems?.length > 0 &&
          menuItems.map((item, index) => (
            <div className="mb- p-5 z-10 max-w-4xl mx-auto " key={index}>
              <h1 className="text-4xl  text-center capitalize font-serif text-white">
                {item.title}
              </h1>
              <label className="text-xl font-mono text-white">
                Website Link :-
              </label>
              <Link
                href={item.link}
                target="_blank"
                className="text-blue-500 underline"
              >
                {item.link}
              </Link>
              <ImageSlider imageList={item.image} />
              <p className="mt-3 font-serif leading-6  text-white ">
                <span className="text-xl text-primary underline">
                  Description:-{" "}
                </span>
                {item.description}
              </p>
            </div>
          ))}
      </section>
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="max-w-md mx-auto mt-4 text-black flex flex-col gap-4 font-serif ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
            soluta, ducimus labore nihil eos numquam beatae, iure architecto
            iste nisi molestias sed aliquid ab esse, alias quidem fugiat
            dolorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
            soluta, ducimus labore nihil eos numquam beatae, iure architecto
            iste nisi molestias sed aliquid ab esse, alias quidem fugiat
            dolorem.
          </p>
        </div>
      </section>
      <section className="text-center mt-6" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-4">
          <a
            href="tel:+919114683557"
            className="text-3xl text-gray-900 underline font-mono"
          >
            +91 9114683557
          </a>
        </div>
      </section>
    </>
  );
}
