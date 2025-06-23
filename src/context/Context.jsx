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
      
     const delayPara = (index,nextWord) => {
         setTimeout(function () {
            setResultData(prev => prev+nextWord)
         }, 75*index)
     }

    const onSent = async () => {
      if (!input.trim()) return;
      setLoading(true);
      setShowResult(true);
      let response;
       if (prompt !== undefined) {
            response = await service(prompt);
            setRecentPrompt(prompt)
       } 
       else {
           setPrevPrompts(prev =>[...prev,input])
           setRecentPrompt(input)
           response = await service(input)
       }
      // setResultData(""); // clear previous result
      try {
        const response = await service(input); 
      
        let responseArray = response.split("**");
        let newResponse=" ";
        for(let i = 0; i < responseArray.length; i++) {
          if(i === 0 || i%2 !== 1){
            newResponse += responseArray[i];
          }
          else {
            newResponse += "<b>" + responseArray[i] + "</b>";
          }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
         let newResponseArray = newResponse2.split(" ");

         for(let i=0; i< newResponseArray.length; i++) {
          const nextWord = newResponseArray[i];
          delayPara(i,nextWord+" ");
         }
        // setResultData(prev => [...prev, newResponse2]); 
        console.log("Response from service:", response);
        setShowResult(true);
        setRecentPrompt(input);
        setPrevPrompts(prev =>[...prev, input])
        setInput(""); 
      } catch (error) {
        setResultData(prev => [...prev, "Something went wrong. Please try again."]);
        setShowResult(true);
      } finally {
        setLoading(false);
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