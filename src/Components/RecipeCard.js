import * as React from "react";

function RecipeCard({recipe, onRemoveRecipe}) {
    const renderIngredients = recipe.ingredients.map((item) => {return <p key={recipe.id}>{item}</p>})
    const renderInstructions = recipe.instructions.map((item) => {return <p key={recipe.id}>{item}</p>})

    function handleDeleteClick() {
        fetch(`https://radiant-thicket-26929.herokuapp.com/recipes/${recipe.id}`, {
          method: "DELETE",
        });
        onRemoveRecipe(recipe.id);
      }

    return (
        <div className = 'card'>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} className='image' alt='food'/>
            <h2>Ingredients</h2>
            <div>
                {renderIngredients}
                <p>{recipe.ingredientsOne}</p>
                <p>{recipe.ingredientsTwo}</p>
                <p>{recipe.ingredientsThree}</p>
                <p>{recipe.ingredientsFour}</p>
                <p>{recipe.ingredientsFive}</p>
                <p>{recipe.ingredientsSix}</p>
                <p>{recipe.ingredientsSeven}</p>
                <p>{recipe.ingredientsEight}</p>
                <p>{recipe.ingredientsNine}</p>
                <p>{recipe.ingredientsTen}</p>
                <p>{recipe.ingredientsEleven}</p>
                <p>{recipe.ingredientsTwelve}</p>
                <p>{recipe.ingredientsThirteen}</p>
                <p>{recipe.ingredientsFourteen}</p>
                <p>{recipe.ingredientsFifteen}</p>
            </div>
            <h2>Instructions</h2>
            <div>
                {renderInstructions}
                <p>{recipe.instructionsOne}</p>
                <p>{recipe.instructionsTwo}</p>
                <p>{recipe.instructionsThree}</p>
                <p>{recipe.instructionsFour}</p>
                <p>{recipe.instructionsFive}</p>
                <p>{recipe.instructionsSix}</p>
                <p>{recipe.instructionsSeven}</p>
                <p>{recipe.instructionsEight}</p>
                <p>{recipe.instructionsNine}</p>
                <p>{recipe.instructionsTen}</p>
                <p>{recipe.instructionsEleven}</p>
                <p>{recipe.instructionsTwelve}</p>
                <p>{recipe.instructionsThirteen}</p>
                <p>{recipe.instructionsFourteen}</p>
                <p>{recipe.iinstructionsFifteen}</p>
            </div>
            <h2>Comments</h2>
            <p>{recipe.comments}</p>
            <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
            <br/>
            <br/>
        </div>
    )
}

export default RecipeCard


  