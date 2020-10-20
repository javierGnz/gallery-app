import React, { useState } from 'react'

const GalleryModal = ({ image, handleClose }) => {
  return (
    <div className="gallery__modal">
      <div className="gallery__modal-body">
        <div className="gallery__modal-leftside">
          <img className="gallery__modal-img" src={image} alt="Cat"/>
        </div>
        {/* <div className="gallery__modal-rightside">right side</div> */}
        <button className="gallery__modal-close" onClick={handleClose}>
          x
        </button>
      </div>
    </div>
  )
}

export default GalleryModal
