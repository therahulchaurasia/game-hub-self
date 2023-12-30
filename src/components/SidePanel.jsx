import React from "react"
import useGenres from "../hooks/useGenres"
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Stack,
} from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import noImage from "../assets/no-image-placeholder.webp"
const SidePanel = () => {
  const { data, isLoading, error } = useGenres()
  if (error) return
  if (isLoading) return <Spinner />
  return (
    <>
      <Heading fontSize="2xl" fontWeight="700" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre, idx) => {
          return (
            <ListItem key={idx} paddingY={1} paddingRight={5}>
              <HStack>
                <Image
                  boxSize="32px"
                  src={
                    genre.image_background ? genre.image_background : noImage
                  }
                  fit="cover"
                  borderRadius={8}
                />
                <Button
                  textAlign="left"
                  fontSize="md"
                  variant="link"
                  fontWeight="normal"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default SidePanel
