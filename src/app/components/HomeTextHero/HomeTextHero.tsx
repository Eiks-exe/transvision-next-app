import { Box, Flex, HStack, Image, Text, space } from '@chakra-ui/react'
import React from 'react'

type Props = {
    reversed?: boolean
    imgSrc ?: string 
    text: string 
    title: string
}
const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed laudantium. Deserunt laudantium saepe odit velit. Repudiandae aut, ut placeat consequatur quisquam veritatis odio vitae beatae, dolor assumenda, maiores sapiente?"
const HomeTextHero = ({ reversed = false, imgSrc, text= lorem, title }: Props) => {
    return (
        <Flex
            w={"full"}
            h={"100vh"}
        >
            <HStack
                w={"100%"}
            >
                <HStack
                    spacing={10}
                    padding={10}
                    flexDirection={reversed ? "row-reverse" : "row"}
                    h={"full"}
                    w={"100%"} 
                >
                    <Box
                        display={"flex"}
                        width={"50%"}
                        h={"full"}
                        alignItems={"center"}
                        
                    >
                      <Image  src={imgSrc} borderRadius={"xl"} alt="heroimg"/> 
                    </Box>
                    <Box
                        width={"50%"}
                        h={"full"}
                    >
                        {title && <Text fontSize={'3xl'} fontWeight={"bold"} marginTop={"15%"}>{title}</Text>}
                        <Text
                            marginTop={"16%"}
                            fontSize={"2xl"}
                            fontStyle={"italic"}
                        >
                            {text}
                        </Text>
                    </Box>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default HomeTextHero