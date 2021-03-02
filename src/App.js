import React from "react";

import "./App.css";
import Box from "./components/box/box.component";
import QUOTE_DATA from "./quotes.data";

const quoteGenerator = () =>
  QUOTE_DATA.quotes[Math.floor(Math.random() * QUOTE_DATA.quotes.length)];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomQuote: quoteGenerator(),
    };
  }

  handleClick() {
    this.setState({
      randomQuote: quoteGenerator(),
    });
  }

  render() {
    return (
      <div>
        <Box
          handleClick={() => this.handleClick()}
          randomQuote={this.state.randomQuote}
        />
      </div>
    );
  }
}

export default App;
