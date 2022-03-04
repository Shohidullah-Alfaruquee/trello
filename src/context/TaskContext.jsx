import {createContext, useReducer} from "react";
import taskReducer from '../reducers/taskReducer'


export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, dispatchTaskAction] = useReducer(taskReducer, [])

    return(
        <TaskContext.Provider value={{tasks, dispatchTaskAction}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider