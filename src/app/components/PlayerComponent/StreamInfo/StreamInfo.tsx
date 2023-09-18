import { channelsMock } from '@/utils/channelsMock'
import { 
  Avatar, 
  HStack,
  Text
} from '@chakra-ui/react'

import React from 'react'

type Props = {
  Imgsrc: string
  ChannelName: string
}

channelsMock

const StreamInfo = ({Imgsrc, ChannelName}: Props) => {
  
  return (
    <HStack alignItems={"flex-start"}>
      <Avatar src={Imgsrc}/>
      <Text 
        fontSize={'xl'} 
        textAlign={"start"}
        fontWeight={"bold"}
      >{ChannelName}</Text>
    </HStack>
  )
}

export default StreamInfo