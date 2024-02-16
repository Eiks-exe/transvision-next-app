"use client"
import React from 'react'
import { liveMock } from '@/utils/LiveMock'
import Link from 'next/link'
import HslPlayer from '@/app/components/HslPlayer/HslPlayer';
import { $ } from 'video.js/dist/types/utils/dom';
import Hls from 'hls.js';
type Props = {}

interface LiveGridProps {
    channels : any;
}

const LiveGrid: React.FC<LiveGridProps> = ({channels}) => {
    React.useEffect(() => {
        liveMock.forEach((channel: any) => {
            const video = document.getElementById('video-' + channel.id ) as HTMLVideoElement
            const hls = new Hls()
            hls.loadSource(channel.source)
            hls.attachMedia(video)
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play()
            })
        })
        const handleContextmenu = (e: Event) => {

            e.preventDefault()
      
          }
      
          document.addEventListener('contextmenu', handleContextmenu)
      
          return function cleanup() {
      
            document.removeEventListener('contextmenu', handleContextmenu)
      
          }
    }, [])
    return (
        <div className='grid grid-cols-4 gap-4'>
            {channels.map((channel: any) => (
                <Link href={`/#`} key={channel.id}>
                        <div className='h-52 flex justify-center items-center rounded-xl text-white font-bold bg-black' key={channel.id} style={{width: "22rem"}}>
                            <HslPlayer 
                                id={channel.id} 
                                liveSrc={channel.source} 
                                style={{width:"352px", height: "208px"}}
                                muted={true}
                            />  
                        </div>
                        <div className='font-bold'>
                        {channel.name}
                        </div>
                </Link>
        
            ))}
        </div>
    )
}

const Page = (props: Props) => {
    return (
        <div className='px-4 py-10 flex items-center justify-center bg-gray-400'>
            <LiveGrid channels={liveMock}/>
        </div>
    )
}

export default Page