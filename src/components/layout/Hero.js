import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="mt-5 md:mt-2   ">
      <div className=" md:py-5 flex ">
        <h1 className=" text-xl font-serif md:text-4xl  md:mt-10 font-semibold">
          Everything
          <br />
          is better
          <br />
          with a&nbsp;
          <span className="text-primary">Technology</span>
        </h1>
        <img
          src={"/c1.jpg"}
          alt={"coding"}
          className="rounded-3xl w-[180px]  object-fill md:w-[400px] hover:scale-105 duration-1000"
        />
      </div>
      <div>
        <p className="my-5 text-gray-500 text-sm">
          Technology is the missing piece that makes every day complete, a
          simple yet mordern joy of life 🥰🥰🥰
        </p>

        <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
          Learn more
          <Right />
        </button>
      </div>
    </section>
  );
}
