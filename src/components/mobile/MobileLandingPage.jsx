import React, { useState } from "react";
import Landing from "./Landing";
import AuthLandingPage from "./AuthLandingPage";
import { Box } from "@chakra-ui/react";

export default function MobileLandingPage() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  let pages = [
    <Landing setCurrentPageIndex={setCurrentPageIndex} />,
    <AuthLandingPage setCurrentPageIndex={setCurrentPageIndex} />,
  ];
  return (
    <Box transition={"all .3s ease"}>
      {pages[currentPageIndex]}
      <Box
        pos="absolute"
        display="flex"
        gap="2"
        bottom="4"
        left="50%"
        transform={"translateX(-50%)"}
      >
        {pages.map((page, index) => (
          <Box
            w="2"
            h="2"
            onClick={() => {
                currentPageIndex > index && setCurrentPageIndex(index)
            }}
            bg={`${currentPageIndex === index ? "white" : "black"}`}
            borderRadius={"full"}
          />
        ))}
      </Box>
    </Box>
  );
}
