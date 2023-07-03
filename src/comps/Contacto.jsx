import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"

const Contacto = () => {
  return (
    <div id='contacto'>
      <div className='pl-5'>
        <h2 className='text-5xl pb-6'>Contactanos</h2>
        <h3 className='text-4xl'>Llamanos al:<FaPhone/> 4280-1738</h3>
        
        <ul>
          <li>
            <p className=''><FaPhone size={30} className='z-10' /> 11-6440-4879</p>
          </li>
          <li>
            <p className='group-hover:block'><FaFacebook size={30} className='z-10' />Catering "La Turquesa" </p>
          </li>
          <li>
            <p>irmadul62@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contacto