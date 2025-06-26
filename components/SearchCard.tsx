'use client';
import Image from 'next/image';
import React from 'react';

const SearchCard = () => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto -mt-16 px-4">
      <div className="bg-white shadow-2xl rounded-lg p-4 mt-8 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        {/* Destination */}
        <div className="flex-1">
          <label className="flex items-center gap-2 text-sm font-semibold text-[var(--primary-b)] mb-1">
            Destination
            <Image src="/dropdownarrow.png" alt="arrow" width={12} height={12} />
          </label>
          <input
            type="text"
            placeholder="Search Location"
            className="w-full bg-transparent border-none outline-none text-sm text-[var(--paragraph)]"
          />
        </div>

        {/* Date */}
        <div className="flex-1">
          <label className="flex items-center gap-2 text-sm font-semibold text-[var(--primary-b)] mb-1">
            Date
            <Image src="/dropdownarrow.png" alt="arrow" width={12} height={12} />
          </label>
          <input
            type="text"
            placeholder="Type Date"
            className="w-full bg-transparent border-none outline-none text-sm text-[var(--paragraph)]"
          />
        </div>

        {/* Guest */}
        <div className="flex-1">
          <label className="flex items-center gap-2 text-sm font-semibold text-[var(--primary-b)] mb-1">
            Guest
            <Image src="/dropdownarrow.png" alt="arrow" width={12} height={12} />
          </label>
          <input
            type="text"
            placeholder="Number of guest"
            className="w-full bg-transparent border-none outline-none text-sm text-[var(--paragraph)]"
          />
        </div>

        {/* Explore Now Button */}
        <div className="mt-2 md:mt-0">
          <button className="bg-[var(--primary)] text-white px-6 py-3 rounded hover:bg-orange-600 transition">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
