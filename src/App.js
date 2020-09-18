import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Welcome to Todos</h1>
      <input type="text" />
      <button>Add Todos</button>

      <ul>
        <li>Prepare Food</li>
        <li>Host a meeting</li>
        <li>Play with dog</li>
      </ul>
    </div>
  );
}

export default App;
