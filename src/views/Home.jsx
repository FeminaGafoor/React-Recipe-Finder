import React from 'react'
import MealCard from '../Components/MealCard';
import MainLayout from '../layout/MainLayout';
import SearchForm from '../Components/SearchForm';

import { useState, useEffect } from 'react';



const API_RANDOM_URL = import.meta.env.VITE_API_RANDOM_URL;

export default function Home() {
      const [meals, setMeals] = useState([]);
      const [hasSearched, setHasSearched] = useState(false);
      const [loading, setLoading] = useState(true);
      const [heading, setHeading] = useState('Random Meals');
      // const [searchQuery, setSearchQuery] = useState('');
    
      // Fetch 6 random meals on component mount
      useEffect(() => {
        const fetchRandomMeals = async () => {
          setLoading(true);
          try {
            const randomMeals = [];
            // Fetch 6 random meals
            for (let i = 0; i < 6; i++) {
              
              const response = await fetch(API_RANDOM_URL );
              const data = await response.json();
              if (data.meals && data.meals[0]) {
                randomMeals.push(data.meals[0]);
              }
            }
            setMeals(randomMeals);
          } catch (error) {
            console.error('Error fetching random meals:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchRandomMeals();
      }, []);
    
      const handleSearch = (searchResults, query) => {
        console.log('Received search results:', searchResults);
        setMeals(searchResults || []);
        setHasSearched(true);
        // setSearchQuery(query);
        
        // Update heading based on search
        if (query) {
          setHeading(`Search Results for "${query}"`);
        } else {
          setHeading('Random Meals');
        }
      };
  return (
      <MainLayout>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Search Form */}
        <div className="flex justify-center mb-8">
          <SearchForm onSearch={handleSearch} />
        </div>
        
        {/* Display loading state */}
        {loading ? (
          <div className="flex items-center justify-center p-12">
            <p className="text-white text-xl">Loading delicious meals...</p>
          </div>
        ) : (
          <>
            {/* Heading above cards */}
            <h1 className="text-xl sm:text-2xl md:text-xl font-bold text-white mb-4 mt-6">
              {heading}
            </h1>
            
            {/* Display search results or random meals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-8">
              {meals.length > 0 && meals.map(meal => <MealCard key={meal.idMeal} meal={meal} />)}
            </div>
            
            {/* Show message only after search with no results */}
            {hasSearched && meals.length === 0 && (
              <p className="text-center text-gray-300 mt-8">No meals found. Please try searching for something else.</p>
            )}
          </>
        )}
      </div>
    </MainLayout> 
  )
}
