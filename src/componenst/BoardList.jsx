import React, {useContext, useState} from 'react';
import {BoardContext} from '../context/BoardContext';
import boardActions from '../actions/boardActions';
import { Link } from 'react-router-dom';
 
const BoardList = () => {
    const [boardName, setBoardName] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [ editableBoard, setEditableBoard] = useState(null)
    const {boards, dispatchBoardAction} = useContext(BoardContext);

    const {
        CREATE_BOARD,
        UPDATE_BOARD,
        DELETE_BOARD

    } = boardActions

    const boardFormSubmitHandler = (e, board) => {
        e.preventDefault();
        if(editMode){
            dispatchBoardAction({
                type: UPDATE_BOARD,
                payload: {
                    id: editableBoard.id,
                    title: boardName||editableBoard.title
                }
            });
            setEditMode(false)
            setEditableBoard(null)
            setBoardName("")
        }else{
            if(boardName){
                dispatchBoardAction({
                    type: CREATE_BOARD,
                    payload: {
                        title: boardName
                    }
                });
                setBoardName("")
            }else{
                alert("Please write a proper board name")
            }
        }

    }

    const editBtnHandler = (boardId) => {
        const boardTobeEdited = boards.find(item => item.id ===boardId)
        setEditMode(true);
        setBoardName(boardTobeEdited.title);
        setEditableBoard(boardTobeEdited)
    }

    const deleteBoardHandler = (boardId) =>{
        dispatchBoardAction({
            type: DELETE_BOARD,
            payload: {id: boardId}
        })
    } 



    return(
        <>
        <form onSubmit={(e)=>boardFormSubmitHandler(e)}>
            <input type="text" value={boardName} onChange={(e)=>setBoardName(e.target.value)} />
            <button onClick={(e)=>boardFormSubmitHandler(e)}>{editMode?"Update Board":"Create Board"}</button>
        </form>

        <div className="board-container">
            {
                boards?.map(board => (
                    
                        <div className="board-card" key={board.id}>
                            <h1>{board.title}</h1>
                            <p>Number of List of this board: {board.listIds.length}</p>
                            <p>Number of Task of this board: {board.taskIds.length}</p>
                            <Link  to={`/board/${board.id}`}>
                                <p>Board Details</p>
                            </Link>
                            <button onClick={()=>editBtnHandler(board.id)}>Edit</button>
                            <button onClick={()=>deleteBoardHandler(board.id) }>Delete Board</button>
                        </div>
                    
                ))
            }
        </div>
        </>);
};
export default BoardList