import React from "react";

import { Switch, Route } from "react-router-dom";
import List from "./components/List";
import Music from "./components/Music";
import Nav from "./components/Nav";
import Home from "./components/Home";

import "./App.css";
import NotFoundPage from "./components/NotFoundPage";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/music/:idVideo" component={Music} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
