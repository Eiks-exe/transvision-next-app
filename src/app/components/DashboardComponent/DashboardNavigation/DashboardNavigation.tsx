import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

import { NavItem } from './NavItem';
import items from './item'
import { usePathname } from 'next/navigation';


const DashboardNavigation = ({ collapse } : {collapse: boolean}) =>{
  const pathname = usePathname()
  return(
    <List w="full" my={8}>
    {items.map((item, index) => (
      <ListItem key={index}>
        <NavItem item={item} isActive={pathname === item.path} collapse={collapse} />
      </ListItem>
    ))}
  </List>
  )
}

export default DashboardNavigation