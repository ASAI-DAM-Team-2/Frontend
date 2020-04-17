import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import DishesPage from './pages/dishes/dishes.component';
import NavUser from './components/nav/nav_user.component';
import NavVisitor from './components/nav/nav_visitor.component';

function App () {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(!user);
  };

  return (
    <div>
      {user ? (
        <NavUser logout={login} />
      ) : (
        <NavVisitor login={login} />
      )}
      <Switch>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/dishes' component={DishesPage} />
        </Switch>
      </Switch>
    </div>
  );
}

export default App;
