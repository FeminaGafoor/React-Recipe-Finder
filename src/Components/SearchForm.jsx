// 

import React, { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the full URL with the query parameter
    const url = `${API_BASE_URL}${query}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('Search results:', data);
        if (onSearch) onSearch(data.meals, query);
      })
      .catch(err => console.error('Error fetching data:', err));
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center gap-2"
    >
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
        className="bg-white/10 border border-white/20 text-white placeholder-yellow-200/70 px-3 py-2 rounded-lg outline-none focus:border-yellow-400 transition-all duration-200 w-40 text-sm"
      />
      <button
        type="submit"
        className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
      >
        Search
      </button>
    </form>
  );
}