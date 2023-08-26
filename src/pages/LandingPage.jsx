import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { GiBottomRight3DArrow } from "react-icons/gi";

export default function LandingPage() {
  return (
    <Flex h="100vh" bg="url(/images/bg/mobilelanding_bg.jpg) no-repeat" bgSize={"cover"}>
      <Container mt="auto">
        <Heading as="h1" fontSize={"3rem"}>
          QuickEat
        </Heading>
        <Text>
          offering you the best nutrition for your diet, fast and reliant.
        </Text>
        <Flex>
            <GiBottomRight3DArrow />
            <Text>Get <br/>Started</Text>
        </Flex>
      </Container>
    </Flex>
  );
}
