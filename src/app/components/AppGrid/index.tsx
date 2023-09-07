import React from 'react'
import AppChannelCard from '../AppChannelCard'

interface IChannel {
    id: number
    title:string
}


type Props = {
    data: IChannel[]
}

const AppGrid = (props: Props) => {
  return (
    <div
     className='grid gap-4 grid-cols-3 grid-rows-3'
    >
        {props.data?.filter((item: IChannel) => item.title.toLowerCase()).map((item: IChannel) => (
          <AppChannelCard key={item.id} item={item} />
        ))}
    </div>
  )
}

export default AppGrid