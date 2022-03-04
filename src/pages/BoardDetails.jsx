import React, {useContext, useState} from 'react';
import {BoardContext} from '../context/BoardContext';
import {ListContext} from '../context/ListContext';


import { useParams } from 'react-router-dom';

import listActions from '../actions/listActions';
import idGenerator from '../actions/idGenerator';
import Task from '../componenst/Task';

 
const BoardDetails = () => {
    const [listName, setListName] = useState('');
    const [listEditMode, setListEditMode] = useState(false);
    const [editableList, setEditableList] = useState(null);



    const {boards} = useContext(BoardContext);
    const {lists, dispatchListAction} = useContext(ListContext)
    const {boardId} = useParams()
    const boardDesc = boards.find(item => item.id === boardId);


    const {
        CREATE_LIST, 
        UPDATE_LIST
    } = listActions;


   
    const listFormSubmitHandler = (e, ) => {
        e.preventDefault()
        if(listEditMode){
            dispatchListAction({
                type: UPDATE_LIST,
                payload:{
                    id: editableList.id,
                    title: listName || editableList.title,
                }
            })
            setListName('')
            setListEditMode(false)
            setEditableList(null);
        }else{
            if(listName){
                dispatchListAction({
                    type: CREATE_LIST,
                    payload: {
                        id: idGenerator(),
                        title: listName,
                        boardId: boardId
                    }            
                })
                setListName('')
            }else{
                alert("Please provide a valid list name")
            }
        }
    }

    const editListBtnHandler = (listId) => {
        const listTobeEdited = lists.find(list =>list.id ===listId);
        setEditableList(listTobeEdited)
        setListEditMode(true);
        setListName(listTobeEdited.title)
    }

    

    return(
        <>
        <h1>{boardDesc.title} </h1>
        <form onSubmit ={(e)=>listFormSubmitHandler(e)}>
            <input type="text" value={listName} onChange={(e)=>setListName(e.target.value)} />
            <button onClick={(e)=>listFormSubmitHandler(e)}>{listEditMode?"Update List" : "Create List"}</button>
        </form>
        <div className="list-container">
            {
                lists?.filter(list => list.boardId === boardId)
                ?.map(item => (
                    <div className="list-card" key={item.id}>
                        <div>
                            <h1>{item.title}</h1> 
                            <button>Delete List</button>
                            <button onClick={()=>editListBtnHandler(item.id)}>Edit List</button>
                        </div>
                        <Task list = {item} key={item.id}/>

                    </div>
                ))
            }
        </div>
        </>);
};
export default BoardDetails