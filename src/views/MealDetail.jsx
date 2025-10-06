import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

export default function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMealDetail = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        
        if (data.meals && data.meals[0]) {
          setMeal(data.meals[0]);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching meal details:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMealDetail();
    }
  }, [id]);

  // Extract ingredients from meal data
  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          name: ingredient,
          measure: measure || ''
        });
      }
    }
    return ingredients;
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center p-12">
          <p className="text-white text-xl">Loading meal details...</p>
        </div>
      </MainLayout>
    );
  }

  if (error || !meal) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center p-12">
          <p className="text-red-500 text-xl font-bold">Error Loading Meal Details</p>
        </div>
      </MainLayout>
    );
  }

  const ingredients = getIngredients(meal);

  return (
    <MainLayout>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Meal Image */}
          <div className="relative h-96 w-full">
            <img 
              src={meal.strMealThumb} 
              alt={meal.strMeal}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <h1 className="absolute bottom-6 left-6 text-4xl font-extrabold text-white drop-shadow-lg">
              {meal.strMeal}
            </h1>
          </div>

          <div className="p-6 md:p-8">
            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-lg font-semibold">
                {meal.strCategory}
              </span>
              <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-lg font-semibold">
                {meal.strArea}
              </span>
              {meal.strTags && meal.strTags.split(',').map((tag, index) => (
                <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-lg">
                  {tag.trim()}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h2 className="text-2xl font-bold text-yellow-300 mb-4">Ingredients</h2>
                <div className="bg-white/5 rounded-xl p-4">
                  <ul className="space-y-2">
                    {ingredients.map((ing, index) => (
                      <li key={index} className="flex justify-between text-white border-b border-white/10 pb-2">
                        <span>{ing.name}</span>
                        <span className="text-yellow-200 font-semibold">{ing.measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h2 className="text-2xl font-bold text-yellow-300 mb-4">Instructions</h2>
                <div className="bg-white/5 rounded-xl p-4 text-gray-200 leading-relaxed max-h-96 overflow-y-auto">
                  {meal.strInstructions}
                </div>
              </div>
            </div>

            {/* YouTube Video */}
            {meal.strYoutube && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-yellow-300 mb-4">Video Tutorial</h2>
                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                    title="Recipe Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}