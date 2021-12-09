import * as React from "react";
import {useState}  from 'react';
import { Link } from "react-router-dom";

function NewRecipeForm() {
    const [recipes, setRecipes] = useState([])
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [ingredientsOne, setIngredientsOne] = useState([])
    const [ingredientsTwo, setIngredientsTwo] = useState([])
    const [ingredientsThree, setIngredientsThree] = useState([])
    const [ingredientsFour, setIngredientsFour] = useState([])
    const [ingredientsFive, setIngredientsFive] = useState([])
    const [ingredientsSix, setIngredientsSix] = useState([])
    const [ingredientsSeven, setIngredientsSeven] = useState([])
    const [ingredientsEight, setIngredientsEight] = useState([])
    const [ingredientsNine, setIngredientsNine] = useState([])
    const [ingredientsTen, setIngredientsTen] = useState([])
    const [ingredientsEleven, setIngredientsEleven] = useState([])
    const [ingredientsTwelve, setIngredientsTwelve] = useState([])
    const [ingredientsThirteen, setIngredientsThirteen] = useState([])
    const [ingredientsFourteen, setIngredientsFourteen] = useState([])
    const [ingredientsFifteen, setIngredientsFifteen] = useState([])
    const [instructions, setInstructions] = useState([])
    const [instructionsOne, setInstructionsOne] = useState([])
    const [instructionsTwo, setInstructionsTwo] = useState([])
    const [instructionsThree, setInstructionsThree] = useState([])
    const [instructionsFour, setInstructionsFour] = useState([])
    const [instructionsFive, setInstructionsFive] = useState([])
    const [instructionsSix, setInstructionsSix] = useState([])
    const [instructionsSeven, setInstructionsSeven] = useState([])
    const [instructionsEight, setInstructionsEight] = useState([])
    const [instructionsNine, setInstructionsNine] = useState([])
    const [instructionsTen, setInstructionsTen] = useState([])
    const [instructionsEleven, setInstructionsEleven] = useState([])
    const [instructionsTwelve, setInstructionsTwelve] = useState([])
    const [instructionsThirteen, setInstructionsThirteen] = useState([])
    const [instructionsFourteen, setInstructionsFourteen] = useState([])
    const [instructionsFifteen, setInstructionsFifteen] = useState([])
    const [image, setImage] = useState('')
    const [comments, setComments] = useState('')

    function handleAddRecipe(newRecipe) {
        const updatedRecipes = [...recipes, newRecipe];
        setRecipes(updatedRecipes)
      }

    function handleSubmit(e) {
        // e.preventDefault()
        fetch("https://radiant-thicket-26929.herokuapp.com/recipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            link: link,
            ingredients: [ingredients],
            ingredientsOne: [ingredientsOne],
            ingredientsTwo: [ingredientsTwo],
            ingredientsThree: [ingredientsThree],
            ingredientsFour: [ingredientsFour],
            ingredientsFive: [ingredientsFive],
            ingredientsSix: [ingredientsSix],
            ingredientsSeven: [ingredientsSeven],
            ingredientsEight: [ingredientsEight],
            ingredientsNine: [ingredientsNine],
            ingredientsTen: [ingredientsTen],
            ingredientsEleven: [ingredientsEleven],
            ingredientsTwelve: [ingredientsTwelve],
            ingredientsThirteen: [ingredientsThirteen],
            ingredientsFourteen: [ingredientsFourteen],
            ingredientsFifteen: [ingredientsFifteen],
            instructions: [instructions],
            instructionsOne: [instructionsOne],
            instructionsTwo: [instructionsTwo],
            instructionsThree: [instructionsThree],
            instructionsFour: [instructionsFour],
            instructionsFive: [instructionsFive],
            instructionsSix: [instructionsSix],
            instructionsSeven: [instructionsSeven],
            instructionsEight: [instructionsEight],
            instructionsNine: [instructionsNine],
            instructionsTen: [instructionsTen],
            instructionsEleven: [instructionsEleven],
            instructionsTwelve: [instructionsTwelve],
            instructionsThirteen: [instructionsThirteen],
            instructionsFourteen: [instructionsFourteen],
            instructionsFifteen: [instructionsFifteen],
            image: image,
            comments: comments
        }),
        })
        .then((r) => r.json())
        .then((newRecipe) => handleAddRecipe(newRecipe));
    }
    
    return (
        <>
        <div className='title'>
            <h2>Create a New Recipe</h2>
            <Link to="/">Home</Link>
            <br/>
            <br/>
            <Link to="/recipes">Recipes</Link>
            <br/>
            <br/>
        </div>
        <br/>
        <div className='recipes'>
            <div className='card'>
                <h3>New Recipe</h3>
                <form onSubmit={handleSubmit}>
                    <p><input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="Name" /></p>
                    <h3>Add a Link to Someone Else's Recipe</h3>
                    <p><input onChange={(e) => setLink(e.target.value)} value={link} type="text" name="link" placeholder="Link" /></p>
                    <h3>Ingredients</h3>
                    <input onChange={(e) => setIngredients(e.target.value)} value={[ingredients]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsOne(e.target.value)} value={[ingredientsOne]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsTwo(e.target.value)} value={[ingredientsTwo]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsThree(e.target.value)} value={[ingredientsThree]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsFour(e.target.value)} value={[ingredientsFour]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsFive(e.target.value)} value={[ingredientsFive]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsSix(e.target.value)} value={[ingredientsSix]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsSeven(e.target.value)} value={[ingredientsSeven]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsEight(e.target.value)} value={[ingredientsEight]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsNine(e.target.value)} value={[ingredientsNine]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsTen(e.target.value)} value={[ingredientsTen]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsEleven(e.target.value)} value={[ingredientsEleven]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsTwelve(e.target.value)} value={[ingredientsTwelve]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsThirteen(e.target.value)} value={[ingredientsThirteen]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsFourteen(e.target.value)} value={[ingredientsFourteen]} type="text" name="ingredients" placeholder="Ingredients" />
                    <input onChange={(e) => setIngredientsFifteen(e.target.value)} value={[ingredientsFifteen]} type="text" name="ingredients" placeholder="Ingredients" />
                    <h3>Instructions</h3>
                    <input onChange={(e) => setInstructions(e.target.value)} value={[instructions]} type="text" name="instructions" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsOne(e.target.value)} value={[instructionsOne]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsTwo(e.target.value)} value={[instructionsTwo]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsThree(e.target.value)} value={[instructionsThree]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsFour(e.target.value)} value={[instructionsFour]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsFive(e.target.value)} value={[instructionsFive]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsSix(e.target.value)} value={[instructionsSix]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsSeven(e.target.value)} value={[instructionsSeven]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsEight(e.target.value)} value={[instructionsEight]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsNine(e.target.value)} value={[instructionsNine]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsTen(e.target.value)} value={[instructionsTen]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsEleven(e.target.value)} value={[instructionsEleven]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsTwelve(e.target.value)} value={[instructionsTwelve]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsThirteen(e.target.value)} value={[instructionsThirteen]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsFourteen(e.target.value)} value={[instructionsFourteen]} type="text" name="ingredients" placeholder="Instructions" />
                    <input onChange={(e) => setInstructionsFifteen(e.target.value)} value={[instructionsFifteen]} type="text" name="ingredients" placeholder="Instructions" />
                    <p><input onChange={(e) => setImage(e.target.value)} value={image} type="text" name="image" placeholder="Image" /></p>
                    <p><input onChange={(e) => setComments(e.target.value)} value={comments} type="text" name="comment" placeholder="Add Comment" /></p>
                    <p><button type="submit">Submit</button></p>
                </form>
            </div>
        </div>
        </>     
    )
}

export default NewRecipeForm

