import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

const INGREDIENTS_API_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(INGREDIENTS_API_URL);
        const data = await response.json();
        
        // Get first 12 ingredients for display
        if (data.meals) {
          setIngredients(data.meals.slice(0, 12));
        }
      } catch (err) {
        console.error('Error fetching ingredients:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  return (
    <MainLayout>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 mt-6">
          Popular Ingredients
        </h1>

        {/* Display error state */}
        {error ? (
          <div className="flex items-center justify-center p-12">
            <p className="text-red-500 text-xl font-bold">Error Fetching Ingredients</p>
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center p-12">
            <p className="text-white text-xl">Loading ingredients...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 pb-8">
            {ingredients.map((ingredient, index) => (
              <Link
                key={ingredient.idIngredient || index}
                to={`/ingredients/${ingredient.strIngredient}`}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-yellow-400/30 duration-300 p-4 flex flex-col items-center cursor-pointer"
              >
                {/* Ingredient Image */}
                <div className="w-24 h-24 mb-3">
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
                    alt={ingredient.strIngredient}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/96x96?text=Ingredient';
                    }}
                  />
                </div>
                
                {/* Ingredient Name */}
                <h3 className="text-white font-bold text-center text-sm sm:text-base">
                  {ingredient.strIngredient}
                </h3>
                
                {/* Ingredient Description (if available) */}
                {ingredient.strDescription && (
                  <p className="text-gray-300 text-xs text-center mt-2 line-clamp-2">
                    {ingredient.strDescription.slice(0, 50)}...
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}