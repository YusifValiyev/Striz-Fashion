import React from 'react'
import { HiOutlineX } from 'react-icons/hi'
import disableScroll from 'disable-scroll';
import YoutubeVideo from '../../../Assets/Video.mp4'
import './Video.css'
import '../SummerCollection/Summer.css'
function Video({ videoo, setVideo }) {
  const handleClick = () => {
    setVideo(null);
    disableScroll.off()
  }
  return (
    <div id='videoo' className={videoo}>
      <div className="video-player">
        <HiOutlineX onClick={handleClick} />
        <video width="1000" height="600"  controls>
          <source src={YoutubeVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Video