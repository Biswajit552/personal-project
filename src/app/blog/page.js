"use client";
import Skeleton from "@/components/skeleton/Skeleton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {
  const [menuItems, setMenuItems] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(true);
    }, 2000);
  });
  useEffect(() => {
    fetch("/api/create").then((res) => {
      res.json().then((blog) => {
        setMenuItems(blog);
      });
      // setLoadingState(true);
    });
  }, []);
  console.log(menuItems);

  return (
    <>
      <div className="text-center mt-14 font-serif font-medium text-2xl">
        <Link
          href={"/blog/create"}
          className="bg-primary text-white px-8 py-2 rounded-2xl"
        >
          Create a Blog
        </Link>
      </div>

      {!loadingState ? (
        <>
          {menuItems?.map((item) => (
            <div className="gap-4 flex mt-8 max-w-4xl mx-auto" key={item}>
              <Skeleton width="300px" height="200px" />
              <div className="flex flex-col gap-3">
                <Skeleton width="250px" height="35px" />
                <Skeleton width="200px" height="25px" />
                <Skeleton width="300px" height="110px" variant="paragraph" />
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div>
            {menuItems?.length > 0 &&
              menuItems.map((item) => (
                <Link href={"/blog/" + item._id} key={item.id}>
                  <div className="flex w-full mt-8 space-x-4 mb-5 max-w-4xl mx-auto ">
                    {/*left*/}
                    <div className="w-[35%] h-[200px] flex justify-center items-center">
                      <img
                        src={item.image}
                        alt="blog image"
                        className=" h-full  w-full object-cover hover:scale-105 duration-1000"
                      />
                    </div>
                    {/*right*/}
                    <div className="flex flex-col w-[65%]">
                      <h1 className="text-xl font-semibold md:mb-2 mb-1 md:text-2xl hover:scale-x-105 duration-1000">
                        {item.title}
                      </h1>
                      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                        {/* <p>@{post.username}</p> */}
                        <div className="flex  md:flex-row space-x-2">
                          <p>
                            {new Date(item.updatedAt).toString().slice(0, 15)}
                          </p>
                          <p>
                            {new Date(item.updatedAt).toString().slice(16, 24)}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm md:text-lg hover:scale-y-110 duration-1000">
                        {item.description.slice(0, 200) + " ...Read more"}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </>
      )}

      {/* <div>
        {loadingState ? (
          <div className="mt-8">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
          </div>
        ) : (
          <div className="gap-4 flex mt-8">
            <Skeleton width="300px" height="200px" />
            <div className="flex flex-col gap-3">
              <Skeleton width="250px" height="35px" />
              <Skeleton width="200px" height="25px" />
              <Skeleton width="300px" height="110px" variant="paragraph" />
            </div>
          </div>
        )}
      </div> */}
    </>
  );
}
