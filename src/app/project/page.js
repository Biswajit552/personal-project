"use client";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import ImageSlider from "@/components/layout/ImageSlider";

export default function Project() {
  // SwiperCore.use([Navigation]);

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/api/project").then((res) => {
      res.json().then((web) => {
        setMenuItems(web);
      });
      // setLoadingState(true);
    });
  }, []);
  // console.log(menuItems);
  return (
    <>
      {" "}
      <div className="text-center mt-10 font-serif font-medium text-2xl mb-5 ">
        <Link
          href={"/project/upload"}
          className="bg-primary text-white px-8 py-2 rounded-2xl"
        >
          Upload Website Details
        </Link>
      </div>
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
    </>
  );
}
