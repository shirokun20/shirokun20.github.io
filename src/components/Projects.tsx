import React from 'react';
import { ExternalLink, Github, Smartphone, ShoppingCart, Brain, ParkingCircle } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  icon: React.ReactNode;
  color: string;
}

const Projects: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      title: 'Kuron Mobile App',
      description: 'A comprehensive mobile application built with modern technologies, providing seamless user experience and robust functionality.',
      technologies: ['Flutter', 'Dart', 'Mobile Development'],
      githubUrl: 'https://github.com/shirokun20/nhasixapp/tree/master',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Komiktap Web Shop',
      description: 'E-commerce platform for comic enthusiasts, featuring modern web technologies and user-friendly shopping experience.',
      technologies: ['Web Development', 'E-commerce', 'Frontend'],
      githubUrl: 'https://github.com/shirokun20/komiktap-web',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quiz App',
      description: 'Interactive quiz application with engaging UI and smooth user experience for educational purposes.',
      technologies: ['React', 'TypeScript', 'Interactive UI'],
      githubUrl: 'https://github.com/shirokun20/asix-quiz-app',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Digital Jukir',
      description: 'Digital parking attendant system modernizing traditional parking management with technology.',
      technologies: ['Mobile App', 'Digital Solution', 'IoT'],
      githubUrl: 'https://github.com/shirokun20/jukir_a6',
      icon: <ParkingCircle className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my work in mobile and web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} mb-6 text-white shadow-lg`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm bg-slate-700 text-blue-300 rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/shirokun20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-blue-500 shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            <span>View All Repositories</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
