import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from 'react-icons/fa'

const Contacto = () => {
  return (
    <div id='contacto'>
      <div className='pl-5'>
        <h1 className='text-5xl mb-6 pb-3 font-bold border-b-4 flex justify-center '>Contactanos</h1>
        <h3 className='text-4xl turq pb-4'>Llamanos al:</h3>
        <div className='flex flex-row p-2'>
          <FaPhone fill='#8b5ff2' size={30} className='basis-1/4'/>
          <p className='basis-1/4 pl-4 text-xl '> 4280-1738</p>  
        </div>
        <div className='flex flex-row p-2'>
          <FaPhone fill='#8b5ff2' size={30} className='z-10'/>
          <p className='basis-1/4 pl-4 text-xl '> 11-6440-4879</p>  
        </div>
        <div className='flex flex-row p-2'>
          <FaFacebook fill='#8b5ff2' size={30} className='z-10' />
          <p className='basis-1/4 pl-4 text-xl '> Catering "La Turquesa"</p>  
        </div>
        <div className='flex flex-row p-2'>
          <FaEnvelope  fill='#8b5ff2' size={30} className='z-10' />
          <p className='basis-1/4 pl-4 text-xl '> irmadul62@gmail.com</p>  
        </div>
      </div>
    </div>
  )
}

export default Contacto