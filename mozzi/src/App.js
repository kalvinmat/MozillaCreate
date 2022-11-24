import React, { useState, useEffect } from 'react'
import './App.css'
import logo from './reality_icon.png'

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function App() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    const handleListen = () => {
      if (isListening) {
        mic.start()
        mic.onend = () => {
          console.log('continue..')
          mic.start()
        }
      } else {
        mic.stop()
        mic.onend = () => {
          console.log('Stopped Mic on Click')
        }
      }
      mic.onstart = () => {
        console.log('Mics on')
      }

      mic.onresult = event => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
        console.log(transcript)
        setNote(transcript)
        mic.onerror = event => {
          console.log(event.error)
        }
      }
    };

    handleListen();

  }, [isListening])


  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
  }

  return (
    <>
      
     
      <div className="container">
        <div className="box">
       
        <h1>Mozi Demo</h1>
        <h2><img src={logo} alt='Logo' style={{ width: "100px", height:"100px"}}  /></h2>

          {isListening ? <span></span> : <span></span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Search
          </button>
          <button onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>

          <p>{note}</p>
          {/* <div className="box-2">
          
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div> */}
        </div>
       
        
      </div>
    </>
  )
}

export default App