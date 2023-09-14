'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IChannel } from '@/interfaces/channel'

import {Card, CardBody, Image, Text } from '@chakra-ui/react'

type Props = {
  key: number,
  item: IChannel,
}


const AppChannelCard = ({item}: Props) => {
  const router = useRouter()
  return (
    <Card
      w={"332px"}
      h={"187px"}
      borderRadius={"xl"}
    >
     <Image 
          src={item.thumbnailSrc}
          w={"full"}
          h={"full"}  
          borderRadius={"xl"}
        />  
    </Card>
  )
}

export default AppChannelCard
