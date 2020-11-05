import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import List from "./components/List";
import Music from "./components/Music";
import Nav from "./components/Nav";
import Home from "./components/Home";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/music/:idVideo" component={Music} />
        </Switch>
      </div>
    );
  }
}
export default App;
