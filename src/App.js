import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import NavUser from './components/nav/nav_user.component';
import NavVisitor from './components/nav/nav_visitor.component';

function App() {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(!user);
  };

  const MealsPage = () => (
    <div>
      <h1>Meals PAGE</h1>
    </div>
  );

  return (
    <div>
      {user ? (
        <NavUser logout={login}></NavUser>
      ) : (
        <NavVisitor login={login}></NavVisitor>
      )}
      <Switch>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={MealsPage} />
        </Switch>
      </Switch>
    </div>
  );
}

export default App;
