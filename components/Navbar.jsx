import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full flex items-center justify-between px-48 py-4 bg-[var(--off-white)] shadow-sm">
        {/* ----Logo---- */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/mascott.png" alt="Travor Logo" width={30} height={30} />
            <span className="text-2xl font-bold text-[var(--secondary)]">
              Travor
            </span>
          </div>
        </Link>

        {/* ------Nav Links------ */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-[var(--color-b-1)]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>

        {/* Login Button */}
        <Link href="/login">
          <button className="px-4 py-2 border border-[var(--primary-o)] text-[var(--primary-o)] rounded hover:bg-[var(--primary-o)] hover:text-white transition">
            Log In
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
