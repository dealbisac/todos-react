import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Prepare Food', 'Host a meeting', 'Play with dog']);
  const [input, setInput] = useState('');
  console.log(input);

  const addTodo = (event) => {
    //This will fire off when we click the button
    //stoping the refreshing.
    event.preventDefault();

    console.log("I am working");
    setTodos([...todos, input]);

    //clear the input field.
    setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome to Todos</h1>
      {/* form to submit on enter */}
      <form>
        <FormControl>
          <InputLabel>Enter your Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} onClick={addTodo} >
          Add Todos
         </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <li> {todo}</li>
        ))}
      </ul>
    </div >
  );
}

export default App;
