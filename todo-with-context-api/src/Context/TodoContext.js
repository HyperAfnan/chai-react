/* eslint-disable no-unused-vars */
import { useContext , createContext } from "react";

export const TodoContext  = createContext({
   todos: [
      {
         id: 1,
         todo: "Todo message",
         completed: false
      },
      {
         id: 2,
         todo: "Done task",
         completed: true
      },
   ],
   addTodo: () => {},
   updateTodo: (id, todo) => {},
   deleteTodo: (id) => {},
   toggleComplete: () => {}
})

export const TodoContextProvider = TodoContext.Provider;

// TODO: from here
export const useTodo = () => {
   return useContext(TodoContext)
}
