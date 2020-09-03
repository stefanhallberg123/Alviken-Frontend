import React from "react";
import "./App.scss";
import Modal from "./components/modal/Modal/Modal";
import LandingPage from "./components/landingpage/landingpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThankYou from "./components/thankyou/thankyou";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/modal">
            <Modal></Modal>
          </Route>
          <Route exact path="/thankyou">
            <ThankYou></ThankYou>
          </Route>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>
          {/* <Route path="*">
            <NoMatch></NoMatch>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
