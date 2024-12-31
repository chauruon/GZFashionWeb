"use client";
import { NavBar } from "@/component/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <main className="overflow-hidden">
        <NavBar/>
        <div className="bg-red-700 mt-custom">
          <h1 className="flex h-full justify-center items-center">Home</h1>
        </div>
      </main>
    </div>
  );
}
