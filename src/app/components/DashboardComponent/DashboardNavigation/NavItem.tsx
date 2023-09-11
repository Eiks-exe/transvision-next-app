import { IconProps, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import {
    ListIcon,
    Link as LinkChakra,
    Heading,
    Box,
    Badge,
    Text
} from "@chakra-ui/react";
import React from "react";

interface Props {
    item: any
    isActive: boolean
    collapse: boolean
}
export const NavItem = ({ item, isActive, collapse } : Props) => {
  const { label } = item;

  if (item.type === "link") {
    const { icon, notifications, messages, path } = item;
    return (
      <Box display="flex" alignItems="center" my={6} justifyContent="center">
        <LinkChakra
          href={path}
          as={Link}
          gap={1}
          display="flex"
          alignItems="center"
          _hover={{ textDecoration: "none", color: "black" }}
          fontWeight="medium"
          color={isActive ? "blue.500" : "white"}
          w="full"
          justifyContent={!collapse ? "start" : "end"}
        >
          <ListIcon as={icon} fontSize={22} m="0" />
          {!collapse && <Text>{label}</Text>}
        </LinkChakra>
        {!collapse && (
          <React.Fragment>
            {notifications && (
              <Badge
                borderRadius="full"
                colorScheme="yellow"
                w={6}
                textAlign="center"
              >
                {notifications}
              </Badge>
            )}
            {messages && (
              <Badge
                borderRadius="full"
                colorScheme="green"
                w={6}
                textAlign="center"
              >
                {messages}
              </Badge>
            )}
          </React.Fragment>
        )}
      </Box>
    );
  }
  return (
    <Heading
      color="gray.400"
      fontWeight="medium"
      textTransform="uppercase"
      fontSize="sm"
      borderTopWidth={1}
      borderColor="gray.100"
      pt={collapse ? 8 : 0}
      my={6}
    >
      <Text display={collapse ? "flex" : "none"}>{label}</Text>
    </Heading>
  );
};