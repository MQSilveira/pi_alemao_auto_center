import { useState } from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Home.css';
import { NextArrow, PrevArrow} from '../../utils/ArrowsCarrossel'
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
    <div className='carousel-container'>
    <Slider {...settings}>
        {[carrossel1, carrossel2, carrossel3, carrossel4, carrossel5].map((image, index) => ( 
            <div className='carousel-slide' key={index}>

                <motion.div
                className='content-wrapper'
                initial={{ opacity: 0, y: '-100%' }}
                animate={
                    currentSlide === index
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: '-100%' }
                }
                transition={{
                    duration: 0.5,
                    delay: currentSlide === index ? 1 : 0,
                }}
                >

            </motion.div>
            <div className='text-container'>
                <div className='text-content'>
                    {arrayText[index].split('').map((el, i) => (
                        <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={currentSlide === index ? { opacity: 1 } : {}}
                        transition={{
                            duration: currentSlide === index ? 0.5 : 0,
                            delay: currentSlide === index ? 2 + i / 50 : 0,
                            }}
                        >
                            {el}{''}
                        </motion.span>
                    ))}
                </div>
            </div>
            <img 
            src={image} 
            alt={`Imagem ${index + 1}`}
            />
            </div>
        ))}
    </Slider>
    </div>
    );
};

export default Carousel;
