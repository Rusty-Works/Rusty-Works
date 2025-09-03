'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Works from "@/components/Works";
import { motion } from 'framer-motion';

const  Page = ()  => {
  return(
    <motion.div 
    className="flex flex-col items-center w-full bg-white overflow-x-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
      <Header />
      <Hero />
      <Works />
      <Footer />
    </motion.div>
  )
}

export default Page;

