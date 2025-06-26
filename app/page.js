import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SearchCard from "@/components/SearchCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full h-full overflow-y-auto overflow-x-none bg-white m-0 p-0 box-border">
        <Navbar/>
        <HeroSection/>
        <SearchCard/>
    </div>
    </>
  );
}
