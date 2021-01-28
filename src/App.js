import React from "react";
import Main from "./pages/Main";
import SplashPage from "./pages/SplashPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"

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
