"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default function LoginForm() {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left: Login Form */}
      <div className="flex items-center justify-center px-6 md:px-12 bg-white">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-start space-y-1">
            <h1 className="text-2xl font-bold">Masuk</h1>
            <p className="text-sm text-muted-foreground">
              Cari pekerjaan sesuai minat kamu! 💼
            </p>
          </div>

          {/* Google Button */}
          <Button variant="outline" className="w-full flex items-center gap-2">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="Google"
            />
            Masuk dengan Google
          </Button>

          <Separator className="my-2" />

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Email<span className="text-red-500"> *</span>
              </label>
              <Input placeholder="Masukkan email Anda" type="email" />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Password<span className="text-red-500"> *</span>
              </label>
              <Input placeholder="Masukkan password Anda" type="password" />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Checkbox />
                <label className="text-sm font-normal">Tetap Masuk</label>
              </div>
              <Link href="#" className="text-sm text-blue-600 hover:underline">
                Lupa Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Masuk
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center text-sm">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="font-semibold hover:underline text-black"
            >
              Buat akun
            </Link>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Dengan membuat akun, kamu setuju dengan{" "}
            <span className="font-semibold underline">kebijakan privasi</span>{" "}
            kami
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block h-full w-full overflow-hidden">
        <img
          src="/login-banner/login-banner.jpg"
          alt="Login Banner career_ly"
          className="w-full h-full object-cover rounded-3xl scale-80"
        />
      </div>
    </div>
  );
}
