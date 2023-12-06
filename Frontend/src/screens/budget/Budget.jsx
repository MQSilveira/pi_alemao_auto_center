import { useInView } from 'react-intersection-observer'
import './Budget.css'
import * as Icons from '../../utils/IconsUtils'

export default function Budget() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    return (
        <div ref={ref} id='budget' name='budget' className={`budget ${inView ? 'in-view' : ''}`}>
        
            <div className='budget-container'>
                <div className='budget-content'>
                    <h1 className="title">Fale Conosco</h1>
                    <p className="subtitle">
                        Estamos ansiosos para recebê-lo em nosso Auto Center, onde nos dedicamos a proporcionar os melhores serviços automotivos. Se precisar de um orçamento ou tiver alguma dúvida, não hesite em entrar em contato conosco pelo WhatsApp. Nossa equipe está pronta para atendê-lo com eficiência e profissionalismo. Aguardamos ansiosos pela oportunidade de servi-lo! 
                    </p>

                    <a href='https://api.whatsapp.com/send?phone=5548984665068&text=Ol%C3%A1!%20Estava%20navegando%20pelo%20site%20e%20preciso%20de%20um%20or%C3%A7amento,%20pode%20me%20ajudar?' 
                    className="aappContact"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <i><Icons.WatsappIcon /></i>
                        <span>Fale Conosco via WhatsApp</span>
                    </a>




                </div>
            </div>
        </div>
    )
}
