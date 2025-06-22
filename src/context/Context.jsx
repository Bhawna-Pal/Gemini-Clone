import { createContext, useState } from "react";
// import service from "../components/Main/Main";
import service from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

     const [input, setInput] = useState("");
     const [recentPrompt, setRecentPrompt] = useState("");
     const [prevPrompts, setPrevPrompts] = useState([]);
     const [showResult, setShowResult] = useState(false);
     const [loading, setLoading] = useState(false);
     const [resultData, setResultData] = useState([]); 
      

<<<<<<< Updated upstream
    const onSent = async () => {
      if (!input.trim()) return; 
      setLoading(true);
      setShowResult(false);
      // setResultData(""); // clear previous result
      try {
        const response = await service(input); 
        setResultData(prev => [...prev, response]); 
        console.log("Response from service:", response);
        setShowResult(true);
        setInput(""); 
      } catch (error) {
        setResultData(prev => [...prev, "Something went wrong. Please try again."]);
        setShowResult(true);
      } finally {
        setLoading(false);
=======
    const onSent = async() =>{
      try{
        setResultData("")
        setLoading(true)
        setShowResult(true)

       const response = await service(input)
       setResultData(...response)
       setLoading(false)
       setInput("")
       
      }catch(error){
         console.log("error is in context file :", error)
>>>>>>> Stashed changes
      }
    }

   

    const contextValue = {
       prevPrompts,
       setPrevPrompts,
       onSent,
       setRecentPrompt,
       recentPrompt,
       loading, 
       resultData, 
       input,
       setInput
    }

   return(
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
   )
}

export default ContextProvider