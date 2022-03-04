import listActions from '../actions/listActions';


const listReducer = (lists=[], action) => {

    const {
        CREATE_LIST, 
        DELETE_LIST, 
        ADD_Task_ID_TO_A_LIST, 
        DELETE_TASK_ID_FROM_A_LIST,
        UPDATE_LIST
    } = listActions;


    switch(action.type){
        case CREATE_LIST:
            const list = {};
            list.id = action.payload.id;
            list.title = action.payload.title;
            list.boardId = action.payload.boardId;
            list.taskIds = [];
            return([...lists, list])
        
        case UPDATE_LIST: {
            const list = lists.find(list => list.id === action.payload.id);
            list.title = action.payload.title || list.title;
            return [...lists]
        }
        
        case DELETE_LIST:{
            return lists.filter(list => list.id !==action.payload.id);
        }

        case ADD_Task_ID_TO_A_LIST:{
            const list = lists.find(listItem => listItem.id ===action.payload.id);
            list.taskIds.push(action.payload.taskId);

            return [...lists]
        }

        case DELETE_TASK_ID_FROM_A_LIST: {
            const list = lists.find(listItem => listItem.id ===action.payload.id);
            const ids = list.taskIds;
            list.taskIds = ids.filter(id => id !== action.payload.taskId)
            return [...lists]
        }

        default:
            return lists
    }

};

export default listReducer