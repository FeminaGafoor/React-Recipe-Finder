// // // import { Link } from 'react-router-dom';

// // // export default function MealCard({ meal }) {
// // //   // Default meal data if no meal prop is provided
// // //   const defaultMeal = {
// // //     strMealThumb: "https://via.placeholder.com/400x300",
// // //     strMeal: "Grilled Salmon with Vegetables",
// // //     strInstructions: "Fresh Atlantic salmon grilled to perfection, served with a colorful medley of roasted seasonal vegetables including bell peppers, zucchini, and carrots. Drizzled with a light lemon herb sauce for a healthy and delicious meal.",
// // //     strCategory: "Seafood",
// // //     strArea: "American",
// // //     idMeal: "1"
// // //   };

// // //   const mealData = meal || defaultMeal;

// // //   return (
// // //     <Link to={`/meal/${mealData.idMeal}`} className="flex items-center justify-center p-4">
// // //       <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl max-w-sm w-full transition-transform hover:scale-105 hover:shadow-yellow-400/30 duration-300 cursor-pointer">
// // //         {/* Meal Image */}
// // //         <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
// // //           <img 
// // //             src={mealData.strMealThumb} 
// // //             alt={mealData.strMeal}
// // //             className="w-full h-full object-cover"
// // //           />
// // //           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
// // //         </div>
        
// // //         {/* Meal Content */}
// // //         <div className="p-6">
// // //           <h2 className="text-2xl font-extrabold text-white mb-3 drop-shadow">
// // //             {mealData.strMeal}
// // //           </h2>
// // //           <p className="text-gray-200 leading-relaxed mb-4">
// // //             {mealData.strInstructions?.slice(0, 100) + "..." || "Delicious meal prepared with fresh ingredients."}
// // //           </p>
// // //           <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-400/30">
// // //             <span className="text-sm text-yellow-300 flex items-center gap-1">
// // //               📍 {mealData.strArea || "International"}
// // //             </span>
// // //             <span className="text-sm text-yellow-300 flex items-center gap-1">
// // //               🍽️ {mealData.strCategory || "Main Course"}
// // //             </span>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </Link>
// // //   );
// // // }


// // import { Link } from 'react-router-dom';

// // export default function MealCard({ meal, showIngredients = false }) {
// //   // Default meal data if no meal prop is provided
// //   const defaultMeal = {
// //     strMealThumb: "https://via.placeholder.com/400x300",
// //     strMeal: "Grilled Salmon with Vegetables",
// //     strInstructions: "Fresh Atlantic salmon grilled to perfection, served with a colorful medley of roasted seasonal vegetables including bell peppers, zucchini, and carrots. Drizzled with a light lemon herb sauce for a healthy and delicious meal.",
// //     strCategory: "Seafood",
// //     strArea: "American",
// //     idMeal: "1"
// //   };

// //   const mealData = meal || defaultMeal;

// //   // Extract ingredients from meal data
// //   const getIngredients = (meal) => {
// //     const ingredients = [];
// //     for (let i = 1; i <= 20; i++) {
// //       const ingredient = meal[`strIngredient${i}`];
// //       const measure = meal[`strMeasure${i}`];
      
// //       if (ingredient && ingredient.trim()) {
// //         ingredients.push({
// //           name: ingredient,
// //           measure: measure || ''
// //         });
// //       }
// //     }
// //     return ingredients;
// //   };

// //   const ingredients = showIngredients ? getIngredients(mealData) : [];

// //   const CardContent = (
// //     <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl max-w-sm w-full transition-transform hover:scale-105 hover:shadow-yellow-400/30 duration-300">
// //       {/* Meal Image */}
// //       <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
// //         <img 
// //           src={mealData.strMealThumb} 
// //           alt={mealData.strMeal}
// //           className="w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
// //       </div>
      
// //       {/* Meal Content */}
// //       <div className="p-6">
// //         <h2 className="text-2xl font-extrabold text-white mb-3 drop-shadow">
// //           {mealData.strMeal}
// //         </h2>
        
// //         {/* Show ingredients if prop is true */}
// //         {showIngredients && ingredients.length > 0 ? (
// //           <div className="mb-4">
// //             <h3 className="text-yellow-300 font-bold text-sm mb-2">Ingredients:</h3>
// //             <div className="max-h-40 overflow-y-auto pr-2 custom-scrollbar">
// //               <ul className="text-gray-200 text-xs space-y-1">
// //                 {ingredients.map((ing, index) => (
// //                   <li key={index} className="flex justify-between border-b border-white/10 pb-1">
// //                     <span>{ing.name}</span>
// //                     <span className="text-yellow-200 font-semibold">{ing.measure}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //         ) : (
// //           <p className="text-gray-200 leading-relaxed mb-4 text-sm">
// //             {mealData.strInstructions?.slice(0, 100) + "..." || "Delicious meal prepared with fresh ingredients."}
// //           </p>
// //         )}
        
