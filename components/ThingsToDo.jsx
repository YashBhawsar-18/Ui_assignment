"use client";
import React from "react";
import Image from "next/image";

const ThingsToDo = () => {
  return (
    <section className="bg-[#f4f6f9] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center relative">
        <Image 
        src="/bgdoubleplane.svg"
        height={130}
        width={130}
        alt="Double Plane Background"
        className="absolute top-6 left-240"
        />
       
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-b)] mb-4">
          Things you need <span className="text-[var(--primary)]">to do</span>
        </h2>
        <p className="text-[var(--paragraph)] max-w-2xl mx-auto mb-12">
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 
          <div className="relative bg-white p-6 rounded shadow-md hover:shadow-lg transition">
            <Image
              src="/signup.svg"
              alt="Sign Up"
              width={32}
              height={32}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-[var(--primary-b)] mb-2">
              Sign Up
            </h3>
            <p className="text-sm text-[var(--paragraph)]">
              Completes all the work associated with planning and processing
            </p>
            <Image
              src="/signupcurve.svg"
              alt=""
              width={150}
              height={50}
              className="absolute bottom-4 right-4 opacity-10 pointer-events-none"
            />
          </div>

        
          <div className="relative bg-white p-6 rounded shadow-md hover:shadow-lg transition">
            <Image
              src="/worthofmoney.svg"
              alt="Worth of Money"
              width={32}
              height={32}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-[var(--primary-b)] mb-2">
              Worth of Money
            </h3>
            <p className="text-sm text-[var(--paragraph)]">
              After successful access then book from exclusive deals & pricing
            </p>
            <Image
              src="/worthofmoneycurve.svg"
              alt=""
              width={150}
              height={50}
              className="absolute bottom-4 right-4 opacity-10 pointer-events-none"
            />
          </div>

     
          <div className="relative bg-white p-6 rounded shadow-md hover:shadow-lg transition">
            <Image
              src="/exciting.svg"
              alt="Exciting Travel"
              width={32}
              height={32}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-[var(--primary-b)] mb-2">
              Exciting Travel
            </h3>
            <p className="text-sm text-[var(--paragraph)]">
              Start and explore a wide range of exciting travel experience.
            </p>
            <Image
              src="/excitingcurve.svg"
              alt="excitingcurve"
              width={150}
              height={50}
              className="absolute bottom-4 right-4 opacity-10 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
