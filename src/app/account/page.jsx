"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#071825] px-5 pb-20 pt-32 text-white">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-md lg:grid-cols-[1fr_1.1fr]">
        {/* Left Side */}
        <div className="relative hidden min-h-[650px] overflow-hidden bg-[#061827] p-10 lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45"
            style={{
              backgroundImage:
                "url('/images/everest-base-camp/everest-base-camp.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#071825]/40 via-[#071825]/80 to-[#071825]" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[3px] text-[#f5b82e]">
                Mountain Helicopters Nepal
              </p>

              <h1 className="max-w-md font-fraunces text-[52px] font-bold leading-[0.95]">
                Manage Your Mountain Journey.
              </h1>

              <p className="mt-6 max-w-md text-[15px] leading-7 text-white/70">
                Login or create your account to manage tour inquiries, bookings,
                and helicopter flight preferences.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <p className="text-sm text-white/80">
                Book scenic flights, charter services, and Everest experiences
                with a smoother account dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="mb-8 text-center lg:text-left">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[3px] text-[#f5b82e]">
              Account Access
            </p>

            <h2 className="font-fraunces text-4xl font-bold sm:text-5xl">
              {activeTab === "login" ? "Welcome Back" : "Create Account"}
            </h2>

            <p className="mt-3 text-sm text-white/60">
              {activeTab === "login"
                ? "Login to continue to your account."
                : "Register to start managing your bookings."}
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 grid grid-cols-2 rounded-full bg-white/10 p-1">
            <button
              type="button"
              onClick={() => setActiveTab("login")}
              className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                activeTab === "login"
                  ? "bg-[#f5b82e] text-[#071825]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("register")}
              className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                activeTab === "register"
                  ? "bg-[#f5b82e] text-[#071825]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Register
            </button>
          </div>

          {/* Social Login */}
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex h-12 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/10 text-sm font-semibold transition hover:bg-white/15"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[13px] font-bold text-[#4285F4]">
                G
              </span>
              Google
            </button>

            <button
              type="button"
              className="flex h-12 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/10 text-sm font-semibold transition hover:bg-white/15"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1877F2] text-[13px] font-bold text-white">
                f
              </span>
              Facebook
            </button>

            <button
              type="button"
              className="flex h-12 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/10 text-sm font-semibold transition hover:bg-white/15 sm:col-span-2"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A66C2] text-[12px] font-bold text-white">
                in
              </span>
              LinkedIn
            </button>
          </div>

          <div className="my-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs uppercase tracking-[2px] text-white/40">
              Or continue with email
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          {/* Form */}
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {activeTab === "register" && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-white/80">
                  Full Name
                </label>

                <div className="flex h-[52px] items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5">
                  <User size={18} className="text-[#f5b82e]" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-semibold text-white/80">
                Email Address
              </label>

              <div className="flex h-[52px] items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5">
                <Mail size={18} className="text-[#f5b82e]" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white/80">
                Password
              </label>

              <div className="flex h-[52px] items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5">
                <Lock size={18} className="text-[#f5b82e]" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-white/50 transition hover:text-white"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {activeTab === "register" && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-white/80">
                  Confirm Password
                </label>

                <div className="flex h-[52px] items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5">
                  <Lock size={18} className="text-[#f5b82e]" />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="text-white/50 transition hover:text-white"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "login" && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-white/60">
                  <input type="checkbox" className="accent-[#f5b82e]" />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="font-semibold text-[#f5b82e] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="h-[52px] w-full rounded-full bg-[#f5b82e] text-sm font-bold uppercase tracking-[1.5px] text-[#071825] transition hover:bg-[#ffd15a]"
            >
              {activeTab === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-white/55">
            {activeTab === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() =>
                setActiveTab(activeTab === "login" ? "register" : "login")
              }
              className="font-bold text-[#f5b82e] hover:underline"
            >
              {activeTab === "login" ? "Register here" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}