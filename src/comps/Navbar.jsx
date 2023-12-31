import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('trasparent')
    const [textColor, setTextColor] = useState('#ACBCFF')

    const handleNav = () => {
        setNav(!nav)
    }
    
    useEffect (() => {
        const changeColor = () => {
            if (window.scrollY >=90) {
                setColor('#FEDEFF')
                setTextColor('#B799FF')
            } else {
                setColor ('transparent')
                setTextColor('#ACBCFF')
            }
        }
        window.addEventListener('scroll', changeColor);
    }, [])

    return (
        <div
                style={{backgroundColor: `${color}`}} 
            className='fixed left-0 top-0 w-full z-10 ease-in- duration-300 '
            >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
                <a href='/'>
                    <h1 style={{color: `${textColor}`}} className='font-bold text-4xl z-50'>
                        Catering La Turquesa
                    </h1>
                </a>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                    <li className='p-4'>
                        <a href='/#home' >Home</a>
                    </li>
                    <li className='p-4'>
                        <a href='/#galeria' >Galeria</a>
                    </li>
                    <li className='p-4'>
                        <a href='/#contacto' >Contacto</a>
                    </li>
                </ul>

                { /* Mobile button */}
                <div onClick={handleNav} className='block sm:hidden z-10 text-white '>
                    {nav ? ( 
                        <AiOutlineClose size={20} style={{color: `${textColor}`}} />
                        ) : (
                        <AiOutlineMenu size={20} style={{color: `${textColor}`}} />
                    )}
                </div>

                { /* Mobile menu */}
                
                <div 
                    className={
                        nav 
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-gray-900 '
                        : 'sm:hidden absolute top-0 left-full right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
                    }
                >
                    <ul>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/' >Home</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#galeria' >Galeria</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#contacto' >Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar