import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Server, 
  Database, 
  Bot, 
  Monitor, 
  Mountain, 
  GraduationCap,
  ChevronRight,
  Linkedin,
  Twitter,
  Cpu,
  Globe,
  Zap,
  Layers,
  Terminal
} from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techStack = [
    { name: 'MongoDB', icon: <Database className="w-5 h-5" />, category: 'Backend' },
    { name: 'Express JS', icon: <Server className="w-5 h-5" />, category: 'Backend' },
    { name: 'Node JS', icon: <Code2 className="w-5 h-5" />, category: 'Backend' },
    { name: 'JavaScript', icon: <Terminal className="w-5 h-5" />, category: 'Frontend' },
    { name: 'HTML5', icon: <Globe className="w-5 h-5" />, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <Monitor className="w-5 h-5" />, category: 'Design' },
    { name: 'Firebase', icon: <Layers className="w-5 h-5" />, category: 'Cloud' },
    { name: 'REST APIs', icon: <Zap className="w-5 h-5" />, category: 'Backend' },
    { name: 'AI Integration', icon: <Cpu className="w-5 h-5" />, category: 'Intelligence' },
    { name: 'Vibe Coding', icon: <Zap className="w-5 h-5 text-yellow-400" />, category: 'Creative' },
    { name: 'Python', icon: <Code2 className="w-5 h-5" />, category: 'Beginner' },
    { name: 'Telegram Bot', icon: <Bot className="w-5 h-5" />, category: 'Automation' },
  ];

  const projects = [
    {
      title: "NTA Wallah NEET Academy",
      url: "https://ntawallahneetacademy.netlify.app",
      desc: "Comprehensive educational platform for NEET aspirants with organized curriculum management.",
      tags: ["Education", "NEET", "MERN"]
    },
    {
      title: "SkyNexus Studio",
      url: "https://skynexus-studio.netlify.app",
      desc: "Creative studio interface showcasing professional development and modern design aesthetics.",
      tags: ["Studio", "Design", "UI/UX"]
    },
    {
      title: "NEETxPaper",
      url: "https://neetxpaper-skylord.netlify.app",
      desc: "Innovative question paper generation tool designed to streamline exam preparation.",
      tags: ["Tools", "EdTech", "React"]
    },
    {
      title: "NEETxRT",
      url: "https://neetxrt-skylord.netlify.app",
      desc: "Real-time tracking and testing platform for competitive students to monitor progress.",
      tags: ["Real-time", "Analytics", "Firebase"]
    },
    {
      title: "NEET Test Hub",
      url: "https://neettesthub.netlify.app",
      desc: "Centralized hub for automated testing and practice sessions for medical exams.",
      tags: ["Testing", "Automation", "Node"]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#4a0000] text-white selection:bg-white selection:text-maroon-900 font-sans overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-maroon-800 rounded-full blur-[140px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-maroon-700 rounded-full blur-[120px] opacity-30" />
      </div>

      {/* Improved Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-[#4a0000]/70 backdrop-blur-xl shadow-2xl border-b border-white/5' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-white text-[#4a0000] rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-white/10">
              CC
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 hidden sm:block font-bold">Portfolio 2026</span>
          </motion.div>
          
          <div className="flex items-center space-x-2 md:space-x-8">
            {['About', 'Skills', 'Projects'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-bold uppercase tracking-widest hover:text-white/60 transition-all px-3 py-2 rounded-lg hover:bg-white/5"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-white text-[#4a0000] px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-white/5"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 text-[10px] tracking-[0.3em] uppercase font-bold text-white/70">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-ping" />
              Available for New Projects
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30">Excellence.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-12 font-medium max-w-2xl mx-auto leading-relaxed italic">
              "18-year-old developer bridging the gap between medical ambition and technical innovation. Specializing in MERN stack, AI integration, and high-performance EdTech."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#projects" className="group flex items-center gap-3 px-8 py-4 bg-white text-[#4a0000] rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:bg-white/90">
                Explore Work
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex gap-4">
                <a href="https://github.com" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"><Github className="w-5 h-5" /></a>
                <a href="https://twitter.com" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-black mb-10 tracking-tight uppercase border-l-4 border-white pl-6">Core Identity</h2>
              <div className="grid gap-8">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex gap-4 items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-white/50" />
                    <h4 className="font-black uppercase tracking-widest text-sm">NEET Aspirant</h4>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">Balancing the rigor of medical studies with the precision of full-stack engineering.</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex gap-4 items-center mb-4">
                    <Mountain className="w-6 h-6 text-white/50" />
                    <h4 className="font-black uppercase tracking-widest text-sm">Mountaineer</h4>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">Driven by the pursuit of peaks—both in the Himalayas and in the production environment.</p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative">
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full" />
              <div className="relative aspect-square rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[12rem] font-black opacity-5 leading-none select-none">18</div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <p className="text-xs uppercase tracking-[0.5em] font-black opacity-40">Years Old</p>
                    <p className="text-xl font-black mt-2">Age Is Just A Number.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Technical Arsenal</h2>
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase font-bold">Modern Web Technologies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-[2rem] bg-[#4a0000] border border-white/5 hover:border-white/20 transition-all group text-center"
              >
                <div className="mb-4 flex justify-center text-white/30 group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-black text-[11px] uppercase tracking-widest mb-1">{skill.name}</h3>
                <div className="text-[9px] text-white/30 uppercase font-bold">{skill.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-black mb-4 tracking-tight uppercase border-l-4 border-white pl-6">Production Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                {...fadeInUp}
                className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-xl hover:bg-white/10 transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <Monitor className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-[#4a0000] rounded-xl hover:scale-110 transition-all shadow-xl">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-xl font-black mb-4 tracking-tight uppercase">{project.title}</h3>
                <p className="text-white/50 text-sm mb-8 flex-grow leading-relaxed font-medium">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Streamlined */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="p-12 md:p-20 rounded-[4rem] bg-white text-[#4a0000] text-center relative overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.1)]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Mail className="w-64 h-64 -mr-20 -mt-20" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">Ready for <br />the next peak?</h2>
            <p className="text-[#4a0000]/70 mb-12 font-bold uppercase tracking-[0.2em] text-sm">Available for serious inquiries and collaborations.</p>
            
            <div className="flex flex-col items-center gap-8">
              <a 
                href="mailto:chaitanyachavhan031@gmail.com" 
                className="group flex flex-col items-center gap-4 bg-[#4a0000] text-white px-10 py-8 rounded-[3rem] w-full hover:scale-[1.02] transition-all shadow-2xl"
              >
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-1">Click to email me</div>
                  <div className="text-lg md:text-2xl font-black lowercase break-all">chaitanyachavhan031@gmail.com</div>
                </div>
              </a>

              <div className="flex gap-4">
                <a href="#" className="p-5 border-2 border-[#4a0000]/10 rounded-[2rem] hover:bg-[#4a0000] hover:text-white transition-all"><Github className="w-6 h-6" /></a>
                <a href="#" className="p-5 border-2 border-[#4a0000]/10 rounded-[2rem] hover:bg-[#4a0000] hover:text-white transition-all"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="p-5 border-2 border-[#4a0000]/10 rounded-[2rem] hover:bg-[#4a0000] hover:text-white transition-all"><Twitter className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-12 bg-white text-[#4a0000] rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-8 shadow-xl">
            CC
          </div>
          <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase font-black">
            Fullstack Developer & NEET Aspirant • 2026
          </p>
          <div className="mt-6 flex justify-center gap-8 opacity-20 text-[10px] font-black uppercase tracking-widest">
            <span>Maroon Base</span>
            <span>Glassmorphism v2.0</span>
            <span>React Production</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
