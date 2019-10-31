import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Dahsboard from '../Dashboard/Dashboard';
import ManageOwners from '../ManageOwners/ManageOwners';

function App() {
  return (
    <Router>
    <Switch>
      <Redirect exact from="/" to="/dashboard"/>
      <Route 
        exact
        path="/dashboard"
        render={(navProps)=>(
          <Dahsboard
            match={navProps.match}
            history={navProps.history}/>
        )}></Route>

      <Route 
        exact
        path="/manageOwners"
        render={(navProps)=>(
          <ManageOwners
            match={navProps.match}
            history={navProps.history}/>
        )}></Route>


      <div className="App">
        Home page - router here
      </div>
    </Switch>
    </Router>
  );
}

export default App;
