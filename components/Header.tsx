

'use client'

import { useState, useEffect } from 'react';

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
        { title: 'Our Company', href: '/company' },
        { title: 'Pipeline', href: '/pipeline' },
        { title: 'Media & Investors', href: '/media' },
        { title: 'Contact', href: '/contact' }
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
                      <img src="/logo.png" alt="RustySky Logo" className="w-32" />
                      <div className="relative ml-2">
                        <img 
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
                            setIsMenuOpen(!isMenuOpen);
                          }}
                        />

                        <div className={`
                          absolute top-full left-0 mt-2
                          transition-all duration-300 ease-in-out
                          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0  translate-y-0'}
                          z-[60]
                        `}>
                          <div className={`
                            flex flex-col items-start p-4 space-y-4 bg-white/5 mt-
                            border-b-0 border-x-0 border-white/20 border-t-0 backdrop-blur-4xl rounded-b-xl
                            min-w-[200px]  mt-[21px] 
                          `}>
                            {rustyworks.map((item, index) => (
                              <div
                                key={item.title}
                                className="text-md font-bold 2xl:text-lg text-white hover:font-satisfy transition-all duration-300 ease-in-out  p-2"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsMenuOpen(false);
                                }}
                              >
                                <img src={item.image} alt="" className='w-auto h-auto'/>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <nav className="flex items-center  text-white ">
                        {menuItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative group  px-8 py-8"
                            >
                                <a
                                    href={item.href}
                                    className="text-md 2xl:text-lg   relative block transition-all duration-100 ease-in-out"
                                >
                                    <span className="block font-regular group-hover:opacity-0 transition-none duration-0">
                                        {item.title}
                                    </span>
                                    <span className="font-satisfy absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        {item.title}
                                    </span>
                                </a>
                            </div>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="absolute top-0 w-full px-6 z-50 lg:hidden pt-10">
                <div className="flex justify-between items-center relative z-50  ">
                    <a href="/" className="text-2xl font-bold">
                            <img src="/logo.png" alt="RustySky Logo" className="w-35" />
                    </a>
                    
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