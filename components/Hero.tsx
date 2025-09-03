'use client'


import { useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    
    const router = useRouter()
    
    return (
        <div className="min-w-full overflow-hidden flex items-center justify-center relative min-h-[800px] h-screen xl:px-2">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/rust.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4 gap-0">Welcome to Rusty <span className='font-satisfy'>Works</span></h1>
                    
                    <div className="relative">
                        <div className="flex items-center justify-center gap-8 mb-8">
                            <div className="h-[1px] w-20 bg-gradient-to-r from-white/20 via-white/40 to-white/20"></div>
                            <p className="text-xl font-regular tracking-wide">Showcasing complex backend architechture</p>
                            <div className="h-[1px] w-20 bg-gradient-to-r from-white/20 via-white/40 to-white/20"></div>
                        </div>

                    </div>

                    <motion.button 
                        className='px-6 py-3 bg-transparent text-white border-2 border-white rounded-2xl font-bold hover:opacity-80 transition-all hover:bg-white/80 hover:text-black hover:border-white/80 duration-400 ease-in-out'
                        onClick={() => {router.push('#works')}}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Proceed <span className='italic'>to</span> Works
                    </motion.button>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className="inline-flex gap-2 p-4 rounded-3xl bg-black/20 backdrop-blur-sm mt-8 border border-white/5"
                    >
                        <div className="relative w-[120px] h-[32px] flex items-center justify-center">
                            <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="text-lg font-medium tracking-wide text-white/90 absolute whitespace-nowrap"
                                style={{ transformOrigin: "center" }}
                            >
                                Live Demos
                            </motion.span>
                        </div>
                        <span className="text-lg text-white/40">|</span>
                        <div className="relative w-[140px] h-[32px] flex items-center justify-center">
                            <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="text-lg font-medium tracking-wide text-white/90 absolute whitespace-nowrap"
                                style={{ transformOrigin: "center" }}
                            >
                                Open Source
                            </motion.span>
                        </div>
                        <span className="text-lg text-white/40">|</span>
                        <div className="relative w-[80px] h-[32px] flex items-center justify-center">
                            <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="text-lg font-medium tracking-wide text-white/90 absolute whitespace-nowrap"
                                style={{ transformOrigin: "center" }}
                            >
                                Docs 🦀
                            </motion.span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}