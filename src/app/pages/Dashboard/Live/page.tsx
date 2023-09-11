import React from 'react'
import AppPlayer from '@/app/components/AppPlayer/AppPlayer'
import DashboardLayout from '@/app/components/DashboardComponent/DashboardLayout/DashboardLayout'
type Props = {}

const Page = (props: Props) => {
    return (
        <DashboardLayout>
            <div className='mx-auto grid max-w-screen-xxl px-[10%] py-8 text-center lg:py-16 h-screen'>
                <AppPlayer className='rounded-lg'/>
            </div>
        </DashboardLayout>
    )
}

export default Page