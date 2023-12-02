import * as ScrollTo from '../utils/ScrollUtils'
import * as Icons from '../utils/IconsUtils'

export default function Sidebar() {
    return (
        <div className="sidebar">
            {/* ======= Mobile nav toggle button =======  */}
            {/* <i className="bi bi-list mobile-nav-toggle d-lg-none"></i> */}
            <header id="header" class="d-flex flex-column justify-content-center">
                {/* .nav-menu  */}
                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <li><a href="#home" className="nav-link scrollto" onClick={ScrollTo.Home}><span>Início</span></a></li>
                        <li><a href="#about" className="nav-link scrollto" onClick={ScrollTo.About}><span>Sobre nós</span></a></li>
                        <li><a href="#services" className="nav-link scrollto" onClick={ScrollTo.OurServices}><span>Serviços</span></a></li>
                    </ul>
                </nav>
                {/* .nav-menu  */}
            </header>
            <a href="#home" className="back-to-top d-flex align-items-center justify-content-center"><i><Icons.HomeIcon /></i></a>
            <a href="#appContact" className="back-to-top d-flex align-items-center justify-content-center"><i><Icons.WatsappIcon /></i></a>
        </div>
    )
}

