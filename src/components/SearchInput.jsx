import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import React, { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import handleObjChange from "../services/setter"

const SearchInput = ({ params, setParams }) => {
  const ref = useRef(null)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (ref.current) {
          let target = ref.current.value
          handleObjChange(setParams, "search", target)
        }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="filled"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
