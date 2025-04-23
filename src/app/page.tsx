import { Footer } from "@/components/common";
import { BeritaSection, HeroSection, LayananSection, TestimoniSection } from "@/components/home";
import Navbar from "@/components/common/navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="">
      <HeroSection/>
      <LayananSection/>
      <div className="relative">
        <TestimoniSection/>
        <BeritaSection/>
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
              <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
              <div className="absolute top-[-150px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[300px] right-[100px] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
          </div>
      </div>
      <Footer/>
    </main>
    </>
  );
}
