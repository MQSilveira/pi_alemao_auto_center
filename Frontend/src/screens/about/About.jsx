import { useInView } from 'react-intersection-observer'
import { about1 } from '../../utils/ImageUtils'
import './About.css'

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    return (
        <div ref={ref} name='about' className={`about ${inView ? 'in-view' : ''}`}>
            <div className="about-container">



                <div className="about-content">
                    <div className="text">
                        <h1 className="title">Sobre nós</h1>
                        <p className="subtitle">
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
