import { HStack, Image } from "@chakra-ui/react"
import React from "react"
import gameHubLogo from "../assets/logo.webp"
import ColorModeSwitcher from "./ColorModeSwitcher"
import SearchInput from "./SearchInput"

const Navbar = ({ params, setParams }) => {
  return (
    <div>
      <HStack spacing="10px" marginX="10px">
        <Image src={gameHubLogo} alt="Game Hub Logo" boxSize="60px" />
        <SearchInput params={params} setParams={setParams} />
        <ColorModeSwitcher />
      </HStack>
    </div>
  )
}

export default Navbar
