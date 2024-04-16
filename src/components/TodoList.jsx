import { useTodoStore } from "../store/useTodoStore.jsx";
import { useState } from "react"

export const TodoList = () => {
  const { todos, addTodo, deleteTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState ("");


  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }
  
  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }

   const handleDelete = (index) => {
    deleteTodo(index, todos)
  }

 

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text"
            value={newTodo}
            onChange={handleChange} />
          <button type="submit">Add task</button>
        </form>
      </div>
      <div>
        {todos.map((todo, index) => (
        <div key={index}>
          <p value={index}>{todo}</p>
          <button 
          value={index}
          onClick={() => handleDelete(index, todos)}>DELETE</button>
        </div>
        ))}
      </div>
    </>
  );
};
