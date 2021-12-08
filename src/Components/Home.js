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
            <img alt='family' className='main' src='https://images.unsplash.com/photo-1606787504667-961f789e78e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtaWx5JTIwY29va2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <h3>Created by Lauren Hess</h3>
          </div>
      </div>
        
      </>
    );
}

export default Home
