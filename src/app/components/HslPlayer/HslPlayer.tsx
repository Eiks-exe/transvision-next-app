import React from 'react'
import HSL from 'hls.js'

interface Props {
    liveSrc: string;        
}

const HslPlayer = ({ liveSrc } : Props) => {
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
        <video id="video" src="">
        </video>
    </div>
  )
}

export default HslPlayer