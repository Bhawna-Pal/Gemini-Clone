import { createContext } from "react";
// import service from "../components/Main/Main";
import service from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

   

    const onSent = async(prompt) =>{
       await service(prompt)
    }

    onSent("what is react js")

    const contextValue = {

    }

   return(
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
   )
}

export default ContextProvider