import React from "react";

import "./quote-container.styles.scss";

const QuoteContainer = ({ randomQuote }) => (
  <div className="quote-container">
    <div className="quote-text">
      <span className="text">{randomQuote.quote}</span>
    </div>
    <div className="quote-author">
      <span className="author">{randomQuote.author}</span>
    </div>
  </div>
);
export default QuoteContainer;
