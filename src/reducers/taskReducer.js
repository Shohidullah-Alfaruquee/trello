import taskActions from '../actions/taskActions';
import idGenerator from '../actions/idGenerator'

const taskReducer = (tasks=[], action) => {

    const {
        CREATE_TASK, 
        DELETE_TASK,  
        UPDATE_TASK
    } = taskActions;


    switch(action.type){
        case CREATE_TASK:
            const task = {};
            task.id = idGenerator();
            task.title = action.payload.title;
            task.listId = action.payload.listId;
            task.boardId = action.payload.boardId;
            return([...tasks, task])
        
        case UPDATE_TASK: {
            const task = tasks.find(task => task.id === action.payload.id);
            task.title = action.payload.title || task.title;
            return [...tasks]
        }
        
        case DELETE_TASK:{
            return tasks.filter(task => task.id !==action.payload.id);
        }

        default:
            return tasks
    }

};

export default taskReducer