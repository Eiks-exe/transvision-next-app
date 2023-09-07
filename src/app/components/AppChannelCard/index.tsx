'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

interface IChannel {
    id: number
    title:string
}

type Props = {
    key: number,
    item: IChannel,
}


const AppChannelCard = (props: Props) => {
  const router = useRouter()
  return (
    <div
      className='p-20 bg-fuchsia-500 shadow-lg rounded-lg w-[50%]'
      onClick={()=>{router.push('Channel')}}
    >{props.item.title}</div>
  )
}

export default AppChannelCard
