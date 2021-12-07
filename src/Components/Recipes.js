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
      <div className='title'>
        <h2>Recipes</h2>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/onion-soup">French Onion Soup</Link>
        <br/>
        <Link to="/cookies">Chocolate Chip Cookies</Link>
        <br/>
        <Link to="/newRecipeForm">New Recipe Form</Link>
        <br/>
        <br/>
      </div>

      <div className='recipes'>
        <p>{renderRecipes}</p>
        <Link to="/newRecipeForm">New Recipe Form</Link>
        <br/>
        <br/>
      </div>
      </>
    );
  }

  export default Recipes