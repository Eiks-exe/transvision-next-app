"use client"
import AppPlayer from "@/app/components/AppPlayer/AppPlayer";
import WithSubnavigation from "@/app/components/PlayerComponent/PlayerHNavBar/PlayerHNavBar";
import StreamInfo from "@/app/components/PlayerComponent/StreamInfo/StreamInfo";
import { IChannel } from "@/interfaces/channel";
import { channelsMock } from "@/utils/channelsMock";
import { Flex, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

  export default function Page({ params }: { params: { id: number } }) {
    const currentChannel = channelsMock.find((channel: IChannel) => channel.id == params.id);
    useEffect(() => {
      const handleContextmenu = (e: Event) => {
          e.preventDefault()
      }
      document.addEventListener('contextmenu', handleContextmenu)
      return function cleanup() {
          document.removeEventListener('contextmenu', handleContextmenu)
      }
}, [ ])
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
          <AppPlayer className='rounded-lg' liveSrc={currentChannel?.LiveSrc ? currentChannel.LiveSrc : ""}/>
          {currentChannel?.LiveSrc ? currentChannel.LiveSrc : "hmm"}
          <StreamInfo Imgsrc={currentChannel?.thumbnailSrc? currentChannel?.thumbnailSrc : "..."} ChannelName={currentChannel?.name ? currentChannel?.name : "unknown"}/> 
        </VStack>
      </Flex>
    )
  }

