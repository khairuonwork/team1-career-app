'use client'
import { StepIndicator } from "@/components/cvmaker/step-indicator";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Step1Page = () => {
    const dataCard = [
        {
          imgUrl: '/profesionalcv.svg',
          title: 'Profesional',
          description : 'Digunakan oleh 50.000+ pengguna'
        },
        {
          imgUrl: '/trendycv.svg',
          title: 'Trendy',
          description : 'Digunakan oleh 50.000+ pengguna'
        },
        {
          imgUrl: '/atscv.svg',
          title: 'ATS-friendly',
          description : 'Digunakan oleh 50.000+ pengguna'
        },
      ];
    return (
        <section className="md:h-screen flex justify-center flex-col bg-[#E7F1F7]">
            <StepIndicator/>
            <div className="mt-16 max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-3 gap-16">
                {
                    dataCard.map((card, i)=>(
                        <CardStyleCv key={i} title={card.title} imgUrl={card.imgUrl} description={card.description}/>
                    ))
                }
            </div>
        </section>
    )
}

const CardStyleCv = ({
    imgUrl,
    title,
    description
}:{
    title : string;
    description : string;
    imgUrl : string;
}) => {
    const router = useRouter()
    return(
        <button onClick={()=>router.push('/cvmaker/step2')} className="flex flex-col cursor-pointer group hover:scale-105 duration-300">
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="text-lg text-[#6086A6] mb-4 mt-1">{description}</p>
            <div className="relative">
                <Image
                    src={imgUrl}
                    width={400}
                    height={600}
                    alt={title}
                    className="w-full aspect-[9/11]"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-200 flex justify-center items-center">
                    <div className="bg-[#3785C6] px-4 py-2 rounded-2xl text-xl font-semibold text-white">Gunakan</div>
                </div>
            </div>
        </button>
    )
}

export default Step1Page;