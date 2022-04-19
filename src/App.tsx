import React from "react";
import Main from "./Main";
import SplashPage from "./SplashPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
