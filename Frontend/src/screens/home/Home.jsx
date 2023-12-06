import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Home.css';
import { NextArrow, PrevArrow} from '../../utils/ArrowsCarrossel'
import CarouselSlide from '../../utils/CarouselSlide'
import { carrossel1, carrossel2, carrossel3, carrossel4, carrossel5 } from '../../utils/ImageUtils'

const Carousel = () => {
    const arrayText = [
        'Soluções completas em serviços automotivos',
        'Profissionais experientes para serviços de alta qualidade',
        'Serviço rápido e eficiente, otimizando seu tempo',
        'Ampla variedade de produtos para todos os veículos',
        'Mecânica Geral\nGeometria 3D\nTroca de Óleo\nServiços de Freios, Suspensão, Pneus e Escapamentos'
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange  = (index) => {
        setCurrentSlide(index);
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (_, next) => {
            handleSlideChange(next);
        }, 
    };
    
    return (
        <div name='home' className='home' id='home'>
            <div className='carousel-container' data-aos="zoom-in" data-aos-delay="100">
                <Slider {...settings}>
                    {[carrossel1, carrossel2, carrossel3, carrossel4, carrossel5].map((image, index) => (
                        <CarouselSlide
                            key={index}
                            index={index}
                            currentSlide={currentSlide}
                            handleSlideChange={handleSlideChange}
                            image={image}
                            text={arrayText[index]}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
