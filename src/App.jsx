import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddClick(e) {
    let todoInput = document.getElementById("todo");
    if (todoInput.value.length > 0) {
      let todosCopy = [...todos];
      todosCopy.push(todoInput.value);
      setTodos(todosCopy);
      todoInput.value = "";
    }
    // console.log(todos);
  }

  return (
    <div>
      <div className="form-container">
        <input id="todo" placeholder="Type here..." />
        <button onClick={handleAddClick}>Add</button>
      </div>
      <div className="lists-container">
        <ul>
          {todos.map((d, index) => (
            <li key={`${d}-${index}`}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
