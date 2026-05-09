import React from 'react'
import { Code2, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-xl font-bold text-white tracking-tighter">
            <Code2 className="text-primary w-6 h-6" />
            <span>Antigravity<span className="text-primary">.</span></span>
          </div>
          
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Antigravity. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
