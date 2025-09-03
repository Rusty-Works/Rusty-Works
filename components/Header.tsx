

'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {

            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.paddingRight = '0px';
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.paddingRight = '0px';
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const menuItems = [
        { title: 'Docs', href: '/company' },
        { title: 'Works', href: '/pipeline' },
        { title: 'Live & Testing', href: '/media' },
        { title: 'Github', href: '/contact' }
    ];

    const rustyworks = [
        {title : 'Docs' , href :'/docs' , image : '/logo.png'},
        {title : 'Works' , href :'/works', image : '/logo.png'},
]

    return (
        <>
            {/* Desktop Header */}
            <header className="absolute top-3  px-6 z-50 hidden lg:block bg-white/20  backdrop-blur-md rounded-3xl my-2
            w-2/3 2xl:px-8">   
                <div className="max-w-8xl mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold flex flex-row-1 items-center">
                      {/* <img src="/logo.png" alt="RustySky Logo" className="w-32" />
                       */}
                       <span className='text-4xl text-white  font-bold'>Rusty <span className='font-satisfy'>Works</span></span>              
                      <div className="relative ml-2">
                        {/* <img 
                          width="30" 
                          height="30" 
                          src="https://img.icons8.com/?size=100&id=40021&format=png&color=FFFFFF" 
                          className='cursor-pointer transition-transform duration-300 transform'
                          style={{
                            transform: isMenuOpen ? 'rotate(-90deg)' : 'rotate(0)'
                          }}
                          alt="expand-arrow--v2"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        /> */}

     
                      </div>
                    </div>
                    
                    <nav className="flex items-center  text-white ">
                        {menuItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative group  px-8 py-8"
                            >
                                <Link
                                    href={item.href}
                                    className="text-md 2xl:text-xl relative block transition-all duration-100 ease-in-out"
                                >
                                    <span className="block font-regular group-hover:opacity-0 duration-50 ease-out">
                                        {item.title}
                                    </span>
                                    <span className="font-satisfy absolute inset-0 opacity-0 group-hover:opacity-100 duration-50 ease-in">
                                        {item.title}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="absolute top-0 w-full px-6 z-50 lg:hidden pt-10">
                <div className="flex justify-between items-center relative z-50  ">
                    <Link href="/" className="text-2xl font-bold">
                            <Image 
                                src="/logo.png" 
                                alt="RustySky Logo" 
                                width={140}
                                height={35}
                                className="w-35" 
                            />
                    </Link>
                    
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-8 h-8 relative flex items-center justify-center z-50 text-white"
                        aria-label="Toggle menu"
                    >
                        <div className="absolute w-6 h-6 flex items-center justify-center">
                            {/* Plus/X animation */}
                            <div className={`
                                w-6 h-0.5 bg-current absolute
                                transition-transform duration-300
                                ${isMenuOpen ? 'rotate-45' : 'rotate-0'}
                            `} />
                            <div className={`
                                w-6 h-0.5 bg-current absolute
                                transition-transform duration-300
                                ${isMenuOpen ? '-rotate-45' : 'rotate-90'}
                            `} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`
                    fixed inset-0 bg-white/15 backdrop-blur-lg z-40
                    transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}>
                    <div className={`
                        flex flex-col items-start p-6 pt-24 mt-20 space-y-6
                        transition-all duration-500 ease-in-out
                        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}  w-3/4  ml-8 mt-8
                    `}>
                        {menuItems.map((item, index) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="text-2xl font-regular text-white hover:opacity-70 transition-opacity"
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    transitionDelay: `${index * 50}ms`,
                                    opacity: isMenuOpen ? 1 : 0,
                                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                                    transition: 'opacity 0.3s ease, transform 0.3s ease'
                                }}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}