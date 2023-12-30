import noImage from "../assets/no-image-placeholder.webp"

const imageCrop = (url) => {
  if (!url) return noImage

  const target = "media/"
  const substring = "crop/600/400/"
  const index = url.indexOf(target) + target.length

  return url.slice(0, index) + substring + url.slice(index)
}

export default imageCrop
