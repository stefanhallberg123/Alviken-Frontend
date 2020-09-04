import React from "react";
import "./App.scss";
import Modal from "./components/modal/Modal/Modal";
import LandingPage from "./components/landingpage/landingpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThankYou from "./components/thankyou/thankyou";
import Home from "./components/admin/Home";
import Create from "./components/admin/Create";
import Edit from "./components/admin/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/modal">
            <Modal></Modal>
          </Route>
          {/* </Route>
          <Route exact path="/thankyou">
            <ThankYou></ThankYou>
          </Route>
          {/* <Route path={"/admin"} exact component={Home} /> */}

          {/* <Route exact path="/admin/create">
            <Create></Create>
          </Route>
          <Route exact path="/admin/edit/:id">
            <Edit></Edit>
          </Route>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route> */}
          {/* <Route path="*">
            <NoMatch></NoMatch>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
