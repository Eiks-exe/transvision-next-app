import AppLayout from '@/app/components/AppLayout/AppLayout'
import HomeTextHero from '@/app/components/HomeTextHero/HomeTextHero'
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const about: string = ` PFNTE offre une solution de diffusion en direct pour les églises et ses partenaires qui partage l'orientation et l'éthique religieuse selon les enseignements bibliques.
        Célébrer ensemble et ne famille grâce a une Plate-forme de diffusion unifiée.
        Enregistrer et diffuser toutes nos célébrations spiri- tuelles, la PNFTE vous permet de gérer facilement en toute confidentialité, et développer votre vie d'église.
        `
    
    return (
        <AppLayout>
            <Flex
            h={'100vh'}
            w={'full'}
        >
            <VStack 
                h={'100%'}
            >
            <Heading mt={"10"}>Qui somme nous</Heading>
            <Box
                h={'100%'}
            >
            <HomeTextHero title='' text={about} padding='5%' imgSrc='https://images.unsplash.com/photo-1521790945508-bf2a36314e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80'/>
            </Box>
            </VStack>
        </Flex>
        </AppLayout>
    )
}

export default page