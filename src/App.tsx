import * as React from "react";
import "./App.scss";
import { Switch, Route, Link, Router } from "react-router-dom";
import Home from "./components/admin/Home";
// import Create from './components/admin/Create';
// import Edit from './components/admin/Edit';

// import Admin2 from './components/admin2/admin';
import Create from "./components/admin/Create";
import Edit from "./components/admin/Edit";
import Modal from "./components/modal/Modal/Modal";
import ThankYou from "./components/thankyou/thankyou";
// import Modal from './components/modal/Modal/Modal';

export default function App() {
  return (
    <div>
      <nav></nav>
      <Switch>
        <Route path={"/admin"} exact component={Home} />
        <Route path="/modal" exact component={Modal} />
        <Route path="/thankyou" exact component={ThankYou} />
        {/* <Route path={'/create'} exact component={Create} /> */}
        {/* <Route path={'/admin/create'} exact component={Create} /> */}
        {/* <Route path={'/admin'} exact component={Admin2}/> */}
        {/* <Route path={'/'} exact component={Modal}/> */}

        <Route path={"/admin/create"} exact component={Create} />
        <Route path={"/admin/edit/:id"} exact component={Edit} />
      </Switch>
    </div>
  );
}
// import React from "react";
// import "./App.scss";
// import Modal from "./components/modal/Modal/Modal";
// import LandingPage from "./components/landingpage/landingpage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path="/modal">
//             <Modal></Modal>
//           </Route>
//           <Route path="/">
//             <LandingPage></LandingPage>
//           </Route>
//           {/* <Route path="*">
//             <NoMatch></NoMatch>
//           </Route> */}
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
