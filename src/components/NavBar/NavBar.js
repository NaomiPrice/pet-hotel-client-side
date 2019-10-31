import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
    <div className="navHead">
        <div>Welcome to the Pet Hotel</div>
        <Link className="nav-link" to="/manageOwners">
          Manage Owners
        </Link>
        
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      
    </div>
  );
  
  // Instead of taking everything from state, we just want the user
  // object to determine if they are logged in
  // if they are logged in, we show them a few more links 
  // if you wanted you could write this code like this:
  // const mapStateToProps = ({ user }) => ({ user });
  
  
  export default NavBar;