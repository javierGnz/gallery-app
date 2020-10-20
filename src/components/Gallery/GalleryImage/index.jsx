import React, { useState } from 'react'


const GalleryImage = ({ src, handleClick }) => {
  return (
    <div className="gallery__card" onClick={handleClick}>
      <img className="gallery__image" src={src} alt="cat" />
    </div>
  )
}

export default GalleryImage
