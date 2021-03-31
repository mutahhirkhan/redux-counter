import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header/Header";
import Counter from "./Components/Counter/Counter";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
