import React, { Component } from 'react'

export class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      openModal: false
    }
  }
  
  render() {
    return (
      <div className="gallery">
        Galery Div
      </div>
    )
  }
}

export default Gallery
