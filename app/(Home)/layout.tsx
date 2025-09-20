"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/Home/SideBar";
import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [open, setOpen] = useState(false);
  return (
    <main className="max-w-[1536px] mx-auto font-suisse">
      {/* Blurred overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 backdrop-blur-lg md:hidden"
        />
      )}

      <Header setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
      {children}
      <Footer />
    </main>
  );
}
