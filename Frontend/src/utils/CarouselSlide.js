import { motion } from 'framer-motion';

const CarouselSlide = ({ index, currentSlide, image, text }) => {
    return (
        <div className='carousel-slide'>
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
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={currentSlide === index ? { opacity: 1 } : {}}
                        transition={{
                            duration: currentSlide === index ? 0.5 : 0,
                            delay: currentSlide === index ? 2 : 0,
                        }}
                    >
                        {text}
                    </motion.span>
                </div>
            </div>
            <img
                src={image}
                alt={`Imagem ${index + 1}`}
            />
        </div>
    );
};

export default CarouselSlide;
