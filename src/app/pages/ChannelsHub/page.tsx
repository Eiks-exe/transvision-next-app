import AppChannelCard from '@/app/components/AppChannelCard'
import React from 'react'
import AppGrid from '../../components/AppGrid/'
import { channelsMock } from '@/utils/channelsMock'
type Props = {}

const Page = (props: Props) => {
    const channels = [
        {id:1, title:"randomChannel" },
    ]
  return (
    <div className='mx-auto grid max-w-screen-xxl px-8 py-8 text-center lg:py-16'>
        <AppGrid data={channelsMock}></AppGrid >
    </div>
  )
}

export default Page