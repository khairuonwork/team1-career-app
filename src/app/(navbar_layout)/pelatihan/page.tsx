import Link from "next/link";

const PelatihanPage = () => {
    const data = [
        'UI/UX RESEARCH DESIGN',
        'DIGITAL MARKETING',
        'DATA ANALYSIS',
        'FINAL PROJECT MENTORING',
        'ENGLISH AND TOEFL PREPARATION',
        'PERSONAL BRANDING',
    ]
    return (
        <>
            <section className="flex items-center gap-10 flex-col px-4">
                <h2 className="text-2xl md:text-4xl font-bold text-[#3785C6] text-center max-w-2xl mt-7">Berbagai program pelatihan dari career.<span className="text-orange-500">ly</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 w-full max-w-6xl mx-auto mt-7 justify-between gap-16">
                    {
                        data.map((data, i)=>(
                            <Link href={'#'} key={i} className="border-2 border-gray-200 rounded-2xl w-full aspect-video flex items-center justify-center">
                                {data}
                            </Link>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default PelatihanPage;