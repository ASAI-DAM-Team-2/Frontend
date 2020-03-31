import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Nav      from './components/nav/nav.component';

function App() {
  return (
    <div>
        <Nav></Nav>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
