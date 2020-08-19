import React, { useState, useEffect } from 'react'
import GalleryImage from './GalleryImage'
import './styles.scss'

const Gallery = ({ data }) => {
  return (
    <div className="gallery">
      {data.map(({ id, url }) => {
        return <GalleryImage key={id} src={url} />
      })}
    </div>
  )
}

export default Gallery
