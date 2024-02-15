import React from 'react'
import HSL from 'hls.js'

interface Props {
    id?: string;
    liveSrc: string;
    className?: string;  
    style?: React.CSSProperties;     
}

const HslPlayer = ({ id, liveSrc, className, style} : Props) => {
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
        <video id={`video-${id}`} src="" className={`rounded-xl ${className}`} style={style}>
        </video>
    </div>
  )
}

export default HslPlayer