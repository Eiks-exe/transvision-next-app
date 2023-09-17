import { channelsMock } from '@/utils/channelsMock'
import { 
  Avatar, 
  HStack,
  Text
} from '@chakra-ui/react'

import React from 'react'

type Props = {
  src: string
  ChannelName: string
}

channelsMock

const StreamInfo = ({src, ChannelName}: Props) => {
  
  return (
    <HStack>
      <Avatar src={src}/>
      <Text>{ChannelName}</Text>
    </HStack>
  )
}

export default StreamInfo