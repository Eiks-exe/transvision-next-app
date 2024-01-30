"use client"
import AppPlayer from "@/app/components/AppPlayer/AppPlayer";
import WithSubnavigation from "@/app/components/PlayerComponent/PlayerHNavBar/PlayerHNavBar";
import StreamInfo from "@/app/components/PlayerComponent/StreamInfo/StreamInfo";
import { IChannel } from "@/interfaces/channel";
import { channelsMock } from "@/utils/channelsMock";
import { Flex, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import HSL from 'hls.js'
import HslPlayer from "@/app/components/HslPlayer/HslPlayer";

export default function Page({ params }: { params: { id: number } }) {
  const currentChannel = channelsMock.find((channel: IChannel) => channel.id == params.id);
  useEffect(() => {
    const video = document.getElementById('video') as HTMLVideoElement
    const hls = new HSL()
    hls.loadSource('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8')
    hls.attachMedia(video)
    hls.on(HSL.Events.MANIFEST_PARSED, function () {
      video.play()
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
    <Flex
      width={"full"}
      h={"100vh"}
      flexDirection={"column"}
    >
      <WithSubnavigation />
      <VStack
        w={"full"}
        h={"full"}
        justifyContent={"flex-start"}
        align={"left"}
        p={20}
        spacing={10}
      >
        <HslPlayer liveSrc={currentChannel?.LiveSrc ? currentChannel.LiveSrc : "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u"}/>
        {currentChannel?.LiveSrc ? currentChannel.LiveSrc : "hmm"}
        <StreamInfo Imgsrc={currentChannel?.thumbnailSrc ? currentChannel?.thumbnailSrc : "..."} ChannelName={currentChannel?.name ? currentChannel?.name : "unknown"} />
      </VStack>
    </Flex>
  )
}

