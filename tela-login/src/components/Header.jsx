import React from 'react' 
import './Header.css'

const Header = () => {
    return (
        <>
            
            <div className="Header-Container">
                <a href="#" className="Logo">Logo</a>
                <ul className='HeaderUl'>
                    <li><a href="#">Sass</a></li>
                    <li><a href="#">Components</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </div>
            
        </>
    )
}

export default Header;