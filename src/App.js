import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Prepare Food', 'Host a meeting', 'Play with dog']);
  const [input, setInput] = useState('');
  console.log(input);

  const addTodo = (event) => {
    //This will fire off when we click the button
    console.log("I am working");
    setTodos([...todos, input]);

  }

  return (
    <div className="App">
      <h1>Welcome to Todos</h1>
      <input type="text" value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={addTodo}>Add Todos</button>

      <ul>
        {todos.map(todo => (
          <li> {todo}</li>
        ))}
      </ul>
    </div >
  );
}

export default App;
