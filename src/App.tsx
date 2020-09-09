import * as React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./components/admin/Home";
import Create from "./components/admin/Create";
import Edit from "./components/admin/Edit";
import Modal from "./components/modal/Modal/Modal";
import ThankYou from "./components/thankyou/thankyou";
import LandingPage from "./components/landingpage/landingpage";

export default function App() {
  return (
    <div>
      {/* <nav></nav> */}
      <Switch>
        <Route path={"/admin"} exact component={Home} />
        <Route path="/modal" exact component={Modal} />
        <Route path="/thankyou" exact component={ThankYou} />

        <Route path={"/admin/create"} exact component={Create} />
        <Route path={"/admin/edit/:id"} exact component={Edit} />
        <Route path={"/"} component={LandingPage} />
      </Switch>
    </div>
  );
}
