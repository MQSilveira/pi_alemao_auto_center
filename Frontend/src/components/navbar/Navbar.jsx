import { useState } from 'react'
import { navLogo } from '../../utils/ImageUtils'

import * as ScrollTo from '../../utils/ScrollUtils'
import * as Icons from '../../utils/IconsUtils'
import './Navbar.css'


export default function Navbar() {
    const [ isActive, setIsActive ] = useState(false)
    
    const toggleActive = () => {
        setIsActive(!isActive)
    }

    return (
        <header id="header">
            <div className="navbar-container">
                <div className="nav-logo">
                    <img src={navLogo} alt="Logo" />
                </div>

                <div className={`navbar ${isActive ? 'active' : ''}`}>
                    <input 
                    type='checkbox' 
                    id='active' 
                    checked={isActive} 
                    onChange={toggleActive} 
                    />
                    <label htmlFor='active' className='menu-btn'>
                        <span></span>
                    </label>
                    <label htmlFor='active' className='close'></label>

                    <div className='wrapper'>
                        <ul>
                            <li>
                                <a href="#home" className="nav-link scrollto" onClick={ScrollTo.Home}>
                                    <span>Início</span>
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="nav-link scrollto" onClick={ScrollTo.About}>
                                    <span>Sobre nós</span>
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="nav-link scrollto" onClick={ScrollTo.OurServices}>
                                    <span>Serviços</span>
                                </a>
                            </li>
                            <li>
                                <a href="#budget" className="nav-link scrollto" onClick={ScrollTo.Budget}>
                                    <span>Orçamento</span>
                                </a>
                            </li>

                            {/* <li><a href="#assessments" className="nav-link scrollto" onClick={ScrollTo.Assessments}><span>Login</span></a></li> */}
                        
                        </ul>
                    </div>
                </div>
            </div>
        
            <a href="#appContact" className="appContact">
                <i><Icons.WatsappIcon /></i>
                <span>WhatsApp</span>
            </a>
        </header>
    )
}