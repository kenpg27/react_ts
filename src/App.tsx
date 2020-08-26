import React from 'react';
import './App.css';
import User from './User';
import Count from './Count';
import Ref from './Ref';
import Memo from './Memo';
function App() {
  return (
    <div className="App">
      <User name='vortesnail' age={25}>这里是children</User>
      <Count initial={0}></Count>
      <Ref></Ref>
      <Memo></Memo>
    </div>
  );
}

export default App;
