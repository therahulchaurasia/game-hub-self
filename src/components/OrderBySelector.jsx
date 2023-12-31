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
import handleObjChange from "../services/setter"

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
]

const OrderBySelector = ({ params, setParams }) => {
  return (
    <>
      <HStack>
        <Menu>
          <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
            Order by:{" "}
            {params.ordering
              ? sortOrders.find((rec) => rec.value === params.ordering).label
              : "Relevance"}
          </MenuButton>
          <MenuList>
            {sortOrders.map((sortValues, idx) => {
              return (
                <MenuItem
                  key={idx}
                  value={sortValues.value}
                  onClick={() => {
                    handleObjChange(setParams, "ordering", sortValues.value)
                  }}
                >
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
