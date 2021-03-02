import React from "react";
import "./buttons.styles.scss";

const Buttons = ({ handleClick, randomQuote }) => {
  console.log();
  return (
    <div className="buttons">
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${randomQuote.quote}" ${randomQuote.author}`}
      >
        <button className="tweet-button">
          <i className="fab fa-twitter" />
        </button>
      </a>
      <button className="tumblr-button">
        <i className="fab fa-tumblr" />
      </button>
      <button className="new-quote-button" onClick={() => handleClick()}>
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
