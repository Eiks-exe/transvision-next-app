import Image from 'next/image'
import AppLayout from './components/AppLayout/AppLayout'
import { url } from 'inspector'
import { ChakraProvider } from '@chakra-ui/react'
import AppNavbar from './components/AppNavbar/AppNavbar'



export default function Home() {
  return (
    <>
      <AppNavbar title={"transvision network"}/>
    <div
      className=' mx-auto grid max-w-screen-xxl px-4 py-8 text-center lg:py-16 home-section-1 h-screen'
    //@ts-ignore
    >
      
      <h1 className="text-center text-6xl font-bold italic text-white height-96 home-section-1-title">
        <span>Le </span>
        <span className='text-red-500'>Réseau </span>
        <span>qui </span>
        <span className='text-red-500'>Transforme </span>
        <span>votre vie  </span>
      </h1>
    </div>
    </>
  )
}
