import * as React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
      <>
        <main>
          <h2>Welcome to my personalized online cookbook!</h2>
          <br/>
          <br/>
        </main>
        <h1><Link to="/recipes">Recipes</Link></h1>
        <br/>
        <br/>
        <br/>
        <h1><Link to="/newRecipeForm">New Recipe Form</Link></h1>
     
        
      </>
    );
}

export default Home
