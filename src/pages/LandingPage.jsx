import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function LandingPage() {
  return (
    <Flex h="100vh" bg="url(/images/bg/mobilelanding_bg.jpg) no-repeat" bgSize={"cover"}>
      <Container mt="auto">
        <Heading as="h1" fontSize={"3rem"}>
          QuickEat
        </Heading>
        <Text fontWeight={"600"} fontSize={".8rem"} fontFamily={"'Open Sans', sans-serif"}>
          offering you the best nutrition for your diet, fast and reliant.
        </Text>
        <Flex alignItems={"center"} fontWeight={"600"} gap="2" my="8">
            <HiArrowRight size={"2rem"} />
            <Text fontWeight={"500"}>Get <br/>Started</Text>
        </Flex>
      </Container>
    </Flex>
  );
}
