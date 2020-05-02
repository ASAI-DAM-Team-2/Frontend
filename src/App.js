import React, { useState } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage';
import DishesPage from './pages/dishes/Dishes';
import IndexHeader from './components/Headers/IndexHeader.js';

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
        <IndexHeader />
        <IndexNavbar onLoginModalToggle={handleLoginModalTogle}/>
      </div>
      <div>
        <Switch>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/dishes' component={DishesPage} />
          </Switch>
        </Switch>
      </div>
      <LoginModal
          show={loginModalShow}
          onLoginModalToggle={handleLoginModalTogle}
          onLogin={login}
      />
    </div>
  );
}

export default App;
