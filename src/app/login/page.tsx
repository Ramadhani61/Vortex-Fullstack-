"use client";
import { useState } from "react";
import LoginForm from "@/components/form/login";
export default function LoginPage() {
  return (
    <div
      className="flex items-center justify-center bg-gray-100 px-4"
      style={{ minHeight: "calc(100svh - 71px)" }}
    >
      <div className="">
        <h2 className="text-xl font-semibold text-center text-black">
          Selamat Datang
        </h2>
        <p className="text-[#696969] text-sm text-center font-regular">
          Silahkan Sign in Untuk Melanjutkan
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
