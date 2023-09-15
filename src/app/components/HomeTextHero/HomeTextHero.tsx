import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    reversed?: boolean
    imgSrc ?: string 
    text: string 
}
const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sed laudantium. Deserunt laudantium saepe odit velit. Repudiandae aut, ut placeat consequatur quisquam veritatis odio vitae beatae, dolor assumenda, maiores sapiente?"
const HomeTextHero = ({ reversed = false, imgSrc, text= lorem }: Props) => {
    return (
        <Flex
            w={"full"}
            h={"100vh"}
        >
            <HStack>
                <HStack
                    spacing={10}
                    flexDirection={reversed ? "row-reverse" : "row"}
                    h={"full"}
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
                            {text}
                        </Text>
                    </Box>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default HomeTextHero