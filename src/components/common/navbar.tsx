"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { DropDown } from "./dropdown";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-3 px-4 mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-8 h-8 mr-2">
            <Image
              src="/logo.svg"
              alt="Career.ly"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:block">
          <div className="bg-gray-200 rounded-full px-2 py-1">
            <div className="flex space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full text-sm ${
                  pathname === "/"
                    ? "bg-[#4682B4] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Home
              </Link>
              <Link
                href="/pekerjaan"
                className={`px-4 py-2 rounded-full text-sm ${
                  pathname === "/pekerjaan"
                    ? "bg-[#4682B4] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Pekerjaan
              </Link>
              <DropDown
                trigger={
                  <div className="px-4 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-100">
                    AI Helper
                  </div>
                }
              >
                <Link
                  href={"/cvmaker"}
                  className="flex gap-2 hover:bg-gray-200 px-3 py-2 items-center"
                >
                  <p>CV Maker</p>
                </Link>
                <Link
                  href={"jobmatching"}
                  className="flex gap-2 hover:bg-gray-200 px-3 py-2 items-center"
                >
                  <p>AI Job Matching</p>
                </Link>
              </DropDown>
              <Link
                href="/komunitas"
                className={`px-4 py-2 rounded-full text-sm ${
                  pathname === "/komunitas"
                    ? "bg-[#4682B4] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Komunitas
              </Link>
              <Link
                href="/pelatihan"
                className={`px-4 py-2 rounded-full text-sm ${
                  pathname === "/pelatihan"
                    ? "bg-[#4682B4] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Pelatihan
              </Link>
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
            <Image
              src="/profile-placeholder.jpg"
              alt="User Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="ml-2 text-sm font-medium hidden sm:inline">
            John Doe
          </span>

          {/* Mobile Menu Button */}
          <button
            className="ml-4 p-2 rounded-md text-gray-500 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-100 rounded-lg p-4">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg text-sm ${
                pathname === "/"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/pekerjaan"
              className={`px-4 py-2 rounded-lg text-sm ${
                pathname === "/pekerjaan"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pekerjaan
            </Link>
            <DropDown
              trigger={
                <div className="px-4 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-100">
                  AI Helper
                </div>
              }
            >
              <Link
                href={"/cvmaker"}
                className="flex gap-2 hover:bg-gray-200 px-3 py-2 items-center"
              >
                <p>CV Maker</p>
              </Link>
              <Link
                href={"jobmatching"}
                className="flex gap-2 hover:bg-gray-200 px-3 py-2 items-center"
              >
                <p>AI Job Matching</p>
              </Link>
            </DropDown>
            <Link
              href="/komunitas"
              className={`px-4 py-2 rounded-lg text-sm ${
                pathname === "/komunitas"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Komunitas
            </Link>
            <Link
              href="/pelatihan"
              className={`px-4 py-2 rounded-lg text-sm ${
                pathname === "/pelatihan"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pelatihan
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
