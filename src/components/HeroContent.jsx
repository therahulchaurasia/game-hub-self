import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react"
import React from "react"
import usePlatform from "../hooks/usePlatforms"
import { MdKeyboardArrowDown } from "react-icons/md"
import PlatformSelector from "./PlatformSelector"
import OrderBySelector from "./OrderBySelector"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Grid, GridItem, Show } from "@chakra-ui/react"
import imageCrop from "../services/image-crop"
import { SimpleGrid } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import NameAndEmoji from "./NameAndEmoji"

const HeroContent = ({ records }) => {
  console.log(records)
  return (
    <>
      <Heading fontSize="2xl" fontWeight="700" marginTop={9} marginBottom={3}>
        Games
      </Heading>
      <HStack marginBottom={8}>
        <PlatformSelector />
        <OrderBySelector />
      </HStack>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3, "2xl": 4 }}
        padding="10px"
        spacing={6}
      >
        {records?.map((record) => {
          return (
            <Box borderRadius={10} overflow="hidden">
              <Card>
                <Image
                  borderRadius="10px 10px 0 0"
                  objectFit="cover"
                  src={imageCrop(record.background_image)}
                  alt="Random"
                />

                <CardBody>
                  <PlatformIconList
                    parentPlatforms={record.parent_platforms}
                    metacritic={record.metacritic}
                  />
                  <NameAndEmoji
                    gameName={record.name}
                    rating={record.rating_top}
                  />
                </CardBody>
              </Card>
            </Box>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default HeroContent
