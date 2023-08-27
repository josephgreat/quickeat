import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Btn from "../Btn";
import { AiOutlineGoogle } from "react-icons/ai";

function AuthLandingPage() {
  return (
    <Container bg="primary.900" px="2.8rem" pt="4" pb="10">
      <Text textAlign={"right"}>Skip</Text>
      <Flex
        flexDir={"column"}
        textAlign={"center"}
        alignItems={"center"}
        mb="16"
        mt="4"
      >
        <Img src="/logo.png" alt="logo" minH="32" />
        <Heading as="h2" mt="4" fontSize={"1.5rem"}>
          Customised Delivery
        </Heading>
        <Text fontSize={".7rem"}>Customize your delivery through QuickEat</Text>
      </Flex>
      <Flex flexDir={"column"} gap="2">
        <Box>
          <Text ml="4">Email</Text>
          <Input
            px="4"
            py="6"
            borderRadius={"1.1rem"}
            placeholder="Enter you email..."
            bg="secondary.300"
            _placeholder={{ fontSize: "xs" }}
          />
        </Box>
        <Btn bg="tertiary.900" color={"white"}>
          Continue
        </Btn>
        <Flex alignItems={"center"} gap="2" justifyContent={"center"} px="4">
          <Box as="span" width="45%" h="1px" bg="white" />
          <Text>Or</Text>
          <Box as="span" width="45%" h="1px" bg="white" />
        </Flex>
        <Btn color={"black"} bg="tertiary.200">
          <AiOutlineGoogle fontSize={"1.7rem"} />
          <Text as="span" fontSize={".8rem"} pl="1">
            Sign up with Google
          </Text>
        </Btn>
        <Text textAlign={"center"} color={"black"}>
          Have an account? <Link>Login</Link>
        </Text>
      </Flex>
    </Container>
  );
}

export default AuthLandingPage;
