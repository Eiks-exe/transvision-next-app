import AppChannelCard from '@/app/components/AppChannelCard'
import React from 'react'
import AppGrid from '../../components/AppGrid/'
type Props = {}

const Page = (props: Props) => {
    const channels = [
        {id:1, title:"randomChannel" },
    ]
  return (
    <div className='mx-auto grid max-w-screen-xxl px-8 py-8 text-center lg:py-16'>
        <AppGrid data={channels}></AppGrid >
    </div>
  )
}

export default Page