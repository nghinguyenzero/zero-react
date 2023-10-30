import { useContext } from "react"
import Context from "./Context"
// import { StoreContext } from ".";
export const useStore = () =>{
    const [state, dispatch] = useContext(Context)
    return [state, dispatch]

}