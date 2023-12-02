import { navLogo } from '../utils/ImageUtils'


import * as ScrollTo from '../utils/ScrollUtils'
import * as Icons from '../utils/IconsUtils'
import './styles/Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <header id="header">
                <div className="nav-logo">
                    <img src={navLogo} alt="Logo" />
                </div>

                <nav className='nav-menu'>
                    <ul>
                        <li><a href="#home" className="nav-link scrollto" onClick={ScrollTo.Home}><span>Início</span></a></li>
                        <li><a href="#about" className="nav-link scrollto" onClick={ScrollTo.About}><span>Sobre nós</span></a></li>
                        <li><a href="#services" className="nav-link scrollto" onClick={ScrollTo.OurServices}><span>Serviços</span></a></li>
                        <li><a href="#budget" className="nav-link scrollto" onClick={ScrollTo.Budget}><span>Orçamento</span></a></li>
                        {/* <li><a href="#assessments" className="nav-link scrollto" onClick={ScrollTo.Assessments}><span>Login</span></a></li> */}
                    </ul>
                </nav>
                
            </header>
            <a href="#appContact" className="appContact"><i><Icons.WatsappIcon /></i><span>WhatsApp</span></a>
        </div>
    )
}
