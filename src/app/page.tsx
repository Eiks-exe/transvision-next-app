import Image from 'next/image'
import {
  Flex,
  Text,
  VStack,
  
} from '@chakra-ui/react'
import AppNavbar from './components/AppNavbar/AppNavbar'
import AppHomeHero from './components/AppHomeHero/AppHomeHero'
import HomeTextHero from './components/HomeTextHero/HomeTextHero'
import AppGrid from './components/AppGrid'
import { channelsMock } from '@/utils/channelsMock'



const text1 = "PFNTE offre une solution de diffusion en direct pour les églises et ses partenaires qui partage l'orientation et l'éthique religieuse selon les écritures bibliques.";
const text2 = "organiser et géré sa Playlist facilement Poster une ou plusieurs vidéos et l’intégrer sur mon site Web"
export default function Home() {
  return (
    <>
    <AppNavbar title={'transvision network'}/>
    <AppHomeHero/>
    {/* <HomeTextHero reversed imgSrc='https://media.discordapp.net/attachments/1076929619204259955/1194629041525882891/31k5_Flat_2D_illustration_of_a_family_watching_a_TV_in_his_home_4dcb0299-4334-4b49-ad67-4ae519a4472b.png?ex=65b10bfe&is=659e96fe&hm=eed618f23d6f0580bd2a6db20176b823b7899f3912f19d72df577e11de6ac9e5&=&format=webp&quality=lossless&width=575&height=575'/> */}
    <HomeTextHero text={text1} imgSrc='Flat_church.png'/>
    <HomeTextHero text={text2} imgSrc='flat_device2.png' title="Hébergement de vidéos en ligne" reversed/>
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
          <AppGrid data={channelsMock.reverse()}/>
      </VStack>
    </Flex>
    </>
  )
}
