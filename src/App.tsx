import { useState, useEffect } from 'react'
import './App.css'
import Webcam from "react-webcam";
import Chat from './components/Chat';
import StreamInfo from "./components/StreamInfo";
import AnimatedNumbers from "react-animated-numbers";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

function App() {

  const [streamName,setStreamName] = useState("");
  const [streamUser,setStreamUser] = useState("");
  const [isToggled, setIsToggled] = useState(false);


  const handleStreamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreamName(event.target.value);
  };

  const handleStreamUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreamUser(event.target.value);
  };

  return (
    <div>
      {!isToggled &&
      <div className='center-div'>
        <div className='form__group field'>
        <input className='form__field' type="text" value={streamName} onChange={handleStreamNameChange} />
          <label id="title" placeholder="Stream Title" htmlFor="title" className='form__label' >Stream Title:</label>
        </div>
        <div className='form__group field'>
          <input  className='form__field' type="text" value={streamUser} onChange={handleStreamUserChange} />
          <label id="name" htmlFor="name" className='form__label'>Streamer Name:</label>
        </div>
        <button className="start-button" role="button" onClick={() => setIsToggled(!isToggled)}  > <span className="text">Start Stream</span> </button>

      </div>
      }
    {isToggled && <div className='flex background'>
      <div className='webcam-container'>
        <Webcam 
        width={815}
        height={460}
        videoConstraints={videoConstraints}
        className="video"
        />
        <StreamInfo 
          streamName={streamName}
          streamUser={streamUser}  
        />
      </div>
    <Chat/>
    </div>}
    </div>
  )
}

export default App
