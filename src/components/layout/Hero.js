"use client";
import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="mt-5 md:mt-10 scroll-smooth h-[640px]   md:h-[650px]  ">
      {/* <img src={"/laptop.jpg"} className="md:hidden fixed -z-10" alt="" /> */}
      <video
        autoPlay
        loop
        className=" md:h-[710px] h-[650px]  w-full -z-10 fixed object-cover"
      >
        <source src={"/hero2.mp4"} type="video/mp4" />
      </video>
      <div className=" md:py-5  flex flex-col  ">
        <h1 className="hero-heading mt-[260px] ml-3  md:mx-6 text-xl font-serif md:text-5xl    md:mt-10 font-semibold space-x-3  ">
          Everything
          <br />
          is better with A&nbsp;
          <span className="text-primary">Technology</span>
        </h1>

        <p className="my-5 mt-[150px] text-gray-800 md:text-2xl font-mono font-semibold text-center">
          <span className="text-primary md:text-3xl font-serif">
            Technology
          </span>
          &nbsp; is the missing piece that makes every day complete
          <br /> simple yet mordern joy of life 🥰🥰🥰
        </p>
        <button className="underline mx-auto border-0 gap-2 py-2 font-semibold">
          <span className="-mt-2">Learn more</span>
          <Right />
        </button>
      </div>
      <div className=""></div>
    </section>
  );
}
