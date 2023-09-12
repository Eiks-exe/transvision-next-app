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



export default function Home() {
  return (
    <>
    <AppNavbar title='transvision network'/>
    <AppHomeHero/>
    <Flex
      width={"full"}
      h={"100vh"}
    >
      <HStack
        spacing={10}
      >
        <Box
         bg={"gray.700"}
         width={"50%"} 
         h={"full"}  
        >
         
        </Box>
        <Box
          width={"50%"}    
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident placeat minus eius non autem molestias quibusdam odit reiciendis sequi! Tenetur voluptatem, consectetur quisquam repudiandae quae ducimus quidem eius quo nesciunt?
          </Text>
        </Box>
      </HStack>
    </Flex>
    <Flex
      width={"full"}
      h={"100vh"}
    >
      <VStack
        spacing={10}
      >
          <Text fontSize={"6xl"}>
           Nos Eglise  
          </Text>
      </VStack>
    </Flex>
    </>
  )
}
