import Image from 'next/image'
import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react'
import AppNavbar from './components/AppNavbar/AppNavbar'
import AppHomeHero from './components/AppHomeHero/AppHomeHero'
import HomeTextHero from './components/HomeTextHero/HomeTextHero'
import AppGrid from './components/AppGrid'
import { channelsMock } from '@/utils/channelsMock'



export default function Home() {
  return (
    <>
    <AppNavbar title='transvision network'/>
    <AppHomeHero/>
    <HomeTextHero/>
    <HomeTextHero reversed/>
    <Flex
      width={"full"}
      h={"100vh"}
    >
      <VStack
        spacing={10}
        justifyContent={"center"}
        w={"full"}
      >
          <Text fontSize={"6xl"}>
           Nos Eglise  
          </Text>
          <AppGrid data={channelsMock}/>
      </VStack>
    </Flex>
    </>
  )
}
