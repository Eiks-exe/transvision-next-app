'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IChannel } from '@/interfaces/channel'

import {Card, CardBody, Image, Text } from '@chakra-ui/react'

type Props = {
  key: number,
  item: IChannel,
  link?: boolean
}


const AppChannelCard = ({item, link}: Props) => {
  const router = useRouter()
  return (
    <Card
      w={"332px"}
      h={"187px"}
      borderRadius={"xl"}
      onClick={link ? ()=>{router.push(`/pages/authentification/login/${item.id}`)}: (e)=>{e.preventDefault()}}
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
