import React from "react";

import "./App.css";
import Box from "./components/box/box.component";
import QUOTE_DATA from "./quotes.data";
import "@fortawesome/fontawesome-free/js/all.min";

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
      <Box
        handleClick={() => this.handleClick()}
        randomQuote={this.state.randomQuote}
      />
    );
  }
}

export default App;
