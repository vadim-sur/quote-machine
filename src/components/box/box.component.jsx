import React from "react";
import Buttons from "../buttons/buttons.component.jsx";
import "./box.styles.scss";
import QuoteContainer from "../quote-container/quote-container.component";

const Box = ({ randomQuote, handleClick }) => (
  <div className="box">
    <QuoteContainer randomQuote={randomQuote} handleClick={handleClick} />
    <div className="footer">
      by{" "}
      <a href="https://github.com/vadim-sur">
        <span>bigVad</span>
      </a>
    </div>
  </div>
);

export default Box;
