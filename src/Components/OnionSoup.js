import * as React from "react";
import {useState, useEffect}  from 'react';
import { Link } from "react-router-dom";

function OnionSoup() {
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const [image, setImage] = useState('')
    const [comments, setComments] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/recipes/1')
        .then(resp => resp.json())
        .then(data => {
            setName(data.name)
            setIngredients(data.ingredients)
            setInstructions(data.instructions)
            setComments(data.comments)
            setImage(data.image)
        })
      }, [])

    const renderIngredients = ingredients.map((item) => {return <p key={ingredients.id}>{item}</p>})
    const renderInstructions = instructions.map((item) => {return <p key={ingredients.id}>{item}</p>})

  return (
    <div>
        <div className='title'>
            <br/>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/recipes">Recipes</Link>
            <br/>
            <br/>
        </div>
        <br/>
        <div className='recipes'>
            <div className='card'>
                <h1>{name}</h1>
                <img className='image' src={image}/>
                <h2>Ingredients</h2>
                <div>{renderIngredients}</div>
                <h2>Instructions</h2>
                <div>{renderInstructions}</div>
                <h2>Comments</h2>
                <p>{comments}</p>
            </div>
        </div>
    </div>
  )
}

export default OnionSoup