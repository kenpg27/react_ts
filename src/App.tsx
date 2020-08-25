import React from 'react';
import './App.css';
import User from './User';
function App() {
  return (
    <div className="App">
      <User name='vortesnail' age={25}>这里是children</User>
    </div>
  );
}

export default App;
