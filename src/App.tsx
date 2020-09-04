import * as React from 'react';
import './App.scss';
import { Switch, Route, Link } from 'react-router-dom';
// import Home from './components/admin/Home';
// import Create from './components/admin/Create';
// import Edit from './components/admin/Edit';

import Admin2 from './components/admin2/admin';
import Create from './components/admin2/Create2';
import Edit from './components/admin2/Edit2';
// import Modal from './components/modal/Modal/Modal';

export default function App() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              {/* <Link to={'/'}>Home</Link> */}
              <Link to={'/admin2'}>Home</Link>

            </li>
            <li>
              <Link to={'/admin2/create'}>Create</Link>
            </li>
          </ul>
        </nav>
        <Switch>
<<<<<<< HEAD
          <Route path={'/admin'} exact component={Home} />
          {/* <Route path={'/create'} exact component={Create} /> */}
          <Route path={'/admin/create'} exact component={Create} />
=======
          <Route path={'/admin2'} exact component={Admin2}/>
          {/* <Route path={'/'} exact component={Modal}/> */}
>>>>>>> isabelle

          <Route path={'/admin2/create'} exact component={Create}/>
          <Route path={'/admin2/edit/:id'} exact component={Edit}/>
        </Switch>
      </div>
    );
  }
