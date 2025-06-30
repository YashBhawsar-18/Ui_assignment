"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[var(--off-white)] px-6 md:px-16 py-20">
 
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <Image src="/bgplane.svg" 
          width={400}
          height={600}
          alt="planeimage"
          className="absolute top-30 left-130"
        />

        <div className="flex-1 space-y-6">
          <p className="text-[var(--secondary)] font-medium tracking-wide">
            Save Journey
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-b)] leading-tight">
            Make Your <span className="text-[var(--primary)]">Holiday</span>
            <br /> Memorable
          </h1>
          <p className="text-[var(--paragraph)] max-w-md">
            Travor is one of the most popular Travel agency for those who want
            to explore the wold and try to make adventure
          </p>
          <button className="bg-[var(--primary)] text-white px-6 py-3 rounded hover:bg-orange-600 transition">
            Plan Trip
          </button>
        </div>

   
        <div className="flex-1 -ml-6 relative">
          <Image
            src="/heroimg.png"
            alt="Traveler"
            width={400}
            height={400}
            className="mx-auto"
            priority
          />

     
          <div className="absolute top-26 left-104 bg-white px-2 py-2 rounded-lg shadow flex items-center gap-2 w-[160px]">
            <Image
              src="/google-maps.svg"
              alt="Explore"
              width={30}
              height={20}
            />

            <div>
              <p className="text-sm font-medium text-[var(--primary-b)]">
                Explore
              </p>
              <p className="text-xs leading-3 text-[var(--paragraph)] ">
                Every corner of the world with us
              </p>
            </div>
          </div>

     
          <div className="absolute bottom-10 -left-4 bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2">
            <Image src="/award.svg" alt="Award" width={24} height={24} />
            <span className="text-sm text-[var(--primary-b)]">
              Best Tour
              <br />
              Awards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
