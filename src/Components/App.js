import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header'
import Recipes from "./Recipes"
import '../App.css'
import Home from './Home'
import Contact from './Contact'
import NewRecipeForm from "./NewRecipeForm";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="newRecipeForm" element={<NewRecipeForm />} />
        <Route path="contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App