import Navbar from "@/components/common/navbar";
import Link from "next/link";

const CvMakerPage = () => {
  return (
    <>
      <Navbar />
      <section className="h-[80vh] flex justify-center items-center gap-10 flex-col px-4">
        <h2 className="text-2xl md:text-5xl font-bold text-[#3785C6] text-center max-w-4xl">
          CV yang memikat, rekrutmen pun terpikat
        </h2>
        <p className="text-center text-lg md:text-xl max-w-3xl text-wrap">
          Dengan template lengkap dan sentuhan kustomisasi AI, buat CV-mu makin
          standout dan siap lolos seleksi!
        </p>
        <Link
          href={"/cvmaker/step1"}
          className="text-xl md:text-2xl text-white font-semibold mx-auto bg-[#3785C6] px-6 py-4 rounded-2xl mt-3 md:mt-0 flex"
        >
          Buat Sekarang
        </Link>
      </section>
    </>
  );
};

export default CvMakerPage;
