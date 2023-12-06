import React from 'react'
import './MissionVisionValues.css'
import { mission, vision, values } from '../../utils/ImageUtils'

const MissionVisionValues = () => {
  return (
    <div className='mission-vision-values'>
      <h1 className='title'>Por que escolher a Alemão Auto Center</h1>
      <p className="subtitle">
        Na Alemão Auto Center, acreditamos que a verdadeira base para o crescimento de uma empresa reside na Responsabilidade e Comprometimento com seus clientes. Em um mercado altamente competitivo, destacamo-nos como uma referência exemplar, oferecendo atendimento de qualidade e preços justos em Laguna.
      </p>

      <div className="mvv-container">
        <div className='section'>
          <div className='image-container'>
            <img src={mission} alt='Missão' className='image' />
          </div>
          <div className='mission-text'>
            <h3 className='sub'>Missão</h3>
            <p className="subtitle2">
              Nossa missão é ir além da prestação de serviços automotivos, buscando constantemente a excelência no atendimento ao cliente. Comprometemo-nos a proporcionar soluções eficazes, mantendo altos padrões de qualidade e transparência. Nosso objetivo é construir relações duradouras com nossos clientes, baseadas na confiança e na entrega de resultados que superem suas expectativas.  
            </p>
          </div>
        </div>
      </div>

      <div className="mvv-container">
        <div className='section'>
          <div className='vision-text'>
            <h3 className='sub'>Visão</h3>
            <p className="subtitle2">
              Vislumbramos ser reconhecidos como líderes no setor automotivo, não apenas por nossos serviços excepcionais, mas também pela inovação constante. Buscamos ser referência em práticas sustentáveis, promovendo um impacto positivo em nossa comunidade e no meio ambiente. Nossa visão é ser a escolha preferida dos clientes quando se trata de serviços automotivos de qualidade e compromisso.
            </p>
          </div>
          <div className='image-container'>
            <img src={vision} alt='Visão' className='image' />
          </div>
        </div>
      </div>

      <div className="mvv-container">
        <div className='section'> 
          <div className='image-container'>
            <img src={values} alt='Valores' className='image' />
          </div>
          <div className='values-text'>
            <h3 className='sub'>Valores</h3>
            <ul>
              <li><strong>Compromisso com o Cliente:</strong> Priorizamos a satisfação e as necessidades dos nossos clientes em todas as interações, assegurando um atendimento personalizado e eficiente.</li>
              <li><strong>Integridade:</strong> Pautamos nossas ações na honestidade e transparência, mantendo a confiança dos clientes e colaboradores.</li>
              <li><strong>Excelência Operacional:</strong> Buscamos constantemente aprimorar nossos processos e serviços, garantindo resultados de alta qualidade.</li>
              <li><strong>Sustentabilidade:</strong> Comprometemo-nos com práticas sustentáveis, visando minimizar nosso impacto ambiental e contribuir para um futuro mais responsável.</li>
              <li><strong>Valorização dos Colaboradores:</strong> Reconhecemos a importância de nossa equipe e promovemos um ambiente de trabalho positivo, que valorize o crescimento profissional e pessoal.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className='text-bottom'>
        Ao escolher a Alemão Auto Center, você está optando por uma empresa comprometida com a excelência, ética e responsabilidade em todos os aspectos de seu negócio. Estamos dedicados a ir além das expectativas, construindo uma relação sólida e confiável com nossos clientes e colaboradores.
      </p>
    </div>
  );
};

export default MissionVisionValues;
