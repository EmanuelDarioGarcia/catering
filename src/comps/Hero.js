import React from 'react'

const Hero = ({ heading, message }) => {
    return (
        <div className="flex items-center justify-center bg-fixed bg-center bg-cover">
            {/*overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70' />
            <div className='p-5 z-[2] mt-[-10rem] bg-gradient-to-r from-pink-200 to-lime-400' >
                <h1 className='text-5xl font-bold pb-4 turq border-b-4 flex justify-center turq mt-4'> {heading} </h1>
                <ul className='text-xl font-light'>
                    <li>La Turquesa Catering es una empresa de catering dedicada a la realización de eventos cuya estrategia de crecimiento se ha basado en la satisfacción del cliente y la innovación constante. </li>
                    <li>Utilizamos materia prima de gran calidad para brindarles a los comensales un producto de excelencia. </li>
                    <br/>

                    <li>Con nuestro personal adecuadamente uniformado y siempre predispuesto a atenderlo con una sonrisa para hacer de su evento un agradable y cálido momento. </li>
                    <li>El contacto con los jóvenes chef le dará una tranquilizadora sensación de alegría, limpieza, frescura, orden y eficiencia. </li>
                    <br/>
                    <li>Por eso le ofrecemos nuestros servicios para eventos y festejos inolvidables, tales como Pizza Party, Pasta Party, Tacos, cazuelas, parrillas, y nuestros servicios de Lunch una opcion super completa y abunadante.</li>
                    <br/>
                </ul>
                <h1 className='py-5 text-4xl'> {message} </h1>
            </div>
        </div>
    )
}

export default Hero