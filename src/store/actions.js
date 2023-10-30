import { SET_DATA_INPUT, ADD_DATA } from "./constants";


export const setDataInput = payload => ({
    type: SET_DATA_INPUT,
    payload

})

export const addData = payload => ({
    type: ADD_DATA,
    payload

})