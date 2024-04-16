import { create } from "zustand"

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (newTodo) => {
    set((state) => ({todos: [...state.todos, newTodo]}))
  },

  deleteTodo: (id) => {
    set(state => {
      const newTasks = [...state.todos];
      newTasks.splice(id, 1);
      return { todos: newTasks };
    })
  },
 /*
  completeTodo: () => {
    set()
  },*/
}))

 