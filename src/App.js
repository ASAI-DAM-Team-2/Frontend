import React, {useState} from 'react';
import './App.css';

import HomePage     from './pages/homepage/homepage.component';
import NavUser      from './components/nav/nav_user.component';
import NavVisitor   from './components/nav/nav_visitor.component';

function App() {

    const [user, setUser] = useState(false);

    const login = () => {
        setUser(!user);
    }

  return (
    <div>
        {user ? <NavUser logout={login}></NavUser> : <NavVisitor login={login}></NavVisitor>}
      <HomePage></HomePage>
    </div>
  );
}

export default App;
