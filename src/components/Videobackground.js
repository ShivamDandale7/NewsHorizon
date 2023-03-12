import React from 'react'
import video from "./video.mp4";
import "../styles.css";


export const Videobackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      {/* add your other components and content here */}
    </div>
  )
}