import React, { useState } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import DishesPage from './pages/dishes/Dishes';
import RestaurantsPage from './pages/restaurants/RestaurantsPage';
import RegisterPage from './pages/registerpage/RegisterPage';
import UserPage from './pages/userpage/UserPage';
import DishesListPage from './pages/restaurants/dish/DishesListPage';
import IndexHeader from './components/Headers/IndexHeader.js';
import { connect } from 'react-redux';

import IndexNavbar from './components/Navbars/IndexNavbar.js';
import UserNavbar from './components/Navbars/UserNavbar.js';
// import IndexHeader from 'components/Headers/IndexHeader.js';
// import IndexHeader from 'components/Headers/IndexHeader.js';
// import DemoFooter from 'components/Footers/DemoFooter.js';

import LoginModal from './components/modals/LoginModal';

function App(props) {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(!user);
  };

  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const handleLoginModalTogle = () => {
    setLoginModalShow(!loginModalShow);
  };

  return (
    <div>
      <div>
        {props && props.authToken ? (
          <UserNavbar />
        ) : (
          <IndexNavbar onLoginModalToggle={handleLoginModalTogle} />
        )}
      </div>
      <div>
        <Switch>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/dishes' component={DishesPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/restaurants' component={RestaurantsPage} />
            <Route path='/user' component={UserPage} />
            <Route path='/list' component={DishesListPage} />
          </Switch>
        </Switch>
      </div>
      <LoginModal
        show={loginModalShow}
        onLoginModalToggle={handleLoginModalTogle}
        onLogin={login}
        user={user}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authToken: state.auth.authToken,
  };
};

export default connect(mapStateToProps)(App);
