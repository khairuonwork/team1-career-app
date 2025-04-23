import Image from "next/image";
import Link from "next/link";

interface cardType {
    imgUrl : string;
    title : string;
    description : string;
}

export const LayananSection = () => {
    const dataCard : cardType[] = [
        {
            imgUrl : 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
            title : 'Rekomendasi Pekerjaan',
            description : 'Career.ly memberikan saran pekerjaan yang sesuai dengan minat, kepribadian, dan potensi pengguna berdasarkan hasil kuesioner dan analisis AI.'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
            title : 'AI CV Maker',
            description : 'Pengguna dapat membuat CV profesional secara otomatis menggunakan teknologi AI yang menyusun informasi secara rapi dan menarik.'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
            title : 'Pelatihan',
            description : 'Career.ly menyediakan akses ke berbagai bootcamp dan pelatihan berbasis keterampilan agar pengguna bisa upgrade skill sesuai bidang karier yang dituju.'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
            title : 'AI Job Matching',
            description : 'Cukup unggah CV-mu, dan Career.ly akan menganalisis isinya untuk mencocokkan kamu dengan lowongan kerja yang paling relevan'
        },
        {
            imgUrl : 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
            title : 'Komunitas',
            description : 'Bergabunglah dalam komunitas Career.ly untuk berbagi pengalaman, tips karier, dan membangun koneksi dengan sesama pencari kerja maupun profesional.'
        },
    ]
    return(
        <section className="bg-[#E7F1F7]">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h3 className="font-semibold text-2xl md:text-3xl text-center">
                Layanan Career.ly
                </h3>

                <div className="space-y-6 mt-16">
                        {/* Baris pertama: 3 card justify-between */}
                        <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-4">
                            {dataCard.slice(0, 3).map((card, i) => (
                                <Card key={i} data={card}/>
                            ))}
                        </div>

                        {/* Baris kedua: 2 card di tengah */}
                        <div className="flex justify-around flex-wrap md:mt-10 gap-4">
                            {dataCard.slice(3, 5).map((card, i) => (
                                <Card key={i} data={card}/>
                            ))}
                        </div>
                    </div>
            </div>
        </section>
    )
};

const Card = ({
    data
}:{
    data : cardType
}) => {
    return (
        <Link href="#"  className="border-2 border-black rounded-2xl bg-white max-w-80 overflow-hidden">
            <Image
                src={data.imgUrl}
                alt={data.title}
                width={200}
                height={200}
                className="w-full"
            />
            <div className="p-4 border-t-2">
                <h4 className="font-semibold text-xl">{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </Link>
    )
}
