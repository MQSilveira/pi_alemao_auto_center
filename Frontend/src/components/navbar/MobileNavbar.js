
import './Navbar.css'

export const MobileNavbar = ({ isMobile, toggleMobile }) => (
    <div className={`wrapper ${isMobile ? 'active' : ''}`}>
        <ul>
            {/* <li><a href='#home' onClick={toggleMobile}>Início</a></li>
            <li><a href='#about' onClick={toggleMobile}>Sobre nós</a></li>
            <li><a href='#services' onClick={toggleMobile}>Serviços</a></li>
            <li><a href='#budget' onClick={toggleMobile}>Orçamento</a></li> */}
            
            <li><a href='#home'>Início</a></li>
            <li><a href='#about'>Sobre nós</a></li>
            <li><a href='#services'>Serviços</a></li>
            <li><a href='#budget'>Orçamento</a></li>
        </ul>
        {/* <input type='checkbox' id='active' checked={isMobile} onClick={toggleMobile} />
        <label htmlFor='active' className='close' onClick={toggleMobile} /> */}
        
        <input type='checkbox' id='active' checked={isMobile} onChange={toggleMobile} />
        <label htmlFor='active' className='close' onClick={toggleMobile} />
    </div>
)

