import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './OurServices.css'
import { servicesData } from '../../utils/ServiceData'

const OurServices = () => {

  const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
  })
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
  }

  return (
    
    <div id='ourServices' ref={ref} name='our-services-container' className={`our-services-container ${inView ? 'in-view' : ''}`}>
      <h3 className='sub-services'>Principais Serviços</h3>
      <Slider className='our-services-slider' {...settings}>
        {servicesData.map((service, index) => (
          <div key={index} className='service-item'>
            <img src={service.image} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default OurServices
