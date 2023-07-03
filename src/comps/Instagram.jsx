import React from 'react'
import Img1 from '../../public/img1.jpg'
import Img2 from '../../public/img2.jpg'
import Img3 from '../../public/img3.jpg'
import Img4 from '../../public/img4.jpg'
import Img5 from '../../public/img5.jpg'
import Img6 from '../../public/img6.jpg'
import Img7 from '../../public/img7.jpg'
import Img8 from '../../public/img8.jpg'
import Img9 from '../../public/img9.jpg'
import Img10 from '../../public/img10.jpg'
import Img11 from '../../public/img11.jpg'
import InstagramImg from './Instagramimg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-4'>
      <h1 className='text-5xl font-bold'>Seguinos en las redes</h1>
      <p className='pb-4 text-2xl'>En Facebook, como: Catering "La Turquesa"</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <InstagramImg socialImg={Img1} />
        <InstagramImg socialImg={Img2} />
        <InstagramImg socialImg={Img5} />
        <InstagramImg socialImg={Img3} />
        <InstagramImg socialImg={Img4} />
        <InstagramImg socialImg={Img6} />
        <InstagramImg socialImg={Img8} />
        <InstagramImg socialImg={Img9} />
        <InstagramImg socialImg={Img10} />
        <InstagramImg socialImg={Img11} />
        <InstagramImg socialImg={Img7} />
      </div>
    </div>
  )
}

export default Instagram