import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import { LINKS } from './../constants/index';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
        <nav className='border-b-2' id="home">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
                <div className="pl-4 flex items-center">
                    <a href="/" className='flex items-center'>
                        <Logo />
                        {/* <span className='font-bold uppercase text-2xl'>VastuSpaze</span>
                        <span className='text-slate-800'>
                            <LuLamp size={40} />
                        </span> */}
                    </a>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu}
                        className='flex items-center text-3xl pr-2 focus:outline-none' aria-label={isOpen ? "Close menu" : "Open menu"}>
                        {isOpen ? <IoMdClose /> : <IoMenu />}
                    </button>
                </div>

                <div className="hidden md:flex space-x-8 md:space-x-4 pr-4">
                    {LINKS.map((link, index) => (
                        <a key={index}
                            href={link.link}
                            className='uppercase text-sm font-medium hover:underline'
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
                {LINKS.map((link, index) => (
                    <a key={index}
                        href={link.link}
                        className='uppercase text-lg font-medium block py-2 tracking-wide'
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    </>
  )
}

export default Navbar