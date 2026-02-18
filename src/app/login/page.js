"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Lock,
  User,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.webp";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const message = searchParams.get("message");
    if (message) {
      setSuccess(message);
    }
  }, [searchParams]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 animate-in fade-in zoom-in duration-700">
      <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-10 md:p-12 border border-white/50 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>

        <div className="text-center mb-10 space-y-4">
          <Link
            href="/"
            className="inline-block transition-transform hover:scale-105 active:scale-95"
          >
            <Image
              src={logo}
              alt="Fila Fratello"
              className="h-16 w-auto mx-auto"
            />
          </Link>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
              Admin Portal
            </h1>
            <p className="text-sm text-slate-400 font-normal">
              Enter your credentials to manage catalog
            </p>
          </div>
        </div>

        {success && (
          <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl mb-8 flex items-center gap-3 text-sm font-normal border border-emerald-100">
            <CheckCircle2 size={18} /> {success}
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-8 flex items-center gap-3 text-sm font-normal border border-red-100">
            <AlertCircle size={18} /> {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">
              Email Address
            </label>
            <div className="relative group">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                <User size={18} />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@filafratello.com"
                className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:bg-white focus:border-blue-500/20 outline-none transition-all font-normal placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                Password
              </label>
            </div>
            <div className="relative group">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                <Lock size={18} />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:bg-white focus:border-blue-500/20 outline-none transition-all font-normal placeholder:text-slate-300"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-2xl transition-all shadow-xl shadow-slate-200 disabled:opacity-50 flex items-center justify-center gap-2 group active:scale-95"
          >
            {loading ? "Authenticating..." : "Sign In to Dashboard"}
            {!loading && (
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            )}
          </button>
        </form>
      </div>

      <p className="text-center text-xs text-slate-400 font-normal">
        By signing in, you agree to our
        <Link
          href="#"
          className="text-slate-600 font-semibold hover:underline px-1"
        >
          Security Terms
        </Link>
        and
        <Link
          href="#"
          className="text-slate-600 font-semibold hover:underline px-1"
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px]"></div>
      </div>

      <Suspense
        fallback={
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-slate-400 font-semibold text-xs tracking-widest uppercase">
              Initialising...
            </p>
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
