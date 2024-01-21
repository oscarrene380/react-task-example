import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as tareas } from "../data/tasks"

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(taskTitle, taskDescription) {
        const newTask = {
            title: taskTitle,
            id: tasks.length,
            description: taskDescription,
        };
        setTasks([...tasks, newTask]);
    }
    
    function deleteTask(id)
    {
        setTasks(tasks.filter(e => e.id !== id))
    }

    useEffect(() => {
        setTasks(tareas);
    }, []);

    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}
