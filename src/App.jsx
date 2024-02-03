import { useState, useEffect } from 'react'
import { ToDoProvider } from './contexts'
import ToDoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'
import './App.css'

function App() {
  
  const [toDoList, setToDoList] = useState([]);

  const addToDo = (toDo) => {
    setToDoList((prev) => [{id:Date.now(), ...toDo}, ...prev]);  //Update the state
  }

  const updateToDo = (id, ToDo) => {
    setToDoList((prev) => prev.map((prevToDo) => prevToDo.id === id ? ToDo : prevToDo));
  }

  const deleteToDo = (id) => {
    setToDoList((prev) => prev.filter((ToDo) => ToDo.id !== id));
  }

  const toggleComplete = (id) => {
    setToDoList((prev) => prev.map((ToDo) => ToDo.id === id ? {...ToDo, completed: !ToDo.completed} : ToDo));
  }

  useEffect(() => {
    const toDoList = JSON.parse(localStorage.getItem("toDoList"));
    if (toDoList && toDoList.length > 0) setToDoList(toDoList);
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);
  return (
    <ToDoProvider value={{toDoList, addToDo, updateToDo, deleteToDo, toggleComplete}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {toDoList.map((toDo) => (
                          <div key={toDo.id}
                          className='w-full'
                          >
                            <ToDoItem toDo={toDo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
      <h1 className='text-orange-500 pd-2 bg-black'>Alok</h1>
      </ToDoProvider>
  )
}

export default App
