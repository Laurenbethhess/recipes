import * as React from "react";
import {useState, useEffect}  from 'react';
import { Link } from "react-router-dom";
import RecipeCard from './RecipeCard'

function Recipes() {
  const [recipes, setRecipes] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(resp => resp.json())
    .then(data => setRecipes(data))
  }, [])

  const renderRecipes = recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)

    return (
      <>
        <main>
          <h2>Recipes</h2>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/onion-soup">French Onion Soup</Link>
        </nav>
        <nav>
          <Link to="/newRecipeForm">New Recipe Form</Link>
        </nav>
        <p>{renderRecipes}</p>
        <nav>
          <Link to="/newRecipeForm">New Recipe Form</Link>
        </nav>
        <br/>
      </>
    );
  }

  export default Recipes