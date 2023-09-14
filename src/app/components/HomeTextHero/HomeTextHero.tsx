import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
    reversed?: boolean
    imgSrc ?: string 
}

const HomeTextHero = ({ reversed = false, imgSrc }: Props) => {
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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident placeat minus eius non autem molestias quibusdam odit reiciendis sequi! Tenetur voluptatem, consectetur quisquam repudiandae quae ducimus quidem eius quo nesciunt?
                        </Text>
                    </Box>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default HomeTextHero