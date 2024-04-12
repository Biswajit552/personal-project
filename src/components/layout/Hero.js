"use client";
import Image from "next/image";
import Right from "../icons/Right";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const comp = useRef(null);
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.from("#intro-slider", {
  //       xPercent: "-100",
  //       duration: 1.3,
  //       delay: 0.3,
  //     })
  //       .from(["#title-1", "#title-2", "#title-3"], {
  //         opacity: 0,
  //         y: "+=30",
  //         stagger: 0.5,
  //       })
  //       .to(["#title-1", "#title-2", "#title-3"], {
  //         opacity: 0,
  //         y: "-=30",
  //         delay: 0.3,
  //         stagger: 0.5,
  //       })
  //       .to("#intro-slider", {
  //         xPercent: "-100",
  //         duration: 1.3,
  //       })

  //       .from(["#hero", "#para"], {
  //         xPercent: -100,
  //         duration: 1.3,
  //         delay: 0.5,
  //       });
  //   }, comp);

  //   return () => ctx.revert();
  // }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#hero", "#para"], {
        xPercent: -100,
        duration: 1.2,
        delay: 0.5,
      });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    // <div className="relative" ref={comp}>
    //   <div
    //     id="intro-slider"
    //     className="h-screen p-10 bg-gray-50 absolute md:top-0 md:left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight place-items-center justify-center"
    //   >
    //     <h1 className=" text-4xl md:text-9xl" id="title-1">
    //       Software Engineer
    //     </h1>
    //     <h1 className=" text-4xl md:text-9xl" id="title-2">
    //       Designer
    //     </h1>
    //     <h1 className=" text-4xl md:text-9xl" id="title-3">
    //       Freelancer
    //     </h1>
    //   </div>

    <section
      className="mt-5 md:mt-10 scroll-smooth h-[750px]   md:h-[650px]  "
      // id="welcome"
    >
      {/* <img src={"/laptop.jpg"} className="md:hidden fixed -z-10" alt="" /> */}
      <video
        autoPlay
        loop
        className=" md:h-[710px] h-[750px]  w-full -z-10 fixed object-cover"
      >
        <source src={"/hero2.mp4"} type="video/mp4" />
      </video>
      <div className=" md:py-5  flex flex-col  ">
        <h1
          className="hero-heading mt-[320px] ml-3  md:mx-6 text-xl font-serif md:text-5xl    md:mt-10 font-semibold space-x-3  "
          id="hero"
        >
          Everything
          <br />
          is better with A&nbsp;
          <span className="text-primary">Technology</span>
        </h1>

        <p
          className="my-5 mt-[165px] text-gray-800 md:text-2xl font-mono font-semibold text-center"
          id="para"
        >
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
    </section>
    // </div>
  );
}
