import React from 'react';
import './App.css';
import User from './User';
import Count from './Count';
function App() {
  return (
    <div className="App">
      <User name='vortesnail' age={25}>这里是children</User>
      <Count initial={0}></Count>
    </div>
  );
}

export default App;
