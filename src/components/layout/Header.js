"use client";

import Link from "next/link";
import { useContext, useState } from "react";

export default function Header() {
  return (
    <header className="flex  items-center justify-between">
      <Link className="text-primary font-semibold text-xl  font-serif" href="/">
        <span>
          <b className="font-mono">&lt;/&gt;</b>
          BISWAJIT
        </span>
      </Link>
      {/* <nav className="flex gap-8 items-center font-semibold ">
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
      </nav> */}
      <nav className="flex gap-8 items-center font-semibold ">
        <Link href="/" className="block overflow-hidden ">
          <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
            <span className="flex h-[20px] items-center">Home</span>
            <span className="flex h-[20px] items-center text-black">Home</span>
          </div>
        </Link>
        <Link href="/project" className="block overflow-hidden ">
          <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
            <span className="flex h-[20px] items-center"> Project&lsquo;s</span>
            <span className="flex h-[20px] items-center text-black">
              Project&lsquo;s
            </span>
          </div>
        </Link>
        <Link href="/blog" className="block overflow-hidden ">
          <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
            <span className="flex h-[20px] items-center">Blog</span>
            <span className="flex h-[20px] items-center text-black">Blog</span>
          </div>
        </Link>
        <Link href="/#about" className="block overflow-hidden ">
          <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
            <span className="flex h-[20px] items-center">About</span>
            <span className="flex h-[20px] items-center text-black">About</span>
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
        <Link
          className="bg-primary rounded-full text-white px-8 py-2"
          href="/login"
        >
          login
        </Link>
      </nav>
    </header>
  );
}
