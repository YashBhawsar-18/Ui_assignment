"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f4f6f9] pt-20 px-4">
      {/* Subscribe Card */}
      <div className="relative max-w-6xl mx-auto bg-[var(--primary)] rounded-lg px-6 py-12 text-white overflow-hidden">
        {/* Background graphics */}
        <Image
          src="/rings.svg"
          alt="Rings"
          width={160}
          height={160}
          className="absolute bottom-0 left-0"
        />
        <Image
          src="/trees.svg"
          alt="Trees"
          width={80}
          height={80}
          className="absolute top-0 right-0"
        />

        {/* Text + Form */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white max-w-md">
          Subscribe and get exclusive <br /> deals & offer
        </h2>

        <form className="max-w-2xl mt-6 w-full">
          <div className="flex bg-white rounded-full overflow-hidden shadow-md w-full">
            {/* Input with icon */}
            <div className="relative flex-1">
              <Image
                src="/emailicon.svg"
                alt="email"
                width={20}
                height={20}
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />
              <input
                type="email"
                placeholder="Enter your mail"
                className="w-full py-3 pl-12 pr-4 text-sm text-[var(--paragraph)] outline-none bg-transparent"
              />
            </div>

            {/* Button (same height, inside container) */}
            <button
              type="submit"
              className="bg-[var(--primary)] text-white text-sm font-semibold px-6 rounded-full m-2"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Footer Grid */}
      <div className="max-w-6xl mx-auto pt-16 pb-8 text-[var(--primary-b)]">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Desc */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Travor Logo"
                width={120}
                height={120}
              />
              {/* <span className="text-2xl font-bold text-[var(--secondary)]">
                Travor
              </span> */}
            </div>
            <p className="text-sm text-[var(--paragraph)] leading-relaxed">
              Book your trip in minute, get full <br /> control for much longer.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {/* Facebook */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <Image
                  src="/facebookicon.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </div>

              {/* Instagram (Highlighted) */}
              <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-md">
                <Image
                  src="/instagramicon.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </div>

              {/* Twitter */}
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <Image
                  src="/twittericon.svg"
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-[var(--paragraph)]">
            <div>
              <h4 className="font-semibold text-[var(--primary-b)] mb-3">
                Company
              </h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>Careers</li>
                <li>Logistic</li>
                <li>Privacy & Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--primary-b)] mb-3">
                Contact
              </h4>
              <ul className="space-y-2">
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affiliates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--primary-b)] mb-3">
                More
              </h4>
              <ul className="space-y-2">
                <li>Press Centre</li>
                <li>Our Blog</li>
                <li>Low fare tips</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t text-sm text-gray-400">
          <p>Copyright, Trabook 2022. All rights reserved.</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
