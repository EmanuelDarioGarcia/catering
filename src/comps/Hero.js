import React from 'react'

const Hero = () => {
    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
            {/*overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70' />
            <div className='p-5 text-black ml-[-10rem] mt-[-10rem]'>
                <h2 className='text-5xl font-bold'> La Turquesa</h2>
                <p className='py-5 text-xl'>Catering</p>
                <button className='px-8 py-2'>Contacto</button>
            </div>
        </div>
    )
}

export default Hero