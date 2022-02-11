import React from "react";
import { Link } from "react-router-dom";
const Pop = ({ closePop }) => {
  window.addEventListener("click", closePop);

  return (
    <div class="container">
      <div class="cookiesContent" id="cookiesPopup">
        <button class="close" onClick={closePop}>
          x
        </button>
        <img
          alt="cookies-img"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/e/eb/Strawberry_and_lemon_smoothie_%2814430283996%29.jpg"
          }
        />
        <p>Please sign up to Freshly Delivered</p>
        <Link to="/signup">
          <button class="accept">Sign Up</button>
        </Link>
        <p>
          Already a user? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Pop;
