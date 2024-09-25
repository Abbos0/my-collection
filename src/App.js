




import React, { useRef, useState } from 'react';
import './App.css';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [videoSrc, setVideoSrc] = useState(null);
  const [fileName, setFileName] = useState('No file chosen'); // Fayl nomi

  const handleSpeedChange = (event) => {
    const newSpeed = parseFloat(event.target.value);
    setPlaybackRate(newSpeed);
    videoRef.current.playbackRate = newSpeed;
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setFileName(file.name); // Fayl nomini yangilash
    }
  };

  return (
    <div className="video-player-container">
      <div className="custom-file-upload">
        <label htmlFor="file-upload" className="custom-upload-button">
          Upload video
        </label>
        <input
          id="file-upload"
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
        />
        <span>{fileName}</span>
      </div>
      {videoSrc ? (
        <div>
          <video ref={videoRef} width="600" controls src={videoSrc}>
            Your browser does not support the video.
          </video>
          <div className="speed-control">
            <label>Change speed: </label>
            <input
              type="range"
              min="0.07"
              max="2"
              step="0.01"
              value={playbackRate}
              onChange={handleSpeedChange}
            />
            <span>{playbackRate}x</span>
          </div>
        </div>
      ) : (
        <p>Please upload a video.</p>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Video Player with Speed Control</h1>
      <VideoPlayer />
    </div>
  );
}

export default App;