// //         <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-400/30">
// //           <span className="text-sm text-yellow-300 flex items-center gap-1">
// //             📍 {mealData.strArea || "International"}
// //           </span>
// //           <span className="text-sm text-yellow-300 flex items-center gap-1">
// //             🍽️ {mealData.strCategory || "Main Course"}
// //           </span>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .custom-scrollbar::-webkit-scrollbar {
// //           width: 4px;
// //         }
// //         .custom-scrollbar::-webkit-scrollbar-track {
// //           background: rgba(255, 255, 255, 0.1);
// //           border-radius: 10px;
// //         }
// //         .custom-scrollbar::-webkit-scrollbar-thumb {
// //           background: rgba(250, 204, 21, 0.5);
// //           border-radius: 10px;
// //         }
// //         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
// //           background: rgba(250, 204, 21, 0.7);
// //         }
// //       `}</style>
// //     </div>
// //   );

// //   // If showIngredients is true, don't wrap in Link (stay on same page)
// //   // If false, wrap in Link to go to detail page
// //   return showIngredients ? (
// //     <div className="flex items-center justify-center p-4">
// //       {CardContent}
// //     </div>
// //   ) : (
// //     <Link to={`/meal/${mealData.idMeal}`} className="flex items-center justify-center p-4">
// //       {CardContent}
// //     </Link>
// //   );
// // }




// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function MealCard({ meal, showIngredients = false }) {
//   // Extract ingredients from meal data
//   const getIngredients = (meal) => {
//     const ingredients = [];
//     for (let i = 1; i <= 20; i++) {
//       const ingredient = meal[`strIngredient${i}`];
//       const measure = meal[`strMeasure${i}`];
      
//       if (ingredient && ingredient.trim()) {
//         ingredients.push({
//           name: ingredient,
//           measure: measure || ''
//         });
//       }
//     }
//     return ingredients;
//   };

//   const ingredients = showIngredients ? getIngredients(meal) : [];

//   return (
//     <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-yellow-400/30 duration-300 flex flex-col">
//       <Link to={`/meal/${meal.idMeal}`} className="flex-grow">
//         {/* Meal Image */}
//         <div className="relative h-48 w-full overflow-hidden">
//           <img 
//             src={meal.strMealThumb} 
//             alt={meal.strMeal}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//           <h3 className="absolute bottom-3 left-3 text-lg font-bold text-white drop-shadow-lg">
//             {meal.strMeal}
//           </h3>
//         </div>

//         {/* Meal Info */}
//         <div className="p-4">
//           <div className="flex flex-wrap gap-2 mb-3">
//             {meal.strCategory && (
//               <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-md text-xs font-semibold">
//                 {meal.strCategory}
//               </span>
//             )}
//             {meal.strArea && (
//               <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-md text-xs font-semibold">
//                 {meal.strArea}
//               </span>
//             )}
//           </div>

//           {/* Ingredients List */}
//           {showIngredients && ingredients.length > 0 && (
//             <div className="mt-3">
//               <h4 className="text-sm font-bold text-yellow-300 mb-2">Ingredients:</h4>
//               <ul className="text-xs text-gray-300 space-y-1 max-h-32 overflow-y-auto">
//                 {ingredients.map((ing, index) => (
//                   <li key={index} className="flex justify-between">
//                     <span>{ing.name}</span>
//                     <span className="text-yellow-200">{ing.measure}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </Link>

//       {/* YouTube Button - Outside the Link */}
//       {meal.strYoutube && (
//         <div className="p-4 pt-0">
//           <a
//             href={meal.strYoutube}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full oklch(0.8 0.19 101.82) hover:oklch(0.8 0.19 101.82) text-white font-bold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <svg 
//               className="w-5 h-5" 
//               fill="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//             </svg>
//             Watch Video
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function MealCard({ meal, showIngredients = false }) {
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

  const ingredients = showIngredients ? getIngredients(meal) : [];

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-yellow-400/30 duration-300 flex flex-col">
      <Link to={`/meal/${meal.idMeal}`} className="flex-grow">
        {/* Meal Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={meal.strMealThumb} 
            alt={meal.strMeal}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-3 left-3 text-lg font-bold text-white drop-shadow-lg">
            {meal.strMeal}
          </h3>
        </div>

        {/* Meal Info */}
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {meal.strCategory && (
              <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-md text-xs font-semibold">
                {meal.strCategory}
              </span>
            )}
            {meal.strArea && (
              <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-md text-xs font-semibold">
                {meal.strArea}
              </span>
            )}
          </div>

          {/* Ingredients List */}
          {showIngredients && ingredients.length > 0 && (
            <div className="mt-3">
              <h4 className="text-sm font-bold text-yellow-300 mb-2">Ingredients:</h4>
              <ul className="text-xs text-gray-300 space-y-1 max-h-32 overflow-y-auto">
                {ingredients.map((ing, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{ing.name}</span>
                    <span className="text-yellow-200">{ing.measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Link>

      {/* YouTube Button - Outside the Link
      {meal.strYoutube && (
        <div className="p-4 pt-0">
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-white font-bold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            style={{ 
              backgroundColor: 'oklch(0.8 0.19 101.82)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.7 0.19 101.82)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.8 0.19 101.82)'}
            onClick={(e) => e.stopPropagation()}
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch Video
          </a>
        </div>
      )} */}
    </div>
  );
}