
import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import Response  from '../Input/Response'
import { Context } from '../../context/Context'





function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);


  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">


        {resultData.length === 0  && !loading ? (
          <>
            <div className="greet">
              <p><span>Hello, Dev.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result-section">
            <div className="result-title">
                 <img src={assets.user_icon} alt="" />
                 <p>{recentPrompt}</p>
                </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" /> 
            
              {loading
              ? (<div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
              ): (<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              )}
               {/* {(
              <Response resultData={resultData} />
            )} */}
            </div>
           
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Enter a prompt here'
              disabled={loading}
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              {input?<img
                onClick={() => !loading && onSent()}
                src={assets.send_icon}
                alt="Send Icon"
                // style={{ cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.5 : 1 }}
              />:null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
