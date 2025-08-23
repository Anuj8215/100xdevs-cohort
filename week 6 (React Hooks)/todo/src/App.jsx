import React from 'react';
import { useState } from 'react';
function App() {
  // State for todos
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React from scratch",
    },
    {
      id: 2,
      title: "Learn React",
      description: "Learn React from Youtube",
    },
    {
      id: 3,
      title: "Learn React",
      description: "Learn React from Udemy",
    }
  ]);

  // Function to add a new todo
  function addTodo() {
    setTodo([
      ...todos,
      {
        id: Math.random(),
        title: Math.random(),
        description: Math.random()
      }
    ]);
  }

  // Render the UI
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}
// Todo component
function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;
