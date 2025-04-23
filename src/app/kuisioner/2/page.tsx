"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Question1() {
  const [answer, setAnswer] = useState("");
  const router = useRouter();

  const handleNext = () => {
    router.push("/kuisioner/3");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-full">
        <div className="flex justify-end mb-4">
          <Link
            href="/"
            className="flex items-center font-bold hover:text-gray-600"
          >
            Lewati
            <span className="ml-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 20.4399L16.8896 16.0504C18.2925 14.6474 18.994 13.9459 18.994 13.0742C18.994 12.2025 18.2925 11.501 16.8896 10.098L12.5 5.70851"
                  stroke="black"
                  strokeWidth="2.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.13455 13.0742H18.3928"
                  stroke="black"
                  strokeWidth="2.08333"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        <div className="mb-8">
          <p className="mb-2 font-medium">
            Pertanyaan <span className="font-bold">2/8</span>
          </p>
          <h1 className="text-3xl font-bold mb-8">
            Dalam proyek atau tugas, bagian mana yang paling kamu suka kerjakan
            (contoh: membuat konsep, analisis data, desain visual, pitching,
            riset, dll)?
          </h1>

          <div className="border border-gray-300 rounded-lg p-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
            <textarea
              className="w-full min-h-[150px] outline-none resize-none"
              placeholder="Tulis jawaban kamu disini..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Link
            href="/kuisioner/1"
            className="flex items-center font-bold hover:text-gray-600"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 20.4394L8.11045 16.0499C6.70746 14.6469 6.00596 13.9454 6.00596 13.0737C6.00596 12.202 6.70746 11.5005 8.11045 10.0975L12.5 5.70802"
                stroke="black"
                strokeWidth="2.08333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.8655 13.0735H6.6072"
                stroke="black"
                strokeWidth="2.08333"
                strokeLinecap="round"
              />
            </svg>
            <span className="ml-2">Kembali</span>
          </Link>

          <button
            onClick={handleNext}
            className="bg-[#4882B4] text-white px-6 py-3 rounded-full hover:bg-[#3A6990] transition flex items-center"
          >
            Selanjutnya
            <span className="ml-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 20.4394L16.8896 16.0499C18.2925 14.6469 18.994 13.9454 18.994 13.0737C18.994 12.202 18.2925 11.5005 16.8896 10.0975L12.5 5.70802"
                  stroke="white"
                  strokeWidth="2.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.13455 13.0735H18.3928"
                  stroke="white"
                  strokeWidth="2.08333"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
