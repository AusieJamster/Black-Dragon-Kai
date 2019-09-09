import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect from="/tester" to="/test" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
