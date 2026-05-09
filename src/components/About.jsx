import React from 'react'
import { motion } from 'framer-motion'
import { User, Rocket, Coffee } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <User className="text-primary" /> Who I Am
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              I am a dedicated software developer with over 5 years of experience in building modern web applications. My journey started with a curiosity for how things work on the internet, which quickly turned into a passion for clean code and exceptional user experiences.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              Currently, I'm focused on mastering high-performance frontend frameworks and exploring the intersection of AI and web development. I believe in writing code that is not just functional, but maintainable and elegant.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="glass-card p-4 text-center">
                <Rocket className="w-8 h-8 text-accent mx-auto mb-2" />
                <h4 className="font-bold text-white">50+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Projects Completed</p>
              </div>
              <div className="glass-card p-4 text-center">
                <Coffee className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-white">∞</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Coffee Consumed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-8 relative z-10">
              <ul className="space-y-4 text-slate-300">
                <li className="flex justify-between border-b border-slate-700/50 pb-2">
                  <span className="font-medium text-slate-500">Name:</span>
                  <span>Antigravity</span>
                </li>
                <li className="flex justify-between border-b border-slate-700/50 pb-2">
                  <span className="font-medium text-slate-500">Email:</span>
                  <a href="mailto:hello@antigravity.dev" className="text-primary hover:underline">hello@antigravity.dev</a>
                </li>
                <li className="flex justify-between border-b border-slate-700/50 pb-2">
                  <span className="font-medium text-slate-500">Education:</span>
                  <span>Computer Science</span>
                </li>
                <li className="flex justify-between border-b border-slate-700/50 pb-2">
                  <span className="font-medium text-slate-500">Freelance:</span>
                  <span className="text-green-400 font-medium">Available</span>
                </li>
              </ul>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
