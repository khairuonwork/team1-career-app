'use client'
import JobCard from "@/components/job/JobCard";
import { jobs } from "@/components/job/JobList";
import { Navbar, StepIndicator } from "@/components/jobmatching";
import Image from "next/image";
import { FormEvent, useState } from "react";


const JobMatching = () => {

    const [isLoading, setLoading] = useState('no')

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await setLoading('process')
        await delay(3000)

        await setLoading('result')
        await delay(3000)

        await setLoading('done')
    }

    return (
        <div>
            <Navbar/>
            <section className={`h-screen flex gap-16 flex-col px-4 max-w-6xl mx-auto ${isLoading === 'done' ? 'pt-32' : 'pt-40'}`}>
                {
                    isLoading=='done'?null:
                    <StepIndicator step={
                        isLoading=='process'?
                        2:
                        isLoading=='result'?
                        3:
                        1
                    }/>
                }
                {
                    isLoading=='no'?
                    <form className="flex justify-center items-center gap-10 flex-col">
                        <h2 className="text-2xl md:text-5xl font-bold text-[#3785C6] text-center mx-auto max-w-4xl">Unggah CV Terbaik Anda</h2>
                        <label className="block p-2 border-2 border-black rounded-lg flex flex-col gap-2 mx-auto w-full max-w-3xl">
                            <p>Unggah file disini</p>
                            <input className="bg-blue-500 w-fit p-2 rounded-lg text-white" type="file"/>
                        </label>
                        <button onClick={handleSubmit} type="submit" className="bg-[#3785C6] rounded-full px-6 py-2 text-white">Unggah</button>
                    </form>:
                    isLoading=='process'?
                    <div>
                        <Image
                            src={'/loading-search.svg'}
                            alt="mencari"
                            width={100}
                            height={100}
                            className="mx-auto"
                        />
                        <p className="text-center text-[#4882B4] text-lg">CV Anda sedang dianalisis...</p>
                    </div>:
                    isLoading=='result'?
                    <div>
                        <Image
                            src={'/check-circle.svg'}
                            alt="mencari"
                            width={100}
                            height={100}
                            className="mx-auto"
                        />
                        <p className="text-center text-[#4882B4] text-lg">Sudah ketemu, tunggu sebentar</p>
                    </div>:
                    isLoading=='done'?
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {jobs.map(job => (
                            <JobCard key={job.id} job={job} />
                            ))}
                    </div>:
                    null
                }
            </section>
        </div>
    )
}

export default JobMatching;