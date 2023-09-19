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
    backgroundPosition={'center center'}
    >

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
            <Text as="span" color={"red.500"}>P</Text>late-<Text as="span" color={"red.500"}>F</Text>orme <Text as="span" color={"red.500"}>N</Text>umérique <Text as="span" color={"red.500"}>T</Text>ransvision <Text as="span" color={"red.500"}>E</Text>glises <br />
            <Text as={'span'} color={'red.500'} fontSize={"3xl"}>
              Une offre dédié au streaming et à la VOD des églises
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
            Commencer
          </Button>
        </Stack>
      </Stack>
    </VStack>
  </Flex>
  )
}

export default AppHomeHero