import {createContext, useReducer} from "react";
import boardReducer from '../reducers/boardReducer'


export const BoardContext = createContext();

const BoardContextProvider = (props) => {
    const [boards, dispatchBoardAction] = useReducer(boardReducer, [])

    return(
        <BoardContext.Provider value={{boards, dispatchBoardAction}}>
            {props.children}
        </BoardContext.Provider>
    )
}

export default BoardContextProvider