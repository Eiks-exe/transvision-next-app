'use client'

import React from 'react'
import { Text } from '@chakra-ui/react'
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