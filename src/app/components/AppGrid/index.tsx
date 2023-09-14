import React from 'react'
import AppChannelCard from '../AppChannelCard'
import { Grid } from '@chakra-ui/react'
import {IChannel} from "@/interfaces/channel"


type Props = {
    data: IChannel[]
}

const AppGrid = (props: Props) => {
  return (
    <Grid 
      templateColumns='repeat(4, 1fr)' 
      gap={6}
      overflowY={"scroll"} 
    >
        {props.data?.filter((item: IChannel) => item.name.toLowerCase()).map((item: IChannel) => (
          <AppChannelCard key={item.id} item={item} />
        ))}
    </Grid>
  )
}

export default AppGrid