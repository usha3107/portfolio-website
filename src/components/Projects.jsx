import React from 'react'
import { motion } from 'framer-motion'
import { Code2, ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'AI Intelligence Platform',
    description: 'A futuristic platform for deploying and monitoring machine learning models with real-time analytics and visualization.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Python'],
    image: '/project1.png',
    github: 'https://github.com/example/ai-platform',
    demo: 'https://demo.ai-platform.com'
  },
  {
    title: 'Nexus E-Commerce',
    description: 'A high-performance e-commerce engine with a focus on speed, accessibility, and a seamless checkout experience.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Framer'],
    image: '/project2.png',
    github: 'https://github.com/example/nexus-shop',
    demo: 'https://nexus-shop.com'
  },
  {
    title: 'Skyline Travel App',
    description: 'A beautiful travel booking application with immersive imagery and an intuitive destination exploration interface.',
    tags: ['React Native', 'Firebase', 'Mapbox', 'Lucide'],
    image: '/project3.png',
    github: 'https://github.com/example/travel-skyline',
    demo: 'https://travel-skyline.com'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-slate-400 max-w-xl text-lg">
              A selection of my favorite projects where I've combined design thinking with robust engineering.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 text-primary font-bold hover:underline">
            View All Projects <ArrowRight size={20} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card flex flex-col h-full group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm text-[10px] font-bold text-white rounded uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    <Code2 size={18} /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
