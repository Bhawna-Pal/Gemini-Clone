import { createContext } from "react";
import Main from "../components/Main/Main";

export const Context = createContext();

const ContextProvider = (props) => {

   

    const onSent = async(prompt) =>{
       await Main(prompt)
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