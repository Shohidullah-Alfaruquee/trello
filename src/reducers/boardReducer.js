import boardActions from '../actions/boardActions';
import idGenerator from '../actions/idGenerator'

const boardReducer = (boards=[], action) => {

    const {
        CREATE_BOARD, 
        DELETE_BOARD, 
        ADD_LIST_ID_TO_A_BOARD,
        ADD_Task_ID_TO_A_BOARD, 
        DELETE_LIST_ID_FROM_A_BOARD,
        DELETE_TASK_ID_FROM_A_BOARD,
        UPDATE_BOARD
    } = boardActions;


    switch(action.type){
        case CREATE_BOARD:
            const board = {};
            board.id = idGenerator();
            board.title = action.payload.title;
            board.listIds = [];
            board.taskIds = [];
            return([...boards, board])
        
        case UPDATE_BOARD: {
            const board = boards.find(board => board.id === action.payload.id);
            board.title = action.payload.title || board.title;
            return [...boards]
        }
        
        case DELETE_BOARD:{
            return boards.filter(board => board.id !==action.payload.id);
        }
        case ADD_LIST_ID_TO_A_BOARD:{
            const board = boards.find(boardItem => boardItem.id ===action.payload.id);
            board.listIds.push(action.payload.listId);

            return [...boards]
        }

        case DELETE_LIST_ID_FROM_A_BOARD: {
            const board = boards.find(boardItem => boardItem.id ===action.payload.id);
            const ids = board.listIds;
            board.listIds = ids.filter(id => id !== action.payload.listId)

            return [...boards]
        }

        case DELETE_TASK_ID_FROM_A_BOARD: {
            const board = boards.find(boardItem => boardItem.id ===action.payload.id);
            const ids = board.taskIds;
            board.taskIds = ids.filter(id => id !== action.payload.taskId)
            return [...boards]
        }

        case ADD_Task_ID_TO_A_BOARD:{
            const board = boards.find(boardItem => boardItem.id ===action.payload.id);
            board.taskIds.push(action.payload.taskId);

            return [...boards]
        }

        default:
            return boards
    }

};

export default boardReducer