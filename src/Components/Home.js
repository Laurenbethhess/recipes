import * as React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
      <>
      <div className='title'>
        <h3><Link to="/recipes">Recipes</Link></h3>
        <h3><Link to="/newRecipeForm">New Recipe Form</Link></h3>
      </div>
      <br/>
      <div className='background'>
        <div className='card'>
            <h3>Welcome to my family's online cookbook!</h3>
            <img alt='books' className='main' src='https://images.unsplash.com/photo-1590587754541-a3a4f2e0d06f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
            <h3>Created by Lauren Hess</h3>
            <h3><Link to="/contact">Contact me!</Link></h3>
          </div>
      </div>
        
      </>
    );
}

export default Home
