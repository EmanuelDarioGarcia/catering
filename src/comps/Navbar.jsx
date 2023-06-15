import Link from 'next/link'
import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300 '>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 font-sans font-bold	 '>
                <Link href='/'>
                    <h1 className='font-bold text-4xl'>Catering</h1>
                </Link>
                <ul className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/' >Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/#galeria' >Galeria</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/#portfolio' >Menues</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/' >Contacto</Link>
                    </li>
                </ul>

                { /* Mobile button */}
                <div className='block sm:hidden z-10 text-white '>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
                </div>

                { /* Mobile menu */}
                
                <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white' : ' sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'}>
                    <ul>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/' >Home</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#galeria' >Galeria</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#portfolio' >Menues</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/' >Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar