import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import logo from "./firefox-icon-256.png";

function App() {

  //url to engine
  const google = "https://www.google.com/search?q=";


  //Default commands for user to use
  const commands = [
    {
      command: "Mozzy search for *",
      callback: (website) => {
        window.open("https://www.google.com/search?q=" + website.split(" ").join(""))
      },
      commmand: "Mozzy change background color to *",
      callback: (color) => {
        document.body.style.background = color;
      },
      command: "Mozzy reset",
      callback: () => {
        handleReset();
      },
      command: "Mozzy reset background color",
      callback: () => {
        document.body.style.background = 'rgba(0,0,0,0.8)';
      }
    }
  ]

  //records everything the user says and reset Transcript resets to empty
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  //Alerts the user that the extension is not viable on their browser
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (<alert
      style={{
        background: "hsla(10, 50%, 50%, .10)",
        padding: "10px",
      }}>
      Your browser does not support This Extension.
    </alert>);
  }

  //Starts the listening process and starts the microphone
  const handleListening = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  //Stops the Listening process
  const stopHandle = (transcript) => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  }

  //Resets the transcript and stops listening
  const handleReset = () => {
    stopHandle();
    resetTranscript();
    if (transcript.length !== 0) {
      searchFor(transcript);
    }
  }

  const searchFor = (props) => {
    window.open(google + props.split(" ").join("+"))
  }


  return (
    <>
      <div className="mozzi-wrapper">
        <img src={logo} />
        <div className="mozzi-container">
          <button className="mozzi-microphone"
            ref={microphoneRef}
            onClick={handleListening}>
            Talk
          </button>
          <div className="mozzi-status">
            {isListening ? "Listening..." : "Click and ask Mozzi"}
          </div>
          {isListening && (
            <button className="mozzi-stop" onClick={stopHandle(transcript)}>
              Stop
            </button>)}
          {transcript && (
            <div className="mozzi-result-container">
              <div className="mozzi-result">
                {transcript}
              </div>
              <button className="mozzi-reset" onClick={handleReset}>
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App