'use client'

import { useMotionValue, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

interface CardType {
    imgUrl : string;
    name : string;
    comment : string;
    rating : number;
}

export const TestimoniSection = () => {
    const dataTestimoni: CardType[] = [
        {
          imgUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
          name: 'Rino Andrian',
          comment: '“Awalnya aku bingung banget mau kerja di bidang apa. Tapi setelah ngisi kuesioner di Career.ly dan baca hasil analisisnya, aku jadi sadar ternyata aku punya potensi besar di dunia edukasi. Sekarang aku lagi daftar ke program volunteer sebagai mentor!”.',
          rating: 5
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
          name: 'Dina Maharani',
          comment: '“Career.ly sangat membantu aku menemukan karier yang sesuai dengan passion-ku. Hasil AI-nya detail dan insightful banget!”.',
          rating: 4
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
          name: 'Andi Prasetyo',
          comment: '“Fitur AI CV Maker-nya keren banget! Dalam hitungan menit, aku udah punya CV profesional yang bikin HR tertarik.”',
          rating: 5
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
          name: 'Sarah Oktaviani',
          comment: '“Aku suka banget sama komunitasnya! Banyak diskusi menarik dan bisa dapet banyak insight soal dunia kerja.”',
          rating: 4
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1659353219150-377222056797?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg',
          name: 'Fajar Nugraha',
          comment: '“Sangat direkomendasikan untuk fresh graduate! Career.ly bantu banget buat tentuin langkah awal karierku.”',
          rating: 5
        }
      ];
      


    const DRAG_BUFFER = 50

    const setDragging = useState(false)[1];

    const [imgIdx, setImgIdx] = useState(0)
    const dragX = useMotionValue(0)
    const dragEnd = () => {
        setDragging(true)
        const x = dragX.get()
        if (x <= -DRAG_BUFFER && imgIdx < dataTestimoni.length - 1) {
            setImgIdx(prev => prev + 1)
        } else if (x >= DRAG_BUFFER && imgIdx > 0) {
            setImgIdx(prev => prev - 1)
        }
    }
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h3 className="font-semibold text-2xl md:text-3xl text-center">
                    Testimoni Career.ly
                </h3>

                <div className="overflow-hidden rounded-2xl max-w-[55rem] mt-16 mx-auto">
                    <motion.div 
                        className="flex cursor-grab active:cursor-grabbing" 
                        dragConstraints={{ left : 0, right : 0 }} 
                        drag="x"
                        onDragStart={()=>setDragging(true)}
                        onDragEnd={dragEnd}
                        style={{ x : dragX }}
                        animate={{ translateX : `-${imgIdx*100}%` }}>
                            {dataTestimoni.map((card, idx) => (
                                <div key={idx} className="shrink-0 w-full relative max-h-fit min-h-[23rem] bg-gray-300 p-6 flex flex-col justify-around">
                                    <Image
                                        src={card.imgUrl}
                                        alt={card.name}
                                        width={2000}
                                        height={2000}
                                        className="w-32 aspect-square rounded-full mx-auto object-cover object-center"
                                    />
                                    <h4 className="text-center font-semibold text-xl">{card.name}</h4>
                                    <p className="text-center max-w-[40rem] mx-auto">{card.comment}</p>
                                    <div className="flex justify-center gap-1 mt-2 text-yellow-500 text-2xl">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <AiFillStar key={i} className={i < card.rating ? 'opacity-100' : 'opacity-30'} />
                                        ))}
                                    </div>
                                    <div className="absolute inset-0"></div>
                                </div>
                            ))}
                    </motion.div>
                </div>
                <div className="flex gap-x-2 w-fit mx-auto mt-6">
                    {dataTestimoni.map((data, idx) => (
                        <button 
                            key={idx} 
                            onClick={()=>setImgIdx(idx)} 
                            className={`${imgIdx === idx ? "bg-gray-700 w-[50%]" : "bg-gray-400 w-4"} h-2 rounded-full duration-250`}/>
                    ))}
                </div>
            </div>
        </section>
    )
};
