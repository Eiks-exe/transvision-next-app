'use client'
import { Flex, VStack, useBreakpointValue, Stack, Button, Text, Heading } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const AppHomeHero = (props: Props) => {
  return (
    <Flex
    w={'full'}
    h={'100vh'}
    backgroundImage={
      'url(https://images.unsplash.com/photo-1569503169334-e72c72ea5ed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80)'
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'}>
    <VStack
      w={'full'}
      justify={'center'}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={'linear(to-r, blackAlpha.900, transparent)'}>
      <Stack maxW={'2xl'} align={'center'} spacing={6}>
      <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color="white"
            textAlign={"center"}
      >
            Plate-Forme Numérique Transvision église <br />
            <Text as={'span'} color={'red.500'} fontSize={"3xl"}>
              Une offre dédié au streamin et à la VOD des église
            </Text>
          </Heading>
        <Stack 
          direction={'row'} 
          justifyContent={"center"}
        >
          <Button
            bg={'blue.400'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'blue.500' }}>
            Show me more
          </Button>
          <Button
            bg={'whiteAlpha.300'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'whiteAlpha.500' }}>
            Show me more
          </Button>
        </Stack>
      </Stack>
    </VStack>
  </Flex>
  )
}

export default AppHomeHero