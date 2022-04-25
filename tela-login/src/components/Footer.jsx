import React from 'react'

import './Footer.css'
import Logo from './instagram.png'

const Footer = () => {
    return (
        <div className="Container">
            <a href="https://github.com/Fesantos12" target="E_blank"> &copy; Unker </a>
            <div className="Insta">
                <img src={Logo} alt="Logo do Instagram" />
                <a href="https://www.instagram.com/fe_santos95/" target="E_blank">Fe_santos95</a>   
            </div>
        </div>
    )
}

export default Footer;