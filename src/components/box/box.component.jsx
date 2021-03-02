import React from "react";
import Buttons from "../buttons/buttons.component.jsx";
import "./box.styles.scss";
import QuoteContainer from "../quote-container/quote-container.component";

const Box = ({ randomQuote, handleClick }) => (
  <div className="box">
    <QuoteContainer randomQuote={randomQuote} />
    <Buttons handleClick={handleClick} />
  </div>
);

export default Box;
