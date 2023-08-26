import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function LandingPage() {
  return (
    <Flex h="100vh" bg="url(/images/bg/mobilelanding_bg.jpg) no-repeat" bgSize={"cover"}>
      <Container mt="auto" mb="2rem">
        <Heading as="h1" fontSize={"3rem"}>
          QuickEat
        </Heading>
        <Text fontWeight={"400"} my="1">
          offering you the best nutrition for your diet, fast and reliant.
        </Text>
        <Flex alignItems={"center"} gap="2">
            <HiArrowRight size={"2rem"} />
            <Text fontWeight={"500"}>Get <br/>Started</Text>
        </Flex>
      </Container>
    </Flex>
  );
}
