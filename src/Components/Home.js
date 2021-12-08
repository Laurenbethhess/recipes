import * as React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
      <>
      <div className='title'>
      <br/>
        <h2><Link to="/recipes">Recipes</Link></h2>
        <h2><Link to="/newRecipeForm">New Recipe Form</Link></h2>
        <br/>
      </div>
      <br/>
      <div className='background'>
        <div className='card'>
            <h2 className='cookbook'>Welcome to my family's online cookbook!</h2>
            <img className='main' src='https://images.unsplash.com/photo-1606787504667-961f789e78e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtaWx5JTIwY29va2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <br/>
            <br/>
          </div>
      </div>
        
      </>
    );
}

export default Home
