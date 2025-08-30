

export default function Works() {   
    const projects = [
        {
            title: "High-Performance API Gateway",
            description: "A lightning-fast API Gateway that handles concurrent requests with Rust's zero-cost abstractions. Designed for scalability and real-world performance demands.",
            color: ['#C14D30', '#E85D3F', '#F47B52', '#FF9466'],
            tech: "Actix-web, Tokio",
            image: "/projects/proc1.png" // You'll need to add these images to your public folder
        },
        {
            title: "Blockchain Data Explorer",
            description: "Interactive blockchain visualization platform that makes complex data structures accessible. Real-time block exploration with intuitive visual representations.",
            color: ['#A13B1F', '#C14D30', '#E85D3F', '#F47B52'],
            tech: "Rust, WebAssembly, D3.js",
            image: "/proc2.png"
        },
        {
            title: "Real-time Processing Engine",
            description: "Advanced data processing system leveraging Rust's fearless concurrency. Handles massive data streams with minimal latency and maximum reliability.",
            color: ['#7A2C17', '#A13B1F', '#C14D30', '#E85D3F'],
            tech: "Tokio, RocketRS",
            image: "/proc3.png"
        }
    ]
    return ( 
        <section className='w-full min-h-screen py-32 bg-gradient-to-b from-white to-gray-50'
            id='works'
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Showcasing the power of Rust through practical, high-performance solutions. 
                            Each project demonstrates what's possible when robust backend meets intuitive design.
                        </p>
                       
                    </motion.div>
                </div>
                
                <div className="grid grid-cols-1 gap-y-32">
                    <div className='w-full bg-black h-[1px]'></div>
                  
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="flex flex-col lg:flex-row items-center gap-16"
                        >
                            <motion.div 
                                className="w-full lg:w-7/12"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ 
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
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
                                className="w-full lg:w-5/12 space-y-6"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: 0.1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.split(', ').map((t, i) => (
                                        <span 
                                            key={i} 
                                            className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm"
                                            style={{
                                                willChange: 'transform',
                                                transform: 'translateZ(0)'
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="group inline-flex items-center gap-2 text-gray-900 font-medium cursor-pointer">
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
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    );
}

import { GlowEffect } from '@/components/ui/glow-effect';
import { motion } from 'framer-motion';
import { image } from 'motion/react-client';
import Footer from './Footer';

interface GlowEffectCardProps {
    title: string;
    description: string;
    colors: string[];
    tech: string;
    image: string;
}
export function GlowEffectCard({ title, description, colors, tech, image }: GlowEffectCardProps) {
    return (
        <div 
            className="relative group transform-gpu"
            style={{ willChange: 'transform' }}
        >
            {/* Glow Effects */}
            <div 
                className="absolute -inset-1 rounded-2xl opacity-50 transition-[filter,opacity] duration-500 group-hover:opacity-85"
                style={{
                    background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`,
                    filter: 'blur(16px)',
                    willChange: 'filter, opacity',
                    transform: 'translateZ(0)'
                }}
            ></div>
            <div 
                className="absolute -inset-1 rounded-2xl opacity-40 mix-blend-soft-light transition-[filter,opacity] duration-500 group-hover:opacity-75"
                style={{
                    background: `linear-gradient(135deg, ${colors[3]}, ${colors[2]}, ${colors[1]}, ${colors[0]})`,
                    filter: 'blur(8px)',
                    willChange: 'filter, opacity',
                    transform: 'translateZ(0)'
                }}
            ></div>
            
            <div 
                className="relative aspect-[4/3] rounded-xl shadow-2xl overflow-hidden transform-gpu transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                style={{ willChange: 'transform' }}
            >
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ 
                        backgroundImage: `url(${image})`,
                        willChange: 'transform'
                    }}
                />

                {/* Content Gradient */}
                <div 
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
                    style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                >
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white transform-gpu">
                                {title}
                            </h3>
                            
                            <p className="text-gray-200 line-clamp-2 transform-gpu text-sm">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {tech.split(', ').map((t, i) => (
                                    <div 
                                        key={i} 
                                        className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transform-gpu"
                                    >
                                        <span className="text-white/90 text-xs">{t}</span>
                                    </div>
                                ))}
                            </div>

                            <div 
                                className="group/btn inline-flex items-center gap-2 text-white/90 hover:text-white cursor-pointer pt-2"
                            >
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
    );
}