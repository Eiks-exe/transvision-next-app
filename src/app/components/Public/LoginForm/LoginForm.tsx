"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";
import { useLayoutEffect } from "react";

type Props = {
  id: number;
};

const LoginForm = ({ id }: Props) => {
  const router = useRouter();

  const [props, api] = useSpring(
    () => ({
        from: { 
            opacity: 0,
            transform: "translate3d(500px,0,0)"
        },
        to: {
            opacity: 1,
            transform: "translate3d(0,0px,0)"
        },
        config: { duration: 300 },
    }),
    []
  );

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      style={{ background : "url(https://images.unsplash.com/photo-1681927423260-aba418af6fbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds)" }}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Connecter vous à votre compte
          </Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
                    </Text> */}
        </Stack>
        <animated.div style={props}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Se souvenir de moir</Checkbox>
                  <Text color={"blue.400"}>Mot de passe oublié?</Text>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"black"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() => {
                    router.push(`/pages/Channel/${id}`);
                  }}
                >
                  Se connecter
                </Button>
              </Stack>
            </Stack>
          </Box>
        </animated.div>
      </Stack>
    </Flex>
  );
};

export default LoginForm;
