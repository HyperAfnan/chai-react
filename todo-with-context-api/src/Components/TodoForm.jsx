import { useState } from "react";
import { useTodo } from "../Context/TodoContext.js";

//TODO: test run this addTodo bug
function TodoForm() {
   const [todo, setTOdo] = useState("")
   const { addTodo } = useTodo();

   const add = (e) => {
      e.preventDefault()
      if (!todo) return

      addTodo({ todo, completed:false })
      setTOdo("")
   }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
               onChange={e => setTOdo(e.target.value) }
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
export default TodoForm;
