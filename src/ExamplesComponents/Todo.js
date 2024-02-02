import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputText, completed: false }]);
      setInputText('');
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter todo..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

/*
To create a simple Todo list in React, you can follow these steps:

Set up a new React project using Create React App or any other method you prefer.
Create a new component called TodoList.
Manage the list of todos using React state.
Implement functionalities to add new todos, mark todos as completed, and delete todos.
Render the list of todos in the component.
Here's a basic example of how you can create a Todo list component in React:

In this example:

We use the useState hook to manage the state of the todo list and the input field for adding
 new todos.
The handleInputChange function updates the input text state as the user types.
handleAddTodo adds a new todo to the list when the user clicks the "Add Todo" button.
handleToggleComplete toggles the completion status of a todo item when the user clicks its
 checkbox.
handleDeleteTodo removes a todo item from the list when the user clicks the "Delete" button.
Todos are rendered as list items (<li>) with checkboxes, todo text, and delete buttons.
The textDecoration style is applied dynamically based on the completion status of each todo item. 
Completed todos have a line-through style to indicate completion.
You can include the TodoList component in your main application component and start using your 
Todo list application in React.

*/
 
