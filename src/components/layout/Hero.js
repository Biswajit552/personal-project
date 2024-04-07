"use client";
import Image from "next/image";
import Right from "../icons/Right";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
export default function Hero() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/api/project").then((res) => {
      res.json().then((web) => {
        setMenuItems(web);
      });
      // setLoadingState(true);
    });
  }, []);
  return (
    <section className="mt-5 md:mt-2   ">
      <div className=" md:py-5 flex ">
        <h1 className="hero-heading mt-2 md:mx-6 text-xl font-serif md:text-5xl    md:mt-10 font-semibold space-x-3  ">
          Everything
          <br />
          is better with A&nbsp;
          <span className="text-primary">Technology</span>
        </h1>
        <img
          src={"/c1.jpg"}
          alt={"coding"}
          className=" hero-image rounded-3xl w-[180px]   object-fill md:w-[400px] hover:scale-105 duration-1000"
        />
      </div>
      <div className="my-5 text-gray-700 md:text-2xl font-mono font-semibold text-center ">
        <p>
          <span className="text-primary md:text-3xl font-serif">
            Technology
          </span>
          &nbsp; is the missing piece that makes every day complete, simple yet
          mordern joy of life 🥰🥰🥰
        </p>

        <button className="underline mx-auto border-0 gap-2 py-2 text-gray-600 font-semibold">
          <span className="-mt-2">Learn more</span>
          <Right />
        </button>
      </div>
      <h1 className="text-3xl text-primary font-serif text-center font-medium underline">
        Website Demo
      </h1>
      {menuItems?.length > 0 &&
        menuItems.map((item, index) => (
          <section className="mb- p-5">
            <h1 className="text-4xl  text-center capitalize font-serif">
              {item.title}
            </h1>
            <label className="text-xl font-mono">Website Link :-</label>
            <Link
              href={item.link}
              target="_blank"
              className="text-blue-500 underline"
            >
              {item.link}
            </Link>
            <ImageSlider imageList={item.image} />
            <p className="mt-3 font-serif leading-6  ">
              <span className="text-xl text-primary underline">
                Description:-{" "}
              </span>
              {item.description}
            </p>
          </section>
        ))}
    </section>
  );
}
