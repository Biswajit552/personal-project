import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biswajit Swain",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-4xl p-4  mx-auto">
          <Header />
          <Toaster />
          {children}
          <footer className="border-t p-8 text-center  text-gray-600 mt-12">
            &copy; 2024 All rights reserved
          </footer>
        </main>
      </body>
    </html>
  );
}
