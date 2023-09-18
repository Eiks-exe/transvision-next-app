import AppGrid from "@/app/components/AppGrid";
import AppPlayer from "@/app/components/AppPlayer/AppPlayer";
import WithSubnavigation, { DesktopNav } from "@/app/components/PlayerComponent/PlayerHNavBar/PlayerHNavBar";
import StreamInfo from "@/app/components/PlayerComponent/StreamInfo/StreamInfo";
import { IChannel } from "@/interfaces/channel";
import { channelsMock } from "@/utils/channelsMock";
import { Flex, HStack, VStack, Text } from "@chakra-ui/react";

  export default function Page({ params }: { params: { id: number } }) {
    const currentChannel = channelsMock.find((channel: IChannel) => channel.id == params.id);
    console.log(currentChannel?.id)
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
          <AppPlayer className='rounded-lg'/>
          <StreamInfo Imgsrc={currentChannel?.thumbnailSrc? currentChannel?.thumbnailSrc : "..."} ChannelName={currentChannel?.name ? currentChannel?.name : "unknown"}/> 
        </VStack>
      </Flex>
    )
  }

/*   <div className='mx-auto grid max-w-screen-xxl px-[10%] py-8 text-center lg:py-16 h-screen'>
           <AppPlayer className='rounded-lg'/>
           
           {params.id}
        </div> */