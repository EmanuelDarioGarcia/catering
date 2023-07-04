import React from 'react'
import { FaWhatsapp } from "react-icons/fa"

const whatsapp = () => {
  return (
    <div className='flex'>
        <a href="https://wa.me/5491164404879" className='btn-wsp' target='blank'>
            <FaWhatsapp />
        </a>
    </div>
  )
}

export default whatsapp