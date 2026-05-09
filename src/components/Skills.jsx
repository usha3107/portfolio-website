import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Layout, 
  Database, 
  Terminal, 
  Cpu,
  Layers,
  Globe
} from 'lucide-react'

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'], icon: Layout, color: 'text-primary' },
  { name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Redis'], icon: Database, color: 'text-accent' },
  { name: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Go'], icon: Code, color: 'text-purple-500' },
  { name: 'Tools', items: ['Docker', 'AWS', 'Git', 'Vite'], icon: Terminal, color: 'text-orange-500' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I leverage a powerful stack of modern technologies to build scalable and performant applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 border-t-4 border-t-primary/20"
            >
              <skill.icon className={`w-12 h-12 mb-6 ${skill.color}`} />
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-medium text-slate-300 border border-slate-700 hover:border-primary/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Skill Bar Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h4 className="text-xl font-bold mb-8 text-center">Core Proficiency</h4>
          <div className="space-y-6">
            {[
              { name: 'Web Development', level: '95%' },
              { name: 'UI/UX Design', level: '85%' },
              { name: 'Cloud Architecture', level: '80%' }
            ].map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                  <span className="text-sm font-medium text-primary">{skill.level}</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
