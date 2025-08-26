/*
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


function App() {
  const [todo, setTodos] = useState([]);

useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function (response) {
      setTodos(response.data.todos);
    });
  }, []);

  return (
    <>
      {todo.map((todo) => (
        <Todo title={todo.title} key={todo.id} description={todo.description} />
      ))}
    </>
  ); 
}
function Todo({ title, description }) {
    return (
      <>
        <h1>{title}</h1>
        <p>{description}</p>
      </>
    );
  }
export default App;
 */

//--------------------- Use Effect (Assignmet) ------------------//
/*
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [selectedId, setSelectedId] = useState(1);
  return (
    <div>
      <button onClick={function () {setSelectedId(1); }}>Todo 1 </button>
      <button onClick={function () {setSelectedId(2); }}>Todo 2 </button>
      <button onClick={function () {setSelectedId(3); }}>Todo 3 </button>
      <button onClick={function () {setSelectedId(4); }}>Todo 4 </button>
      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id).then((response) => {
      setTodo(response.data.todo);
    });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}
f
export default App;
*/

//---------------------UseMemo------------------//
/*

import { useMemo, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(1);
  const [counts, setCount] = useState(0);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
      console.log("Memo is called");
    return finalCount;

  }, [inputValue]); 
  

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to N"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={function () {
          setCount(counts + 1);
        }}
      >
        {" "}
        The counter is {counts}
      </button>
    </div>
  );
}
export default App;
*/

//---------------------UseCallback------------------//

// Remaining
//---------------------Custom Hooks------------------//


