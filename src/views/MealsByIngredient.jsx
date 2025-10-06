import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import MealCard from '../Components/MealCard';

export default function MealsByIngredient() {
  const { ingredient } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMealsByIngredient = async () => {
      setLoading(true);
      setError(false);
      try {
        // First, get the list of meals with this ingredient
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        
        if (data.meals) {
          // Fetch full details for each meal to get ingredients
          const detailedMeals = await Promise.all(
            data.meals.map(async (meal) => {
              const detailResponse = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
              );
              const detailData = await detailResponse.json();
              return detailData.meals[0];
            })
          );
          setMeals(detailedMeals);
        } else {
          setMeals([]);
        }
      } catch (err) {
        console.error('Error fetching meals by ingredient:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (ingredient) {
      fetchMealsByIngredient();
    }
  }, [ingredient]);

  return (
    <MainLayout>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 mt-6">
          Meals with {ingredient}
        </h1>

        {error ? (
          <div className="flex items-center justify-center p-12">
            <p className="text-red-500 text-xl font-bold">Error Fetching Meals</p>
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center p-12">
            <p className="text-white text-xl">Loading meals...</p>
          </div>
        ) : meals.length === 0 ? (
          <div className="flex items-center justify-center p-12">
            <p className="text-gray-300 text-xl">No meals found with {ingredient}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-8">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} showIngredients={true} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}