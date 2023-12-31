import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { Badge, Flex, Spacer } from "@chakra-ui/react"
import { HStack, Heading, Icon } from "@chakra-ui/react"

const PlatformIconList = ({ parentPlatforms, metacritic }) => {
  const iconsMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }

  return (
    <>
      <Flex marginBottom={3}>
        <HStack spacing={2}>
          {parentPlatforms.map((platformsTree) => {
            const { platform } = platformsTree
            return (
              <Icon
                key={platform.id}
                as={iconsMap[platform.slug]}
                color="gray.500"
              />
            )
          })}
        </HStack>
        <Spacer />
        <Badge colorScheme="green" fontWeight="700" paddingX={2}>
          {metacritic}
        </Badge>
      </Flex>
    </>
  )
}

export default PlatformIconList
