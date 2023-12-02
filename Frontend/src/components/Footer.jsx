
import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-column">
                {/* LOGO */}
                {/* <img src"assets/img/logo.png" alt="logo" /> */}
            </div>
            <div className="footer-column">
                <p>Entre em contato:</p>
                <p>Telefone: 99889898-989</p>
            </div>
            <div className="footer-column">
                <p>Siga-nos nas redes sociais:</p>
                <div className="social-links">
                    <a href="https://www.facebook.com/"><FaFacebook /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                </div>
            </div>
            <div className="footer-column">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d438.40263485619323!2d-48.783982!3d-28.472888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521530d7d8ae813%3A0xfda3f46181c9f8e5!2sAlem%C3%A3o%20Auto%20Center%20%7C%20Pneus%2C%20Escapamentos%2C%20Geometria%2C%20Balanceamento%2C%20Mec%C3%A2nica%20em%20Laguna!5e0!3m2!1spt-BR!2sbr!4v1701474148819!5m2!1spt-BR!2sbr" 
                title="Localização da empresa"
                width="600" 
                height="450" 
                allowfullscreen="" 
                aria-hidden="false"
                tabindex="0"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </footer>
    )
}

              
