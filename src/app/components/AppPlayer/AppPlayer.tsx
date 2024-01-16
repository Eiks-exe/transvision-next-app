'use client'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import React from 'react'
import Player from 'video.js/dist/types/player';

type Props = {
  className?: string
  liveSrc: string
}

const AppPlayer = (props: Props) => {
    let player : Player
    const videoRef = React.useRef(null);
    const videoOptions = {
        autoplay: true,
        controls: true,
        width:"920",
        height:"480",
        sources: [{
            src: props.liveSrc,
        }]
    };

   

    React.useEffect(() => {
        if (videoRef.current) {
            player = videojs(videoRef.current, videoOptions);
          }
        
          return () => {
            if (player) {
              player.dispose();
            }
          };
      }, [videoRef]);

    return (
        <div data-vjs-player>
        <video ref={videoRef} className={`video-js ${props.className}`} />
        </div>
    )
}

export default AppPlayer