import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PopularDestination from "@/components/PopularDestination";
import SearchCard from "@/components/SearchCard";
import TestimonialSection from "@/components/TestimonialSection";
import ThingsToDo from "@/components/ThingsToDo";
import Footer from "@/public/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full h-full overflow-y-auto overflow-x-none bg-white m-0 p-0 box-border">
        <Navbar/>
        <HeroSection/>
        <SearchCard/>
        <ThingsToDo/>
        <PopularDestination/>
        <TestimonialSection/>
        <Footer/>
    </div>
    </>
  );
}
