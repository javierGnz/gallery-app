import React from 'react'

const GalleryImage = ({ src }) => {
  return (
    <div className="gallery__card">
      <img className="gallery__image" src={src} alt="cat" />
    </div>
  )
}

export default GalleryImage
