import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Img,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Btn from "../Btn";

function AuthPersonalDetails({ incrementPageIndex }) {
  return (
    <Container bg="secondary.500" px="0" minH="100vh" pt="8" pb="10">
      <Box px="2.8rem" textAlign={"center"}>
        <Heading as="h2" fontSize="1.5rem">
          Personal Details
        </Heading>
        <Text fontSize={".6rem"}>
          Please provide the following infomation below.
        </Text>
      </Box>
      <Grid gap="4" bg="secondary.900" px="2.8rem" pt="8" pb="12" mt="2" mb="12">
        <Input
          px="4"
          py="6"
          borderRadius={"1.1rem"}
          placeholder="First Name"
          bg="white"
          fontSize={"md"}
          _placeholder={{ fontSize: "xs" }}
        />
        <Input
          px="4"
          py="6"
          borderRadius={"1.1rem"}
          placeholder="Last Name"
          bg="white"
          fontSize={"sm"}
          _placeholder={{ fontSize: "xs" }}
        />
        <Flex gap="4">
          <InputGroup>
            <InputLeftAddon
              px="4"
              py="6"
              borderLeftRadius={"1.1rem"}
              fontSize={"xs"}
              color={"gray.500"}
              bg="white"
            >
              +234
            </InputLeftAddon>
            <Input
              px="4"
              py="6"
              borderRadius={"1.1rem"}
              placeholder="Phone No."
              bg="white"
              fontSize={"sm"}
              type="number"
              _placeholder={{ fontSize: "xs" }}
            />
          </InputGroup>
        </Flex>
        <Btn bg="primary.900" color="white">
          Continue
        </Btn>
      </Grid>
      <Grid bg="secondary.900" py="12" placeItems={"center"}>
        <Img src="/logo.png" w="25%" />
      </Grid>
    </Container>
  );
}

export default AuthPersonalDetails;
