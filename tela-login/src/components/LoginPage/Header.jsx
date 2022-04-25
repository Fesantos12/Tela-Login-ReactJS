import React from 'react' 
import './Header.css'

const Header = () => {
    return (
        <>
            
            <div className="Header-Container">
                <a href="#" className="Logo">Logo</a>
                <ul className='HeaderUl'>
                    <li><a href="#">Cursos</a></li>
                    <li><a href="#">Vagas</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
            </div>
            
        </>
    )
}

export default Header;