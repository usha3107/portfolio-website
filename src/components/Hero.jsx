import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Code2, Briefcase, Share2 } from 'lucide-react'

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[150px] -z-10"
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 bg-slate-800/50 border border-slate-700 rounded-full text-primary text-sm font-semibold tracking-wide"
          >
            Available for New Projects
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experiences</span> That Matter.
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            I'm a full-stack developer passionate about creating high-performance, visually stunning web applications with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center mb-12">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>
          </div>

          <div className="flex gap-6 text-slate-500">
            <a href="#" className="hover:text-primary transition-colors"><Code2 size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Briefcase size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Share2 size={24} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full aspect-square max-w-lg mx-auto">
            <img 
              src="/avatar.png" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Decorative border */}
            <div className="absolute -inset-4 border-2 border-primary/30 rounded-3xl -z-10 animate-[spin_10s_linear_infinite]" />
          </div>
          
          {/* Floating tags */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-card p-4 shadow-xl"
          >
            <span className="text-sm font-bold text-accent">React Expert</span>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass-card p-4 shadow-xl"
          >
            <span className="text-sm font-bold text-primary">UI Designer</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
