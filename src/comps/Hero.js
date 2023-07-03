import React from 'react'

const Hero = ({ heading, message }) => {
    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
            {/*overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70' />
            <div className='p-5 z-[2] mt-[-10rem]'>
                <h2 className='text-5xl font-bold pb-4 turq'> {heading} </h2>
                <ul className='text-3xl font-light	'>
                    <li>Servicio de Catering</li>
                    <li>Servicio de mozos</li>
                    <li>Casamientos</li>
                    <li>Bautismos</li>
                    <li>15 años</li>
                    <li>Eventos</li>
                </ul>
                <p className='py-5 text-4xl'> {message} </p>
                <button className='px-8 py-2 border'>Contacto</button>
            </div>
        </div>
    )
}

export default Hero