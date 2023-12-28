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

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
]

const OrderBySelector = () => {
  return (
    <>
      <HStack>
        <Menu>
          <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
            Order by: {"Relevance"}
          </MenuButton>
          <MenuList>
            {sortOrders.map((sortValues, idx) => {
              return (
                <MenuItem key={idx} value={sortValues.value}>
                  {sortValues.label}
                </MenuItem>
              )
            })}
          </MenuList>
        </Menu>
      </HStack>
    </>
  )
}

export default OrderBySelector
