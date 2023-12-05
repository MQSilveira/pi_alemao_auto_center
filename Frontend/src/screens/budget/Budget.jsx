import './Budget.css'
import * as Icons from '../../utils/IconsUtils'


export default function Budget() {
    return (
        <div className='budget'>
            <div className='budget-container'>
                <div className='budget-content'>
                    <h3>Fale Conosco</h3>
                    <p>Estamos ansiosos para recebê-lo em nosso Auto Center, onde nos dedicamos a proporcionar os melhores serviços automotivos. Se precisar de um orçamento ou tiver alguma dúvida, não hesite em entrar em contato conosco pelo WhatsApp. Nossa equipe está pronta para atendê-lo com eficiência e profissionalismo. Aguardamos ansiosos pela oportunidade de servi-lo! </p>

                    <a href="#appContact" className="aappContact">
                        <i><Icons.WatsappIcon /></i>
                        <span>Fale Conosco via WhatsApp</span>
                    </a>
                    
                    {/*<button onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=SEUNUMERODOTELEFONE&text=Olá!%20Gostaria%20de%20um%20orçamento.'}>
                        Fale Conosco no WhatsApp
                    </button> */}
                    
                </div>
            </div>
        </div>
    )
}
