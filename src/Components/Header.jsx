// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Header() {
//   return (
//     <header className="bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg mx-4 md:mx-6 mt-4 md:mt-6 rounded-xl px-4 md:px-8 py-4 md:py-6">
//       {/* Mobile Layout */}
//       <div className="flex flex-col items-center gap-4 md:hidden">
//         {/* Logo and Title */}
//         <div className="flex items-center gap-3">
//           <img src="/image.png" alt="Logo" className="h-8 w-8 drop-shadow-lg" />
//           <Link to="/" className="text-2xl font-extrabold tracking-wide text-white drop-shadow">Mush Room</Link>
//         </div>
        
//         {/* Tagline */}
//         <span className="text-yellow-300 font-semibold text-sm text-center">
//           Delicious meals, delivered fresh!
//         </span>
        
//         {/* Navigation */}
//         <nav className="flex flex-wrap items-center justify-center gap-3">
//           <Link
//             to="/"
//             className="px-3 py-2 rounded-lg text-white/90 font-semibold text-sm transition-all duration-200 hover:bg-yellow-400/20 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             Home
//           </Link>
//           <Link
//             to="/ingredients"
//             className="px-3 py-2 rounded-lg text-white/90 font-semibold text-sm transition-all duration-200 hover:bg-yellow-400/20 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             Ingredients
//           </Link>
//           {/* <a
//             href="#about"
//             className="px-3 py-2 rounded-lg text-white/90 font-semibold text-sm transition-all duration-200 hover:bg-yellow-400/20 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             About
//           </a> */}
//           <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-xl font-bold text-sm shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">
//             Login
//           </button>
//         </nav>
//       </div>

//       {/* Desktop Layout */}
//       <div className="hidden md:flex flex-row items-center justify-between gap-4">
//         <div className="flex items-center gap-3">
//           <img src="/image copy 2.png" alt="Logo" className="h-15 w-15 drop-shadow-lg" />
//           <Link to="/" className="text-3xl font-extrabold tracking-wide text-white drop-shadow">Mush Room</Link>
//         </div>
        
//         <span className="text-yellow-300 font-semibold text-lg hidden lg:block">
//           Delicious meals, delivered fresh!
//         </span>
        
//         <nav className="flex items-center gap-6">
//           <Link
//             to="/"
//             className="px-4 py-2 rounded-lg text-white/90 font-semibold transition-all duration-200 hover:bg-yellow-400/20 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             Home
//           </Link>
//           <Link
//             to="/ingredients"
//             className="px-4 py-2 rounded-lg text-white/90 font-semibold transition-all duration-200 hover:bg-yellow-400/20 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             Ingredients
//           </Link>
//           {/* <a
//             href="#about"
//             className="px-4 py-2 rounded-lg text-white/90 font-semibold transition-all duration-200 hover:bg-yellow-400/20 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             About
//           </a> */}
//           <button className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-xl font-bold shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">
//             Login
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../Components/LoginModal';

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <>
      <header className="bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg mx-4 md:mx-6 mt-4 md:mt-6 rounded-xl px-4 md:px-8 py-4 md:py-6">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center gap-4 md:hidden">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <img src="/image.png" alt="Logo" className="h-8 w-8 drop-shadow-lg" />
            <Link to="/" className="text-2xl font-extrabold tracking-wide text-white drop-shadow">Mush Room</Link>
          </div>
          
          {/* Tagline */}
          <span className="text-yellow-300 font-semibold text-sm text-center">
            Delicious meals, delivered fresh!
          </span>
          
          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="px-3 py-2 rounded-lg text-white/90 font-semibold text-sm transition-all duration-200 hover:bg-yellow-400/20 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Home
            </Link>
            <Link
              to="/ingredients"
              className="px-3 py-2 rounded-lg text-white/90 font-semibold text-sm transition-all duration-200 hover:bg-yellow-400/20 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Ingredients
            </Link>
            <button 
              onClick={openLoginModal}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-xl font-bold text-sm shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Login
            </button>
          </nav>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/image copy 2.png" alt="Logo" className="h-15 w-15 drop-shadow-lg" />
            <Link to="/" className="text-3xl font-extrabold tracking-wide text-white drop-shadow">Mush Room</Link>
          </div>
          
          <span className="text-yellow-300 font-semibold text-lg hidden lg:block">
            Delicious meals, delivered fresh!
          </span>
          
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-white/90 font-semibold transition-all duration-200 hover:bg-yellow-400/20 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Home
            </Link>
            <Link
              to="/ingredients"
              className="px-4 py-2 rounded-lg text-white/90 font-semibold transition-all duration-200 hover:bg-yellow-400/20 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Ingredients
            </Link>
            <button 
              onClick={openLoginModal}
              className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-xl font-bold shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
}