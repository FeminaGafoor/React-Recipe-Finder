export default function Card({ meal }) {
  // Default meal data if no meal prop is provided
  const defaultMeal = {
    strMealThumb: "https://via.placeholder.com/400x300",
    strMeal: "Grilled Salmon with Vegetables",
    strInstructions: "Fresh Atlantic salmon grilled to perfection, served with a colorful medley of roasted seasonal vegetables including bell peppers, zucchini, and carrots. Drizzled with a light lemon herb sauce for a healthy and delicious meal.",
    strCategory: "Seafood",
    strArea: "American"
  };

  const mealData = meal || defaultMeal;

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl max-w-sm w-full transition-transform hover:scale-105 hover:shadow-yellow-400/30 duration-300">
        {/* Meal Image */}
        <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
          <img 
            src={mealData.strMealThumb} 
            alt={mealData.strMeal}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        {/* Meal Content */}
        <div className="p-6">
          <h2 className="text-2xl font-extrabold text-white mb-3 drop-shadow">
            {mealData.strMeal}
          </h2>
          <p className="text-gray-200 leading-relaxed mb-4">
            {mealData.strInstructions?.slice(0, 100) + "..." || "Delicious meal prepared with fresh ingredients."}
          </p>
          <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-400/30">
            <span className="text-sm text-yellow-300 flex items-center gap-1">
              📍 {mealData.strArea || "International"}
            </span>
            <span className="text-sm text-yellow-300 flex items-center gap-1">
              🍽️ {mealData.strCategory || "Main Course"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}