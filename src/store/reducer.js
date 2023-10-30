import { SET_DATA_INPUT } from "./constants";
const initState = {
    todos: [],
    todoInput : ''
}

 function reducer (state, action) {
    // return ''
    switch (action.type) {
        case SET_DATA_INPUT: return {
            ...state,
            todoInput: action.payload
        }
            
            break;
    
        default: throw new Error("invalid action")
            break;
    }

 }

 export {initState}
 export default reducer