import Image from "next/image";
import Link from "next/link";

interface cardType {
    imgUrl : string;
    title : string;
    station : string;
    timestamp : string;
}

export const BeritaSection = () => {
    const dataCard: cardType[] = [
        {
          imgUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
          title: 'Susahnya Nyari Kerja di RI: Saingan Jutaan, Lowongan Cuma Ribuan',
          station: 'CNN Indonesia',
          timestamp: '5 jam lalu',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
          title: 'Tips Lolos Interview Kerja dari HR Profesional',
          station: 'Kompas TV',
          timestamp: '1 hari lalu',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
          title: 'Fenomena Quiet Quitting di Kalangan Milenial',
          station: 'Detik Finance',
          timestamp: '2 hari lalu',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
          title: 'Kenali Profesi Baru yang Lahir Karena AI',
          station: 'CNBC Indonesia',
          timestamp: '3 hari lalu',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
          title: 'LinkedIn Rilis Daftar 10 Skill yang Paling Dicari di 2025',
          station: 'Tech In Asia',
          timestamp: '5 hari lalu',
        },
      ];
      
    return (
        <section className="">
            <div className="px-4 py-10">
                <h3 className="font-semibold text-2xl md:text-3xl max-w-6xl mx-auto mb-2">
                Berita Terkini
                </h3>

                <div className="space-y-6 mt-4 flex overflow-auto no-scrollbar">
                    <div className="w-max flex gap-6 pl-[calc((100vw-76rem)/2)]">
                        {dataCard.map((card, i)=>(
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
        <Link href="#"  className="border-2 border-black rounded-2xl bg-white w-[26rem] overflow-hidden">
            <Image
                src={data.imgUrl}
                alt={data.title}
                width={200}
                height={200}
                className="w-full"
            />
            <div className="p-4 border-t-2">
                <h4 className="font-semibold text-xl">{data.title}</h4>
                <div className="flex justify-between">
                    <small>{data.station}</small>
                    <small>{data.timestamp}</small>
                </div>
            </div>
        </Link>
    )
}