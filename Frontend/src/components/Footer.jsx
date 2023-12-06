import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { cardLogo, navLogo } from '../utils/ImageUtils'
import './styles/Footer.css'

export default function Footer() {
    return (
        <footer id="footer">
            <div className='left-side'>
                <div className='logo-container'>
                    <img src={navLogo} alt='Logo da empresa'/>
                </div>
                <div className='cards'>
                    <img src={cardLogo} alt='Bandeiras aceitas pela empresa'/>
                </div>
                <div className='social-container'>
                    <div className='title-footer'>Siga-nos nas redes sociais:</div>
                    <div className='social-links'>
                        <a href='https://www.facebook.com/people/Alemao-Varela/100094512102901/?mibextid=ZbWKwL' target='_blank' rel='noreferrer'><FaFacebook /></a>
                        <a href='https://www.instagram.com/alemaoautocentersc/' target='_blank' rel='noreferrer'><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className='center-left'>
                <div className='contacts-container'>
                    <div className='title-footer'>Contato</div>
                    <div className='content-footer'>Telefone: (48) 98466-5068</div>
                    <div className='content-footer'>WhatsApp: (48) 98466-5068</div>
                </div>
                <div className='title-footer'>Endereço</div>
                <div className='content-footer'>Av. Senador Galotti, 244 - Progresso, Laguna - SC, 88790-000</div>
            </div>

            <div className='center-right'>
                <div className='title-footer'>Localização</div>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d438.40263485619323!2d-48.783982!3d-28.472888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521530d7d8ae813%3A0xfda3f46181c9f8e5!2sAlem%C3%A3o%20Auto%20Center%20%7C%20Pneus%2C%20Escapamentos%2C%20Geometria%2C%20Balanceamento%2C%20Mec%C3%A2nica%20em%20Laguna!5e0!3m2!1spt-BR!2sbr!4v1701474148819!5m2!1spt-BR!2sbr" 
                title="Auto Center Alemão"
                width="90%"
                height="300" 
                allowFullScreen="" 
                aria-hidden="false"
                tabIndex="10"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className='right-side'>
            <div className='title-footer'>Horário de funcionamento</div>
                <div className='content-footer'>
                    <strong>Segunda a Sexta:</strong>
                    <div>
                        08:00 às 12:00
                    </div>
                    <div>
                        13:30 às 18:00
                    </div>
                </div>
                <div className='content-footer'>
                <strong>Sábado:</strong>
                    <div>
                        08:00 às 12:00
                    </div>
                </div>
                <div className='content-footer'>
                <strong>Domingo:</strong>
                    <div>
                        Fechado
                    </div>
                </div>
            </div>
        </footer>
    )
}
