import React from "react";
import Buttons from "../buttons/buttons.component";

import "./quote-container.styles.scss";

const QuoteContainer = ({ randomQuote, handleClick }) => (
  <div className="quote-container">
    <div className="quote-text">
      <i className="fa fa-quote-left" />
      <span className="text">{randomQuote.quote}</span>
    </div>
    <div className="quote-author">
      <span className="author">- {randomQuote.author}</span>
    </div>
    <Buttons handleClick={handleClick} randomQuote={randomQuote} />
  </div>
);
export default QuoteContainer;
