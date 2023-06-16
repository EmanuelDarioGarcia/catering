import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='galeria' className='max-w-[1240px] mx-auto'>
      <h1 className='text-2xl font-bold text-center p-4'>Galeria</h1>
      <div className='relative flex justify-center p-4'>
      <FaArrowCircleLeft
              onClick={prevSlide}
              className='absolute bottom-1/4 left-0 text-white/70 cursor-pointer select-none z-10 w-24'
              style={{ color: "gray" }}
              size={50}
            />
      <FaArrowCircleRight
              onClick={nextSlide}
              className='absolute right-0 bottom-1/4  text-white/70 cursor-pointer select-none z-10 w-24'
              style={{ color: "gray" }}
              size={50}
            />
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-1000 z-0'
                : 'opacity-0'
            }
          >

            {index === current && (
              <Image
                src={slide.image}
                alt='/'
                width='600'
                height='800'
                objectFit='cover'
              />
            )}

          </div>
        );
    })}
    </div>
    </div>
  );
};

export default Slider;