import React from 'react';
import './App.css';
import Diagram from './components/Diagram/Diagram';


function App() {
  return (
    <div className="App">
      <Diagram data-testid="diagram"></Diagram>
    </div>
  );
}

export default App;
