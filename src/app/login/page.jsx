"use client";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login berhasil! 🎉");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      {/* Background Image - Ganti dengan /background/login.png */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/background/login.png"
          alt="Rumah Gadang"
          className="w-full h-full object-cover"
        />
        {/* Overlay untuk meningkatkan kontras - lebih subtle */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-800/20"></div>
      </div>

      {/* Login Card dengan Desain Biru-Putih */}
      <div className="relative w-full max-w-md">
        {/* Ornamen Atas - Inspired by Rumah Gadang roof */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-[50%] shadow-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded-t-[50%]"></div>
        </div>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-blue-200/50 p-8 relative overflow-hidden">
          
          {/* Decorative Corner Patterns - Blue */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-500/30 rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-blue-500/30 rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-blue-500/30 rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-500/30 rounded-br-3xl"></div>

          {/* Background Pattern Subtle */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="blue-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="2" fill="#3B82F6"/>
                  <circle cx="0" cy="0" r="2" fill="#3B82F6"/>
                  <circle cx="80" cy="80" r="2" fill="#3B82F6"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blue-pattern)"/>
            </svg>
          </div>

          {/* Title */}
          <div className="text-center mb-8 relative z-10">
            <div className="inline-block">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 mb-2">
                Welcome To Trafellow
              </h2>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            </div>
            <p className="text-gray-600 text-sm mt-3 font-medium">Platform Wisata Sumatera Barat</p>
          </div>

          <div className="space-y-5 relative z-10">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="nama@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-blue-50/50 border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-blue-50/50 border-2 border-blue-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 text-gray-800"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors duration-200"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-bold rounded-xl py-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-6 text-center relative z-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">atau</span>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-blue-600 font-bold hover:text-blue-700 hover:underline transition-colors duration-200"
              >
                Register
              </a>
            </p>
          </div>
        </div>

        {/* Ornamen Bawah - Blue dots */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full shadow-lg"></div>
          <div className="w-3 h-3 bg-blue-700 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>
  );
}