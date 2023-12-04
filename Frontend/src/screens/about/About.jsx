import { about1 } from '../../utils/ImageUtils'
import './About.css'



export default function About() {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-text">
                        <h1 className="about-title">Sobre nós</h1>
                        <p className="about-subtitle">
                            Somos uma oficina mecânica dedicada ao atendimento completo das necessidades do seu veículo. Localizada em Laguna, a Alemão Auto Center é uma referência em serviços automotivos, destacando-se pela excelência, comprometimento e expertise que oferecemos aos nossos clientes.
                        </p>
                    </div>
                    <div className="about-image-container">
                        
                    <img 
                        className="about-image" 
                        src={about1} 
                        alt="Alemão Auto Center" 
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
