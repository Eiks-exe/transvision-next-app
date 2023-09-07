import AppChannelCard from '@/app/components/AppChannelCard'
import React from 'react'
import AppGrid from '../../components/AppGrid/'
import AppPlayer from '@/app/components/AppPlayer/AppPlayer'
type Props = {}

const Page = (props: Props) => {
    return (
        <div className='mx-auto grid max-w-screen-xxl px-8 py-8 text-center lg:py-16 h-screen'>
           <AppPlayer/>
        </div>
    )
}

export default Page