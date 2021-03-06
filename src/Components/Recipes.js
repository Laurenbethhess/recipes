import * as React from "react";
import {useState, useEffect}  from 'react';
import { Link } from "react-router-dom";
import RecipeCard from './RecipeCard'
import Search from './Search'

function Recipes() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetch('https://radiant-thicket-26929.herokuapp.com/recipes')
    .then(resp => resp.json())
    .then(data => setRecipes(data))
  }, [])

  const displayedRecipes = recipes.filter((recipe) =>
  recipe.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleRemoveRecipe(id) {
    const newRecipesList = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(newRecipesList);
  }

  const renderRecipes = displayedRecipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} onRemoveRecipe={handleRemoveRecipe} />)

    return (
      <>
      <div className='title'>
        <h2>Recipes</h2>
        <Link to="/">Home</Link>
        <br/>
        <br/>
        <Link to="/newRecipeForm">New Recipe Form</Link>
        <br/>
        <br/>
        <Search onSearch={setSearch} />
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