import { Routes, Route } from 'react-router-dom';
import './App.css';
import Ingredients from './views/Ingredients';
import Home from './views/Home';
import MealsByIngredient from './views/MealsByIngredient';
import MealDetail from './views/MealDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredients" element={<Ingredients />} />
      <Route path="/ingredients/:ingredient" element={<MealsByIngredient />} />
      <Route path="/meal/:id" element={<MealDetail />} />
    </Routes>
  );
}

export default App;