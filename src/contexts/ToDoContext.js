import {createContext, useContext} from 'react';

export const ToDoContext = createContext({
    toDoList: [
        { 
            id: 1,
            todo: "Hey, I'm a todo!",
            completed: false,
        },
    ],
    addToDo:  (todo)=> {},
    updateToDo:  (id, todo)=> {},
    deleteToDo:  (id)=> {},
    toggleComplete: (id) => {}
    }
)


export const useToDo = () =>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider
