import React from 'react'
import HSL from 'hls.js'

interface Props {
    id?: string;
    liveSrc: string;
    className?: string;  
    style?: React.CSSProperties;
    muted?: boolean;     
}


const HslPlayer = ({ id, liveSrc, className, style, muted = false} : Props) => {
    React.useEffect(() => {
        const video = document.getElementById('video') as HTMLVideoElement
        const hls = new HSL()
        hls.loadSource(liveSrc)
        hls.attachMedia(video)
        hls.on(HSL.Events.MANIFEST_PARSED, function () {
            video.play()
        })
    }, [])
  return (
    <div>
        <video 
            id={`video-${id}`} 
            src="" 
            className={`rounded-xl ${className}`} 
            style={style}
            muted={muted}
            controls
            autoPlay
        >
        </video>
    </div>
  )
}

export default HslPlayer