import React, { useState } from "react";
import Landing from "./Landing";
import AuthLandingPage from "./AuthLandingPage";
import { Box } from "@chakra-ui/react";
import AuthPersonalDetails from "./AuthPersonalDetails";

export default function MobileLandingPage() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  let incrementPageIndex = () => setCurrentPageIndex((prev) => prev+1);

  let pages = [
    <Landing incrementPageIndex={incrementPageIndex} />,
    <AuthLandingPage incrementPageIndex={incrementPageIndex} />,
    <AuthPersonalDetails incrementPageIndex={incrementPageIndex} />,
  ];

  return (
    <Box transition={"all .3s ease"}>
      {pages[currentPageIndex]}
      <Box
        pos="absolute"
        display="flex"
        gap="4"
        bottom="4"
        left="50%"
        transform={"translateX(-50%)"}
      >
        {pages.map((page, index) => (
          <Box
            w="2"
            h="2"
            boxShadow={"0 0 3px"}
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
