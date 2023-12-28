import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import React, { useRef } from "react"
import { BsSearch } from "react-icons/bs"

const SearchInput = () => {
  const ref = useRef(null)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
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
