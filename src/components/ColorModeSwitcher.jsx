import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"
import React from "react"

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <div>
      <HStack>
        <Switch id="color-mode" colorScheme="teal" onChange={toggleColorMode} />
        <Text id="color-mode" whiteSpace="nowrap">
          Dark Mode
        </Text>
      </HStack>
    </div>
  )
}

export default ColorModeSwitcher
