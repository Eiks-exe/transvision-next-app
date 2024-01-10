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
import flat from '../ressources/31k5_Flat_2D.png'


const text1 = "PFNTE offre une solution de diffusion en direct pour les églises et ses partenaires qui partage l'orientation et l'éthique religieuse selon les écritures bibliques.";
const text2 = "organiser et géré sa Playlist facilement Poster une ou plusieurs vidéos et l’intégrer sur mon site Web"
export default function Home() {
  return (
    <>
    <AppNavbar title={'transvision network'}/>
    <AppHomeHero/>
    {/* <HomeTextHero reversed imgSrc='https://media.discordapp.net/attachments/1076929619204259955/1194629041525882891/31k5_Flat_2D_illustration_of_a_family_watching_a_TV_in_his_home_4dcb0299-4334-4b49-ad67-4ae519a4472b.png?ex=65b10bfe&is=659e96fe&hm=eed618f23d6f0580bd2a6db20176b823b7899f3912f19d72df577e11de6ac9e5&=&format=webp&quality=lossless&width=575&height=575'/> */}
    <HomeTextHero text={text1} imgSrc='https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'/>
    <HomeTextHero text={text2} imgSrc='/pfnte.jpg' title="Hébergement de vidéos en ligne" reversed/>
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
           Média en ligne  
          </Text>
          <AppGrid data={channelsMock}/>
      </VStack>
    </Flex>
    </>
  )
}
