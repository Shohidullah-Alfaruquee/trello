import React, {useState, useContext} from "react";
import { TaskContext } from "../context/TaskContext";
import { ListContext } from "../context/ListContext";
import { BoardContext } from "../context/BoardContext";

import taskActions from "../actions/taskActions";
import listActions from "../actions/listActions";
import boardActions from '../actions/boardActions'
import idGenerator from "../actions/idGenerator";



const Task = ({list}) => {
    const [ taskName, setTaskName] = useState('');
    // const [ taskEditMode, setTaskEditMode] = useState(false);
    // const [ editableTask, setEditableTask] = useState(null);
    // const [ taskFormDisplay, setTaskFormDisplay] = useState(false)
    const { tasks:allTask, dispatchTaskAction } = useContext(TaskContext);
    const { dispatchListAction} = useContext(ListContext)
    const { dispatchBoardAction} = useContext(BoardContext)


    const {
        CREATE_TASK,

    } = taskActions;

    const {
        ADD_Task_ID_TO_A_LIST

    } = listActions;

    const {
        ADD_Task_ID_TO_A_BOARD
    } = boardActions;

    const taskFormSubmitHandler = (e) => {
        e.preventDefault()
        if(taskName){
            const listId = list.id;
            const id = idGenerator();
            const title = taskName;
            const boardId = list.boardId;
            const task = {
                id,
                title,
                listId,
                boardId
            };
    
            dispatchTaskAction({
                type:CREATE_TASK,
                payload:task
            })
            dispatchListAction({
                type:ADD_Task_ID_TO_A_LIST,
                payload: {
                    id:list.id,
                    taskId: task.id
                }
    
            })
            dispatchBoardAction({
                type: ADD_Task_ID_TO_A_BOARD,
                payload:{
                    id: list.boardId,
                    taskId : task.id,
                }
            })
    
    
            
            setTaskName("")
        }else{
            alert("please provide a valid task")
        }

    };
    



    return (
      <>
      <form onSubmit={(e)=>taskFormSubmitHandler(e)}>
          <input type="text" placeholder="Enter Task Name" value={taskName} onChange={(e)=>setTaskName(e.target.value)} />
          <button onClick={(e)=>taskFormSubmitHandler(e)}>Add Task</button>
      </form>

      <div className="task-container">
          {
              allTask?.filter(item => item.listId===list.id)?.map(item => (
                <div className="task-card" key={item.id}>
                    <p>{item.title}</p>
                    <p>Board id: {item.boardId}</p>
                    <p>list id: {item.listId}</p>
                </div>
              ))
          }
      </div>
        
      </>
    );
};
export default Task