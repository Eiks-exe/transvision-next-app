import AppChannelCard from '@/app/components/AppChannelCard'
import React from 'react'
import AppGrid from '@/app/components/AppGrid/'
import AppPlayer from '@/app/components/AppPlayer/AppPlayer'
import { channelsMock } from '@/utils/channelsMock'
type Props = {}

const Page = (props: Props) => {
    return (
        <div className='mx-auto grid max-w-screen-xxl px-8 py-8 text-center lg:py-16'>
            <AppGrid data={channelsMock.reverse()}></AppGrid >
        </div>
    )
}

export default Page