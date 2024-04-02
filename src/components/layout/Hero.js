import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero md:mt-4 flex ">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better
          <br />
          with a&nbsp;
          <span className="text-primary">Technology</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Technology is the missing piece that makes every day complete, a
          simple yet mordern joy of life 🥰🥰🥰
        </p>

        <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
          Learn more
          <Right />
        </button>
      </div>
      <div>
        <img
          src={"/c1.jpg"}
          alt={"coding"}
          className="rounded-3xl w-[680px] hover:scale-105 duration-1000"
        />
      </div>
    </section>
  );
}
