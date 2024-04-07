"use client";
import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
export const cartContext = createContext({});
import toast from "react-hot-toast";

export function AppProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
