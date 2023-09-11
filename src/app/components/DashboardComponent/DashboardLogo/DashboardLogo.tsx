import React from 'react'
import { Flex, Icon, Text } from '@chakra-ui/react'
type Props = {
    icon?: any
}

const DashboardLogo : React.FC<Props> = ({ icon }: Props) => {
  return (
    <Flex
      justifyContent={'space-between'}
    >
    <Icon as={icon} fontSize={22} m="0" />
    <Text fontWeight={700}> Transvition Network</Text>
    </Flex>
  )
}

export default DashboardLogo