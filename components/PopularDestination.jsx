"use client";

import Image from "next/image";

const PopularDestination = () => {
  return (
    <section className="bg-[#f4f6f9] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[var(--secondary)] font-medium">Most Attractive</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-b)]">
            Popular <span className="text-[var(--primary-b)]">Destination</span>
          </h2>
        </div>

     
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-[var(--secondary)] text-white px-4 py-2 rounded">
            Beach
          </button>
          <button className="text-[var(--primary-b)] px-4 py-2 rounded hover:bg-white">
            Waterfall
          </button>
          <button className="text-[var(--primary-b)] px-4 py-2 rounded hover:bg-white">
            Mountains
          </button>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              
          <div className="bg-white rounded shadow hover:shadow-md transition overflow-hidden">
            <Image
              src="/madrid.png"
              alt="Madrid"
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center font-semibold text-[var(--primary-b)]">
                <span>Madrid</span>
                <span className="flex items-center gap-1 text-sm text-[var(--primary-b)]">
                  <Image src="/star.svg" alt="star" width={14} height={14} />
                  4.8
                </span>
              </div>
              <div className="text-sm text-[var(--paragraph)] flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <Image
                    src="/location.svg"
                    alt="location"
                    width={14}
                    height={14}
                  />
                  Spain
                </span>
                <span className="line-through text-gray-400">$950</span>
                <span className="text-[var(--primary)] font-semibold">
                  $850
                </span>
              </div>
            </div>
          </div>

   
          <div className="bg-white rounded shadow hover:shadow-md transition overflow-hidden">
            <Image
              src="/logasea.png"
              alt="Loga Sea"
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center font-semibold text-[var(--primary-b)]">
                <span>Loga Sea</span>
                <span className="flex items-center gap-1 text-sm text-[var(--primary-b)]">
                  <Image src="/star.svg" alt="star" width={14} height={14} />
                  4.8
                </span>
              </div>
              <div className="text-sm text-[var(--paragraph)] flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <Image
                    src="/location.svg"
                    alt="location"
                    width={14}
                    height={14}
                  />
                  German
                </span>
                <span className="line-through text-gray-400">$950</span>
                <span className="text-[var(--primary)] font-semibold">
                  $850
                </span>
              </div>
            </div>
          </div>

  
          <div className="bg-white rounded shadow hover:shadow-md transition overflow-hidden">
            <Image
              src="/desert.png"
              alt="Desert"
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center font-semibold text-[var(--primary-b)]">
                <span>Desert</span>
                <span className="flex items-center gap-1 text-sm text-[var(--primary-b)]">
                  <Image src="/star.svg" alt="star" width={14} height={14} />
                  4.8
                </span>
              </div>
              <div className="text-sm text-[var(--paragraph)] flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <Image
                    src="/location.svg"
                    alt="location"
                    width={14}
                    height={14}
                  />
                  UK
                </span>
                <span className="line-through text-gray-400">$950</span>
                <span className="text-[var(--primary)] font-semibold">
                  $850
                </span>
              </div>
            </div>
          </div>

   
          <div className="bg-white rounded shadow hover:shadow-md transition overflow-hidden">
            <Image
              src="/falling.png"
              alt="Falling"
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center font-semibold text-[var(--primary-b)]">
                <span>Falling</span>
                <span className="flex items-center gap-1 text-sm text-[var(--primary-b)]">
                  <Image src="/star.svg" alt="star" width={14} height={14} />
                  4.8
                </span>
              </div>
              <div className="text-sm text-[var(--paragraph)] flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <Image
                    src="/location.svg"
                    alt="location"
                    width={14}
                    height={14}
                  />
                  India
                </span>
                <span className="line-through text-gray-400">$950</span>
                <span className="text-[var(--primary)] font-semibold">
                  $850
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
