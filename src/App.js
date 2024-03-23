import React from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

import About from "./Components/About";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === "light" ? "dark" : "light" });
  };

  render() {
    return (
      <div className={`App ${this.state.theme}`}>
        <Header theme={this.state.theme} toggleTheme={this.toggleTheme} />
        <MainContent theme={this.state.theme} />
        <About theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
