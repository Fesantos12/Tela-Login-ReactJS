import React from 'react'

import './Footer.css'
import Logo from './instagram.png'

const Footer = () => {
    return (
        <div className="Container">
            <a href="#"> &copy; Unker </a>
            <div className="Insta">
                <img src={Logo} alt="Logo do Instagram" />
                <a href="#">Fe_santos95</a>   
            </div>
        </div>
    )
}

export default Footer;