import Image from "next/image";
import Link from "next/link";
import { IoCallOutline, IoLogoInstagram } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
    return(
        <footer className="bg-[#335C80] text-white">
            <div className="max-w-6xl mx-auto px-4 flex py-10 justify-between gap-4 flex-wrap">
                <div className="flex flex-col gap-4">
                    <Image
                        src={'/logo.svg'}
                        width={300}
                        height={300}
                        alt="logo"
                        className="w-40"
                    />
                    <Link href={'#'} className="flex gap-2 items-center">
                        <div className="w-8 aspect-square">

                        <IoCallOutline className="w-full h-full"/>
                        </div>
                        <span>089277222191</span>
                    </Link>
                    <Link href={'#'} className="flex gap-2 items-center">
                        <div className="w-8 aspect-square">

                        <MdOutlineEmail className="w-full h-full"/>
                        </div>
                        <span>Career.ly01@gmail.com</span>
                    </Link>
                    <Link href={'#'} className="flex gap-2 items-center">
                        <div className="w-8 aspect-square">

                        <IoLogoInstagram className="w-full h-full"/>
                        </div>
                        <span>Careerly_official</span>
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-semibold text-xl mb-2">Layanan</h4>
                    <Link href={'#'}>Rekomendasi Pekerjaan</Link>
                    <Link href={'#'}>AI Job Matching</Link>
                    <Link href={'#'}>AI CV Maker</Link>
                    <Link href={'#'}>Program Pelatihan</Link>
                    <Link href={'#'}>Komunitas</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-semibold text-xl mb-2">Bantuan</h4>
                    <Link href={'#'}>FAQ (Pertanyaan Umum)</Link>
                    <Link href={'#'}>Kebijakan Privasi</Link>
                    <Link href={'#'}>Syarat & Ketentuan</Link>
                    <Link href={'#'}>Pusat Bantuan</Link>
                </div>
            </div>
            <div className="pb-3 max-w-6xl mx-auto">
                <p className="text-end mt-2">© 2025 Career.ly – All rights reserved.</p>
            </div>
        </footer>
    )
};
