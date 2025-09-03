

export default function Works() {   
    const projects = [
        {
            title: "Rusty-Types",
            description: "this is cli type, a super fast and fun terminal app that helps you practice typing. it's built with rust and keeps things simple yet engaging. you'll get to practice typing actual rust code snippets while tracking your speed.",
            color: ['#C14D30', '#E85D3F', '#F47B52', '#FF9466'],
            tech: "Crossterm, Rand, Rust 2021",
            image: "/projects/proc1.png",},
        {
            title: "Rusty-Server",
            description: "a fast and efficient http api server built with axum that lets you interact with the solana blockchain. you can use it to get information about accounts, check balances, see transactions, view the status of the network, and much more.",
            color: ['#A13B1F', '#C14D30', '#E85D3F', '#F47B52'],
            tech: "Axum, tokio, spl-token",
            image: "/projects/proc2.png"
        },
        {
            title: "Real-time Processing Engine",
            description: "Advanced data processing system leveraging Rust's fearless concurrency. Handles massive data streams with minimal latency and maximum reliability.",
            color: ['#7A2C17', '#A13B1F', '#C14D30', '#E85D3F'],
            tech: "Tokio, RocketRS",
            image: "/projects/proc3.png"
        }
    ]
    return ( 
        <section className='w-full min-h-screen py-32 bg-gradient-to-b from-white via-gray-50 to-white'
            id='works'
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#C14D30]/20 to-[#F47B52]/20 blur-3xl opacity-75 -z-10"></div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-6xl md:text-7xl font-bold md:mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#C14D30] to-[#F47B52]">
                            Featured Projects
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Showcasing the power of Rust through practical, high-performance solutions. 
                            Each project demonstrates what's possible when robust backend meets intuitive design.
                        </p>
                       
                    </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:gap-y-40 gap-y-30">
                    <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
                  
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 relative`}
                        >
                            <motion.div 
                                className="w-full lg:w-7/12"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <GlowEffectCard
                                    title={project.title}
                                    description={project.description}
                                    colors={project.color}
                                    tech={project.tech}
                                    image={project.image}
                                />
                            </motion.div>

                            <motion.div 
                                className={`w-full lg:w-5/12 space-y-8 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: 0.1
                                }}
                            >
                                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">{project.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.split(', ').map((t, i) => (
                                        <span 
                                            key={i} 
                                            className="px-4 py-2 bg-gradient-to-r from-gray-100 to-white rounded-full text-gray-700 text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                                            style={{
                                                willChange: 'transform',
                                                transform: 'translateZ(0)'
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <motion.div 
                                    className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#C14D30] to-[#F47B52] text-white rounded-full font-medium cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>View Documentation</span>
                                    <svg
                                        className="w-5 h-5 transform transition-transform duration-300 ease-out group-hover:translate-x-1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ willChange: 'transform' }}
                                    >
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { GlowEffect } from '@/components/ui/glow-effect';
import { motion } from 'framer-motion';
import { image } from 'motion/react-client';


interface GlowEffectCardProps {
    title: string;
    description: string;
    colors: string[];
    tech: string;
    image: string;
}
export function GlowEffectCard({ title, description, colors, tech, image }: GlowEffectCardProps) {
    return (
        <motion.div 
            className="relative group transform-gpu"
            style={{ willChange: 'transform' }}
        >
            {/* Simple gradient border */}
            <div 
                className="absolute -inset-[1px] rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity"
                style={{
                    background: `linear-gradient(45deg, ${colors[0]}, ${colors[3]})`,
                    filter: 'blur(8px)',
                }}
></div>
            <div 
                className="relative aspect-[16/10] rounded-xl shadow-2xl overflow-hidden transform-gpu"
                style={{ willChange: 'transform' }}
            >
                {/* Background Image with Gradient Overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ 
                        backgroundImage: `url(${image})`,
                        willChange: 'transform'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Gradient */}
                <div 
                    className="absolute inset-0"
                    style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                >
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <div 
                                className="backdrop-blur-md bg-white/10 rounded-lg p-4 transform-gpu transition-all duration-300"
                            >
                                <div className="group/btn inline-flex items-center justify-center gap-2 text-white w-full">
                                    <span className="text-sm font-medium">Explore Project</span>
                                    <svg
                                        className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}