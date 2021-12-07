import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header'
import Recipes from "./Recipes"
import '../App.css'
import Home from './Home'
import NewRecipeForm from "./NewRecipeForm";
import OnionSoup from "./OnionSoup";
import Cookies from "./Cookies";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="onion-soup" element={<OnionSoup />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="newRecipeForm" element={<NewRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App