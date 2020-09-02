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
          <Route path="/thankyou">
            <ThankYou></ThankYou>
          </Route>
          <Route path="/modal">
            <Modal></Modal>
          </Route>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>

          {/* <Route path="*">
            <NoMatch></NoMatch>
          </Route> */}
          {/* <Route path="/admin">
            <Admin></Admin>
          </Route> */}
          {/* <Route path="/admin">
            <Home></Home>
          </Route> */}
          {/* <Route path="/admin/create">
            <Create></Create>
          </Route> */}
          {/* <Route path="/admin/edit">
            <Edit></Edit>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
