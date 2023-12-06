
import { Link } from 'react-scroll';
import './Navbar.css'

export const MobileNavbar = ({ isMobile, toggleMobile }) => {

    const handleItemClick = () => {
        console.log('Toggling mobile menu');


      if (isMobile) {
        toggleMobile();
      }
    };

    return (
        <div className={`wrapper ${isMobile ? 'active' : ''}`}>
            <ul>            
                <li>
                    <Link 
                    to="home" 
                    className="nav-link scrollto" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    offset={-500}
                    onClick={handleItemClick}> 
                        <span>Início</span>
                    </Link>
                </li>
                <li>
                    <Link to="about" className="nav-link scrollto" spy={true} smooth={true} duration={500}> 
                        <span>Sobre nós</span>
                    </Link>
                </li>
                <li>
                    <Link to="ourServices" className="nav-link scrollto" spy={true} smooth={true} duration={500} offset={-200}> 
                        <span>Serviços</span>
                    </Link>
                </li>
                <li>
                    <Link to="budget" className="nav-link scrollto" spy={true} smooth={true} duration={500}> 
                        <span>Orçamento</span>
                    </Link>
                </li>
                <li>
                <Link to="footer" className="nav-link scrollto" spy={true} smooth={true} duration={500} > 
                    <span>Contato</span>
                </Link>
                </li>
            </ul>
            
            <input type='checkbox' id='active' checked={isMobile} onChange={toggleMobile} />
            <label htmlFor='active' className='close' onClick={toggleMobile} />
        </div>
    )
}

