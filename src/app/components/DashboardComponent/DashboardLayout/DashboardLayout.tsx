'use client'
import { HStack, Flex, Breadcrumb, Box, Text } from '@chakra-ui/react';
import DashboardSideBar from '../DashboardSideBar/DashboardSideBar';
import React from 'react';
import AppBreadCrumb from '../../AppBreadCrumb/AppBreadCrumb';
 
interface Props {
    children?: React.ReactNode;
    dark?: boolean;
}


const  DashboardLayout:  React.FC<Props> = ({ children }) => {
    const [collapse, setCollapse] = React.useState(false);
  return (
    <>
          <HStack w="full" h="100vh" bg="gray.100" padding={10}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 350 : 300}
        bg={'gray.900'}
        alignItems="start"
        padding={4}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
      >
        <DashboardSideBar collapse= { collapse }/>
      </Flex>

      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="left"
        justifyContent="start"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
        padding={5}
      >
        <Box
          display={"flex"}
          justifySelf={"flex-start"}
          justifyItems={"start"}
          flexDirection={"column"}
        >
          <AppBreadCrumb 
            path={''}
          />
        </Box>
        {children}
      </Flex>
    </HStack>
    </>
  )
}

export default DashboardLayout; 