import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" justify-start
      flex ml-30 mx-auto">

        <div className="flex flex-row ">
          <div className="flex flex-row gap-2">
            <Image src="/logoVector.png" alt="vector" width={80} height={100} />
            <Image src="/FASHION.png" alt="Fashionlogo" width={200} height={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
