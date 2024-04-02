"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";

export default function BlogId() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    if (id) {
      fetch("/api/create?_id=" + id).then((res) => {
        res.json().then((orderData) => {
          setOrder(orderData);
        });
      });
    }
  }, []);
  return (
    <section className="mx-auto text-center mt-5 flex flex-col p-5 scroll-smooth ">
      <h1 className="text-2xl font-serif mb-2 ">{order?.title}</h1>
      <div className="flex  space-x-2 font-mono justify-end  ">
        <p>{new Date(order.updatedAt).toString().slice(0, 15)}</p>
        <p>{new Date(order.updatedAt).toString().slice(16, 24)}</p>
      </div>
      <div className="font-serif text-xl">
        <img
          src={order?.image}
          alt=""
          className="w-full h-[500px] object-cover p-2"
        />
        <p className="mt-5 text-gray-600">
          <span className="font-bold font-mono my-2 text-gray-800">
            {" "}
            Note:-{" "}
          </span>
          {order?.description}
        </p>
      </div>
      <Link
        href={"/blog"}
        className="bg-primary rounded-full text-white fixed p-2 text-4xl bottom-10 right-10"
      >
        <TiArrowBack />
      </Link>
    </section>
  );
}
