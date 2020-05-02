import React, { useState } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage';
import DishesPage from './pages/dishes/Dishes';
import NavUser from './components/nav/nav_user.component';
import NavVisitor from './components/nav/NavVisitor';
import IndexHeader from './components/Headers/IndexHeader.js';

import IndexNavbar from './components/Navbars/IndexNavbar.js';
// import IndexHeader from 'components/Headers/IndexHeader.js';
// import IndexHeader from 'components/Headers/IndexHeader.js';
// import DemoFooter from 'components/Footers/DemoFooter.js';

function App() {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(!user);
  };

  return (
    <div>
      <div>
        <IndexHeader />
        <IndexNavbar />
      </div>
      <div>
        <Switch>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/dishes' component={DishesPage} />
          </Switch>
        </Switch>
      </div>
    </div>
  );
}

export default App;
