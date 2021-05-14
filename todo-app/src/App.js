import React, { useState , useEffect} from "react";
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import "./App.css";
import Todo from "./Todos"; 
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

useEffect(() => {
   db.collection("todos").orderBy('timestamp','desc').onSnapshot(onSnapshot=>{
     //doc.data() will give object and to access todo value from that object we need to write doc.data().todo
     setTodos(onSnapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo})))
   })
}, [])


  const addTodo = (event) => {
  
    db.collection("todos").add({
      todo:input,
      timestamp :firebase.firestore.FieldValue.serverTimestamp()
    })
    event.preventDefault(); //will stop the refresh after adding note by the button because its type is submit and submit refreshes the page after pressing enter....
    setTodos([...todos, input]);
      setInput("");
   
   
  };
  return (
    <div className="App">
      <h1> Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a TODO</InputLabel>
          <Input value={input}
          onChange={(event) => setInput(event.target.value)}> </Input>
        </FormControl>

         <Button disabled={!input} variant="contained" type="submit" onClick={addTodo} color="primary">🔥Add todo</Button>
  
      </form>

      <ul>
        {todos.map((todo) => (
         <Todo todo={todo}></Todo>
        ))}
      </ul>
    </div>
  );
}

export default App;
