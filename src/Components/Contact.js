import * as React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
      <>
        <main>
          <h2>Have a question?</h2>
          <p>
            You can contact me at laurenbethhess@gmail.com
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
}

export default Contact