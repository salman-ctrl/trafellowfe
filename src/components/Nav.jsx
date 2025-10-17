"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const Nav = () => {
     const [activeMenu, setActiveMenu] = useState("beranda");
      const router = useRouter();



    const handleclick = (e) => {
    e.preventDefault();

    setTimeout(() => {
      router.push("/login")

    }, 1000);
  };

  return (
     <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
                <img src="/icon/trafellow.png" className="h-16 w-auto" alt="" />
              <h1 className="text-2xl font-bold text-blue-600">Trafellow</h1>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              {["Beranda", "Jelajah", "Event", "Komunitas"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveMenu(item.toLowerCase())}
                  className={`text-md font-medium transition-colors duration-200 ${
                    activeMenu === item.toLowerCase()
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  } pb-1`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button onClick={handleclick} className="px-4 py-2 text-sm cursor-pointer font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                Masuk
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white cursor-pointer bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Nav
