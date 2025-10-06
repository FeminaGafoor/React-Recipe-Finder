import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-lg mx-6 mb-6 rounded-xl px-8 py-4 flex items-center justify-between">
      <span className="text-white/80 text-sm">&copy; {new Date().getFullYear()} React Meals. All rights reserved.</span>
      <div className="flex gap-4">
        <a href="#privacy" className="text-yellow-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Privacy</a>
        <a href="#terms" className="text-yellow-300 hover:text-yellow-400 transition-colors duration-200 text-sm">Terms</a>
      </div>
    </footer>
  );
}