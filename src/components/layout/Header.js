"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import Bars2 from "../icons/Bars2";
import { signOut, useSession } from "next-auth/react";

function AuthLinks({ status, userName }) {
  if (status === "authenticated") {
    return (
      <>
        <Link href={"/profile"} className="whitespace-nowrap">
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Logout
        </button>
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <>
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Register
        </Link>
      </>
    );
  }
}
export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  // const {cartProducts} = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }
  return (
    <header>
      <div className="flex items-center md:hidden justify-between">
        <Link
          href={"/"}
          className="text-primary font-semibold text-xl  font-serif"
        >
          <span>
            <b className="font-mono">&lt;/&gt;</b>
            BISWAJIT
          </span>
        </Link>
        <button
          className="p-2 border w-14 fixed top-3 right-4"
          onClick={() => setMobileNavOpen((prev) => !prev)}
        >
          <Bars2 />
        </button>
      </div>

      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center z-0 fixed top-12  right-0"
        >
          <Link href="/">Home</Link>
          <Link href="project">Project</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}

      <div className="hidden md:flex items-center justify-between  ">
        <Link
          className="text-primary font-semibold text-xl  font-serif"
          href="/"
        >
          <span>
            <b className="font-mono">&lt;/&gt;</b>
            BISWAJIT
          </span>
        </Link>

        <nav className="flex gap-8 items-center font-semibold ">
          <Link href="/" className="block overflow-hidden ">
            <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
              <span className="flex h-[20px] items-center">Home</span>
              <span className="flex h-[20px] items-center text-black">
                Home
              </span>
            </div>
          </Link>
          <Link href="/project" className="block overflow-hidden ">
            <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
              <span className="flex h-[20px] items-center"> Project</span>
              <span className="flex h-[20px] items-center text-black">
                Project
              </span>
            </div>
          </Link>
          <Link href="/blog" className="block overflow-hidden ">
            <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
              <span className="flex h-[20px] items-center">Blog</span>
              <span className="flex h-[20px] items-center text-black">
                Blog
              </span>
            </div>
          </Link>
          <Link href="/#about" className="block overflow-hidden ">
            <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
              <span className="flex h-[20px] items-center">About</span>
              <span className="flex h-[20px] items-center text-black">
                About
              </span>
            </div>
          </Link>
          <Link href="/#contact" className="block overflow-hidden ">
            <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
              <span className="flex h-[20px] items-center">Contact</span>
              <span className="flex h-[20px] items-center text-black">
                Contact
              </span>
            </div>
          </Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <AuthLinks status={status} userName={userName} />
        </nav>
      </div>
    </header>
  );
}
{
  /* <nav className="flex gap-8 items-center font-semibold ">
        <Link href="/">Home</Link>
        <Link href="project">Project's</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
        <Link
          className="bg-primary rounded-full text-white px-8 py-2"
          href="/login"
        >
          login
        </Link>
      </nav> */
}
