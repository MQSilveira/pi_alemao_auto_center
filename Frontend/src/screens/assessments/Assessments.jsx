import React, { useEffect } from 'react'
import './Assessments.css'


export default function Assessments() {
    useEffect(() => {
        const script = document.createElement('script')

        script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js'
        script.async = true
        script.defer = true
        document.body.appendChild(script)
    }, [])

    return (
        <div className='assessments'>
            <h3>Avaliações</h3>
            <p>
                Sua opinião é essencial para impulsionar nosso crescimento. <br />
                Se você teve uma experiência conosco, por favor, compartilhe seus comentários. Valorizamos profundamente suas sugestões, pois elas nos ajudam a aprimorar continuamente nossos serviços e proporcionar a você uma experiência ainda melhor.
            </p>
            <div className='sk-ww-google-reviews' data-embed-id='237309'></div>
        </div>
    )
}
