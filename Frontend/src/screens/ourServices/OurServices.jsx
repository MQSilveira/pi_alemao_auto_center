import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './OurServices.css'

import { alignment, balance, brakes, mechanics, oil, suspension } from '../../utils/ImageUtils'


const servicesData = [
    {
        title: 'Alinhamento e Geometria',
        image: alignment,
    },
    {
        title: 'Balanceamento',
        image: balance,
    },
    {
        title: 'Manutenção de freios',
        image: brakes,
    },
    {
        title: 'Mecânica Geral',
        image: mechanics,
    },
    {
        title: 'Troca de Óleo  e Filtros',
        image: oil,
    },
    {
        title: 'Serviço de Suspensão',
        image: suspension,
    },
];

const OurServices = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 2500,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
  };

  return (
    <div className="our-services-container">
      <h2>Principais Serviços</h2>
      <Slider className="our-services-slider" {...settings}>
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurServices;
