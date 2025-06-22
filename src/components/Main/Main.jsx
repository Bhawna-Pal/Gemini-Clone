<<<<<<< Updated upstream
import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import Response from '../Input/Response'
import { Context } from '../../context/Context'

function Main() {
  const { onSent, showResult, loading, resultData, setInput, input } = useContext(Context);
=======
import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

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
>>>>>>> Stashed changes

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
<<<<<<< Updated upstream
        {!resultData.length > 0 ? (
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
            {(
              <Response resultData={resultData} />
            )}
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
              <img
                onClick={() => !loading && onSent()}
                src={assets.send_icon}
                alt="Send Icon"
                style={{ cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.5 : 1 }}
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
=======
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an uocoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstrom team bonding acticites for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>


              input
            </div>
          </>
        ) : (
          <div className="result">
            <p>
              React is a JavaScript library for building user interfaces,
              developed by Facebook. It's used to create interactive UI
              components for web and mobile applications. React is known for its
              component-based structure, allowing for reusable UI elements and
              efficient updates. Here's a more detailed explanation: User
              Interface Library: React is focused on the "view" part of the
              Model-View-Controller (MVC) architecture, meaning it handles how
              users interact with the application. Component-Based: React
              applications are built from reusable components, which are like
              building blocks for the UI.{" "}
            </p>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Ypur privacy and Gemini Apps
>>>>>>> Stashed changes
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
