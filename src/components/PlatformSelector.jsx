import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import React from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import usePlatform from "../hooks/usePlatforms"

const PlatformSelector = () => {
  const { data, isLoading, error } = usePlatform()
  if (error) return
  if (isLoading) return <Spinner />

  return (
    <>
      <HStack>
        <Menu>
          <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
            Platforms
          </MenuButton>
          <MenuList>
            {data.map((platform) => {
              return <MenuItem key={platform.id}>{platform.name}</MenuItem>
            })}
          </MenuList>
        </Menu>
      </HStack>
    </>
  )
}

export default PlatformSelector
