import React, { useState } from 'react'
import GalleryImage from './GalleryImage'
import GalleryModal from './GalleryModal'
import './styles.scss'

const Gallery = ({ data }) => {
  const [click, setClick] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)

  const handleClick = (url) => {
    setClick(!click)
    setImageUrl(url)
  }

  return (
    <div className="gallery">
      {data.map(({ id, url }) => {
        return <GalleryImage key={id} src={url} handleClick={() => handleClick(url)} />
      })}
      {click && <GalleryModal handleClose={handleClick} image={imageUrl} />}
    </div>
  )
}

export default Gallery
