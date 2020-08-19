import React from 'react'
import './styles.scss'

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrapper__title">
        <h1>Cats from the web</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="wrapper__content">
        {children}
      </div>
    </div>
  )
}

export default Layout
