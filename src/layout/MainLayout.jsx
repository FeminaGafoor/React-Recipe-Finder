import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image with blur and overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
          alt="Food Background"
          className="w-full h-full object-cover blur-lg brightness-75"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <Header />
      {/* Slim Glassy Navbar */}
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}