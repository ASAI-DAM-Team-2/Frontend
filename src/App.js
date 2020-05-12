import React, { useState } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import DishesPage from './pages/dishes/Dishes';
import RestaurantsPage from './pages/restaurants/RestaurantsPage';
import RegisterPage from './pages/registerpage/RegisterPage';
import IndexHeader from './components/Headers/IndexHeader.js';
import RegisterPage from './pages/registerpage/RegisterPage';

import IndexNavbar from './components/Navbars/IndexNavbar.js';
// import IndexHeader from 'components/Headers/IndexHeader.js';
// import IndexHeader from 'components/Headers/IndexHeader.js';
// import DemoFooter from 'components/Footers/DemoFooter.js';

import LoginModal from './components/modals/LoginModal';

function App() {
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
        <IndexNavbar onLoginModalToggle={handleLoginModalTogle} />
      </div>
      <div>
        <Switch>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/dishes' component={DishesPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/restaurants' component={RestaurantsPage} />
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

export default App;
