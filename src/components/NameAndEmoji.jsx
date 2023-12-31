import { Image, Text } from "@chakra-ui/react"
import React from "react"
import bullsEye from "../assets/bulls-eye.webp"
import meh from "../assets/meh.webp"
import thumbsUp from "../assets/thumbs-up.webp"

const NameAndEmoji = ({ gameName, rating }) => {
  const ratingObj = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  }
  return (
    <>
      <Text fontSize="2xl" fontWeight="700">
        {gameName}
      </Text>
      {rating < 3 ? null : <Image {...ratingObj[rating]} marginTop={1} />}
    </>
  )
}

export default NameAndEmoji
