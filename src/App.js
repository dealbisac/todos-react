import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  //console.log(input);

  // When the app loads, we need to listen to the database and fetch new todos as they added or removed.
  useEffect(() => {
    //This code here .. fires when the App.js loads
    //Showing from DB (READ)
    db.collection('todos').onSnapshot((snapshot) => {
      //console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    //This will fire off when we click the button
    //stoping the refreshing.
    event.preventDefault();

    //Writing to DB (CREATE)
    db.collection('todos').add({
      todo: input
    })

    //console.log("I am working");
    //setTodos([...todos, input]);

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

        <Button type="submit" disabled={!input} onClick={addTodo} >
          Add Todos
         </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo jpani={todo} />
        ))}
      </ul>
    </div >
  );
}

export default App;
