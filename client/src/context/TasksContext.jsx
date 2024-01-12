import { createContext, useContext, useState } from "react";
import {
    createTaskRequest,
    getTasksRequest,
    deleteTasksRequest,
    getTaskRequest,
    updatetTasksRequest,
} from '../api/tasks.js'

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('use Tasks must be used within a TaskProvider');
    }

    return context;
}



export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    const getTasks = async (task) => {
        try {
            const res = await getTasksRequest(task);
            setTasks(res.data);

        } catch (error) {
            console.error(error); 
        }
    };


   
    const createTask = async (task) => {
        const res = await createTaskRequest(task); 
        console.log(res);
    };




    const deleteTask = async (id) => {
        try {
            const res = await deleteTasksRequest(id);
            if (res.status == 204) setTasks(tasks.filter((task) => task._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id); 
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updateTask = async (id, task) => {
        try {
            await updatetTasksRequest(id, task); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}