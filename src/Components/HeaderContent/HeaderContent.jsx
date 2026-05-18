import React from 'react'
import './HeaderContent.css'
import MenuLink from '../MenuLink/MenuLink'
import ReactLogo from '../../assets/react.svg'

function HeaderContent() {
  return (
    <>
    
        <div id="navcontent">
            <h3>Header Content</h3>
            <MenuLink linkname="Home" url="#home"/>
            <MenuLink linkname="About" url="#about"/>
            <MenuLink linkname="Contact" url="#contact"/>
            <MenuLink linkname="Login" url="#login"/>
        </div>

        <div className="icons">
          <img src="favicon.svg" alt="favicon image"></img>
          <img src={ReactLogo} alt=""></img>
        </div>

        

    </>
  )
}

export default HeaderContent