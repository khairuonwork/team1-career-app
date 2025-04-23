import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col gap-10 max-w-6xl mx-auto px-4 md:px-0 z-10 relative py-10">
        <div className="bg-[#1E374C] p-4 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] rounded-2xl gap-10 text-white">
          <div className="flex flex-col justify-between md:order-1 order-2 mt-3 md:mt-0">
            <h3 className="font-medium text-2xl md:text-3xl">
              Ingin mengetahui skill minat bakal serta pekerjaan yang cocok?
            </h3>
            <Link
              href={"/kuisioner"}
              className="text-lg bg-[#6D9BC3] px-6 py-4 rounded-2xl w-fit mt-3 md:mt-0"
            >
              Ikuti tes sekarang!
            </Link>
          </div>
          <Image
            alt="hero1"
            src={"/hero1.png"}
            className="rounded-2xl h-48 md:order-2 order-1"
            width={500}
            height={200}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 rounded-2xl relative">
          <div className="flex flex-col justify-between md:order-1 order-2 mt-3 md:mt-0">
            <h3 className="font-medium text-2xl md:text-3xl text-[#335C80]">
              Temukan Pekerjaan yang Cocok Sesuai dengan Minat Bakat mu bersama
              Career.ly
            </h3>
            <p className="text-justify">
              Setiap orang punya potensi unik tetapi nggak semua tahu ke mana
              arah terbaik untuk mengembangkannya. Di Career.ly, kami membantumu
              mengenali kekuatan tersembunyi melalui kuesioner mendalam yang
              dirancang khusus untuk menggali minat, gaya kerja, hingga
              pengalaman personalmu. Jawabanmu akan dianalisis oleh sistem
              berbasis AI untuk merekomendasikan bidang kerja dan karier yang
              paling sesuai dengan dirimu. Yuk, mulai perjalanan kariermu dari
              hal yang paling penting: mengenal diri sendiri.
            </p>
            <Link
              href={"/pekerjaan"}
              className="text-2xl text-white font-semibold mx-auto bg-[#6D9BC3] px-6 py-4 rounded-2xl w-[90%] mt-3 md:mt-0 flex justify-center"
            >
              Eksplor Lowongan Pekerjaan
            </Link>
          </div>
          <Image
            alt="hero2"
            src={"/hero2.png"}
            className="rounded-2xl h-96 md:order-2 order-1"
            width={500}
            height={600}
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[80px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-[100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
