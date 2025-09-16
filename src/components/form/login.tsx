"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setSession } from "@/components/lib/auth";
import Alert from "@mui/material/Alert";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null); // null = belum ada alert
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error("Login gagal");
      }

      const data = await res.json();
      // Simpan session (dienkripsi)
      setSession(data);
      setAlerts("Login berhasil");
      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (err: any) {
      setAlerts(err.message || "Terjadi error login");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mt-6 bg-white rounded-lg p-8 w-[398px] border border-[#EAEAEA]"
    >
      {success !== null && (
        <Alert severity={success ? "success" : "error"}>{alerts}</Alert>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          className="mt-1 w-full px-4 py-2 text-sm border border-[#F0F0F0] rounded-md text-[#A7A5A5] font-normal focus:text-black"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-1 w-full text-sm px-4 py-2 border border-[#F0F0F0] rounded-md text-[#A7A5A5] font-normal focus:text-black"
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer w-full bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-[#415e85] transition"
      >
        {loading ? "Loading..." : "Sign In"}
      </button>
    </form>
  );
}
