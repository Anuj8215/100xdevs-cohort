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

//---------------------Assignmet------------------//


import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return <div>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <Todo id={1} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then ( response => {
        setTodo(response.data.todo)
      } )
  },[]) 

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;