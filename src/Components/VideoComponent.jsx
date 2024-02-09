import React from 'react'
import Fashion from "../assets/Fashion.jpg"

const VideoComponent = () => {
  return (
    <div className='videoSec'>
      <div className="videoContent">
        {/* <video playsInline controls autoPlay>
          <source href="https://www.youtube.com/watch?v=RR4AvUf1jtg"></source>
        </video> */}
         <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RR4AvUf1jtg?si=IpGx10ZIS3iPYffX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; muted; autoplay; loop;"  allowfullscreen></iframe>
      </div>
    </div>
  )
}


// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop; muted" 

export default VideoComponent
