import {
  Button,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react"
import React from "react"
import usePlatform from "../hooks/usePlatforms"
import { MdKeyboardArrowDown } from "react-icons/md"
import PlatformSelector from "./PlatformSelector"
import OrderBySelector from "./OrderBySelector"

const HeroContent = () => {
  return (
    <>
      <Heading fontSize="2xl" fontWeight="700" marginTop={9} marginBottom={3}>
        Games
      </Heading>
      <HStack>
        <PlatformSelector />
        <OrderBySelector />
      </HStack>
    </>
  )
}

export default HeroContent
