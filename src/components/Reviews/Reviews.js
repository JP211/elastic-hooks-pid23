import React, { useState } from "react";

import "./Reviews.css";

function Reviews() {
  const [reviews] = useState([
    {
      review:
        "This CoCo oil stuff regrew two of my limbs! I can't believe how well this stuff works and on top of all that my hair is shiny af.",
      rating: "*****",
      price: "9.99"
    },
    {
      review:
        "I can't believe it's not butter! 10/10 would slather on everything and hope for the best.",
      rating: "*****",
      price: "12.99"
    },
    {
      review:
        "I'm pretty sure I was a Coconut in another life. This stuff smells amazing and reminds me of a tropical oasis. Great for when you are stuck at your desk and you need a quick getaway to the Bahamas.",
      rating: "*****",
      price: "14.50"
    }
  ]);

  return (
    <div classNames="reviews">
      <p>Read the Reviews: {reviews[0].review}</p>
    </div>
  );
}

export default Reviews;
