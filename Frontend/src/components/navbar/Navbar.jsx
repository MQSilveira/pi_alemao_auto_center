import { useEffect, useState } from 'react'
import { navLogo } from '../../utils/ImageUtils'
import { Link } from 'react-scroll';

import * as Icons from '../../utils/IconsUtils'
import './Navbar.css'


export default function Navbar() {
    const [ isActive, setIsActive ] = useState(false)
    
    const toggleActive = () => {
        setIsActive(!isActive)
    }

    const handleItemClick = () => {
        setIsActive(false)
    }

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                setIsActive(false);
            }

            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
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
                                    <Link to="home" className="nav-link scrollto" spy={true} smooth={true} duration={500} offset={-500} onClick={handleItemClick}> 
                                        <span>Início</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="about" className="nav-link scrollto" spy={true} smooth={true} duration={500} onClick={handleItemClick}> 
                                        <span>Sobre nós</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="ourServices" className="nav-link scrollto" spy={true} smooth={true} duration={500} offset={-200} onClick={handleItemClick}> 
                                        <span>Serviços</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="budget" className="nav-link scrollto" spy={true} smooth={true} duration={500} onClick={handleItemClick}> 
                                        <span>Orçamento</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="footer" className="nav-link scrollto" spy={true} smooth={true} duration={500} onClick={handleItemClick}>
                                        <span>Contato</span>
                                    </Link>
                                </li>

                                {/* <li><a href="#assessments" className="nav-link scrollto" onClick={ScrollTo.Assessments}><span>Login</span></a></li> */}
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <a href='https://api.whatsapp.com/send?phone=5548984665068&text=Ol%C3%A1!%20Estava%20navegando%20pelo%20site%20e%20preciso%20de%20um%20or%C3%A7amento,%20pode%20me%20ajudar?' 
            className="appContact"
            target="_blank"
            rel="noopener noreferrer"
            >
                <i><Icons.WatsappIcon /></i>
                <span>WhatsApp</span>
            </a>
        </>
    )
}