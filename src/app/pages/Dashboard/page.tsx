'use client'

import React from 'react'
import DashboardSideBar from '@/app/components/DashboardComponent/DashboardSideBar/DashboardSideBar'
import { HStack, Flex, IconButton, Text } from '@chakra-ui/react'
import AppLayout from '@/app/components/AppLayout/AppLayout'
import DashboardLayout from '@/app/components/DashboardComponent/DashboardLayout/DashboardLayout'

type Props = {}

const Page = (props: Props) => {
  const [collapse, setCollapse] = React.useState(false);

  return (
    <DashboardLayout>
      <Text>Main Dashboard</Text>
    </DashboardLayout>

  )
}

export default Page