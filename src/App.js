import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import List from "./components/List";
import Music from "./components/Music";
import Nav from "./components/Nav";
import Home from "./components/homepage/Home";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [idVideo, setIdVideo] = useState();

  return (
    <div className="App">
      <Nav />
      {idVideo && <Music id={idVideo} />}
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home changeVideo={setIdVideo} />}
        />
        <Route
          exact
          path="/List"
          render={() => <List changeVideo={setIdVideo} />}
        />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
