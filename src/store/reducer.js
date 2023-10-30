import { SET_DATA_INPUT, ADD_DATA } from "./constants";
const initState = {
    datas: [],
    dataInput : ''
}

 function reducer (state, action) {
    // return ''
    switch (action.type) {
        case SET_DATA_INPUT: return {
            ...state,
            dataInput: action.payload
        }            
        break;
        case ADD_DATA: return {
            ...state,
            // dataInput: action.payload
            datas : [...state.datas, action.payload]
        }          
            break; 
        default: throw new Error("invalid action")
            break;
    }

 }

 export {initState}
 export default reducer