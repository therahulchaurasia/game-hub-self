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
import handleObjChange from "../services/setter"

const PlatformSelector = ({ params, setParams }) => {
  const { data, isLoading, error } = usePlatform()
  if (error) return
  if (isLoading) return <Spinner />

  return (
    <>
      <HStack>
        <Menu>
          <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
            {params.platforms
              ? data.find((rec) => rec.id === params.platforms)?.name
              : "Platforms"}
          </MenuButton>
          <MenuList>
            {data.map((platform) => {
              return (
                <MenuItem
                  key={platform.id}
                  value={params.platforms}
                  onClick={() => {
                    handleObjChange(setParams, "platforms", platform.id)
                  }}
                >
                  {platform.name}
                </MenuItem>
              )
            })}
          </MenuList>
        </Menu>
      </HStack>
    </>
  )
}

export default PlatformSelector
