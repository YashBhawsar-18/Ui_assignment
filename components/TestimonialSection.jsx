"use client";

import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="bg-[#f4f6f9] py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Title & Arrows */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-b)] leading-tight">
            What people say <br />
            <span className="text-[var(--primary)]">about us.</span>
          </h2>
          <p className="text-[var(--paragraph)] max-w-md">
            Our Clients send us bunch of smilies with our services and we love
            them.
          </p>

          {/* Arrows */}
          <div className="flex items-center gap-4 pt-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
              <Image
                src="/prevarrow.svg"
                alt="Previous"
                width={16}
                height={16}
              />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)] text-white">
              <Image src="/nextarrow.svg" alt="Next" width={16} height={16} />
            </button>
          </div>
        </div>

        {/* Right: Testimonial Card */}
        <div className="md:w-1/2 relative">
          {/* User Image */}
          <div className="absolute -top-6 left-6 z-10">
            <Image
              src="/reviewerimage.png"
              alt="Reviewer"
              width={48}
              height={48}
              className="rounded-full border-4 border-white"
            />
          </div>

          {/* Review Card */}
          <div className="bg-white shadow-md rounded-lg p-6 pl-20 relative z-0">
            <p className="text-[var(--primary-b)] text-sm leading-relaxed mb-4">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h4 className="font-semibold text-[var(--primary-b)]">
              Yash Bhawsar
            </h4>
            <p className="text-sm text-[var(--paragraph)]">Khargone, India</p>
          </div>

          {/* Background shadow card */}
          <div className="absolute top-6 left-6 w-full h-full bg-white rounded-lg opacity-30 blur-sm z-[-1] shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
