import React from 'react'
import AppGrid from '@/app/components/AppGrid/'
import { channelsMock } from '@/utils/channelsMock'
import { liveMock } from '@/utils/LiveMock'
import { CheckboxGroup } from '@chakra-ui/react'
type Props = {}

interface LiveGridProps {
    channels : any;
}

const LiveGrid: React.FC<LiveGridProps> = ({channels}) => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {channels.map((channel: any) => (
                <div className='h-52 flex justify-center items-center rounded-xl text-white font-bold bg-gray-800' key={channel.id} style={{width: "22rem"}}>
                    {channel.name}
                </div>
            ))}
        </div>
    )
}

const Page = (props: Props) => {
    return (
        <div className='px-4 py-10 flex items-center justify-center bg-gray-400'>
            <LiveGrid channels={liveMock}/>
        </div>
    )
}

export default Page