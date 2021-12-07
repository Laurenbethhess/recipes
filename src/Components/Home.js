import * as React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
      <>
      <div>
        <h2><Link to="/recipes">Recipes</Link></h2>
        <h2><Link to="/newRecipeForm">New Recipe Form</Link></h2>
      </div>
        <div className='background'>
          <h2 className='cookbook'>Welcome to my personalized online cookbook!</h2>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </>
    );
}

export default Home
