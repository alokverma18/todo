import React, {useState} from 'react'
import {useToDo} from '../contexts/ToDoContext';

function ToDoForm() {

    const [toDo, setToDo] = useState("");
    const {addToDo} = useToDo();

    const addToDoHandler = (e) => {
        e.preventDefault();
        if (!toDo) return;
        addToDo({id: Date.now(), todo: toDo, completed: false});
        setToDo("");
    }
  return (
    <form onSubmit={addToDoHandler}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={toDo}
              onChange={(e) => setToDo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  )
}

export default ToDoForm