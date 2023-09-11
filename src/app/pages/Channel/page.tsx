import AppChannelCard from '@/app/components/AppChannelCard'
import React from 'react'
import AppGrid from '../../components/AppGrid/'
import AppPlayer from '@/app/components/AppPlayer/AppPlayer'
type Props = {}

const Page = (props: Props) => {
    return (
        <div className='mx-auto grid max-w-screen-xxl px-[10%] py-8 text-center lg:py-16 h-screen'>
           <AppPlayer className='rounded-lg'/>
        </div>
    )
}

export default Page