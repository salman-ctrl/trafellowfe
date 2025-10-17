"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Region from "@/components/Region";


export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("beranda");

 
  // Data Destinasi Trending
  const trendingDestinations = [
    {
      id: 1,
      name: "Jam Gadang",
      location: "Bukittinggi",
      rating: 4.8,
      reviews: 234,
      image:"/background/dashboard/jamgadang.png",
      badge: "Bukittinggi"
    },
    {
      id: 2,
      name: "Pantai Carocok",
      location: "Pesisir Selatan",
      rating: 4.7,
      reviews: 189,
      image: "/background/dashboard/painan.png",
      badge: "Pesisir Selatan"
    },
    {
      id: 3,
      name: "Ngarai Sianok",
      location: "Bukittinggi",
      rating: 4.9,
      reviews: 312,
      image: "/background/dashboard/ngaraisianok.png",
      badge: "Bukittinggi"
    },
  ];

  // Data Event
  const upcomingEvents = [
    {
      id: 1,
      title: "Mendaki Gunung Marapi",
      location: "Bukittinggi",
      date: "15",
      month: "DES",
      participants: "15/30",
      price: "Rp 250.000",
      status: "Tersedia"
    },
    {
      id: 2,
      title: "Tur Kuliner Sate Padang",
      location: "Padang",
      date: "20",
      month: "DES",
      participants: "8/15",
      price: "Rp 150.000",
      status: "Tersedia"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
     
     <Nav /> 

      {/* Hero Section dengan Background Image */}
      <section className="relative h-96 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-10">
          <img
            src="/background/dashboard/hero.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-purple-900/60 to-blue-800/70"></div>
        </div>

        {/* Hero Content */}
        <div className="text-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jelajahi Keindahan Sumatera Barat
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Temukan destinasi wisata menakjubkan dan bergabung dengan komunitas pecinta wisata
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Mulai Jelajah
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Region />
    {/* Destinasi Trending Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Destinasi Trending</h2>
            <p className="text-gray-600">Tempat wisata paling populer di Sumatera Barat</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingDestinations.map((destination) => (
              <div
                key={destination.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image dengan Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-whit text-xs font-semibold px-3 py-1 rounded-full">
                      {destination.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{destination.location}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-semibold text-gray-800">{destination.rating}</span>
                      <span className="text-gray-500 text-sm">({destination.reviews} ulasan)</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Event Mendatang Section */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Event Mendatang</h2>
            <p className="text-gray-600">Bergabunglah dengan berbagai kegiatan wisata menarik</p>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex items-center justify-between"
              >
                {/* Date Badge */}
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-lg p-4 text-center min-w-[70px]">
                    <div className="text-2xl font-bold">{event.date}</div>
                    <div className="text-xs uppercase">{event.month}</div>
                  </div>

                  {/* Event Info */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <span className="mr-1">📍</span> {event.location}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">👥</span> {event.participants} peserta
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">💰</span> {event.price}
                      </span>
                    </div>
                    <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap">
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© Technovaria 2025 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}