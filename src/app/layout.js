import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/components/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biswajit Swain",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" pt-5 mx-auto  ">
          <AppProvider>
            <Header />
            <Toaster />
            {children}
            <footer className="border-t p-8 text-center  mt-12">
              &copy; 2024 All rights reserved
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
