import AppGrid from "@/app/components/AppGrid";
import AppPlayer from "@/app/components/AppPlayer/AppPlayer";
import { channelsMock } from "@/utils/channelsMock";

  export default function Page({ params }: { params: { id: number } }) {
    return (
      <div className='mx-auto grid max-w-screen-xxl px-[10%] py-8 text-center lg:py-16 h-screen'>
           <AppPlayer className='rounded-lg'/>
           {params.id}
        </div>
    )
  }
