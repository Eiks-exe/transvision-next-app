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
      'url()'
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