import React from "react";
import "./buttons.styles.scss";

const Buttons = ({ handleClick }) => {
  console.log();
  return (
    <div className="buttons">
      <button className="tweet-button" />
      <button className="tumblr-button" />
      <button className="new-quote-button" onClick={() => handleClick()}>
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
