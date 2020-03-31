import React, {useState} from 'react';
import './App.css';

import HomePage     from './pages/homepage/homepage.component';
import NavUser      from './components/nav/nav_user.component';
import NavVisitor   from './components/nav/nav_visitor.component';

function App() {

    const [user, setUser] = useState(false);

  return (
    <div>
        {user ? <NavUser></NavUser> : <NavVisitor></NavVisitor>}
      <HomePage></HomePage>
    </div>
  );
}

export default App;
