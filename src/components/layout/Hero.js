import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="mt-5 md:mt-2   ">
      <div className=" md:py-5 flex ">
        <h1 className="mt-2 md:mx-6 text-xl font-serif md:text-5xl   md:mt-10 font-semibold space-x-3  ">
          Everything
          <br />
          is better with A&nbsp;
          <span className="text-primary">Technology</span>
        </h1>
        <img
          src={"/c1.jpg"}
          alt={"coding"}
          className="rounded-3xl w-[180px]  object-fill md:w-[400px] hover:scale-105 duration-1000"
        />
      </div>
      <div className="my-5 text-gray-700 md:text-2xl font-mono font-semibold text-center ">
        <p>
          <span className="text-primary md:text-3xl font-serif">
            Technology
          </span>
          is the missing piece that makes every day complete, simple yet mordern
          joy of life 🥰🥰🥰
        </p>

        <button className="flex underline mx-auto border-0 gap-2 py-2 text-gray-600 font-semibold">
          Learn more
          <Right />
        </button>
      </div>
    </section>
  );
}
