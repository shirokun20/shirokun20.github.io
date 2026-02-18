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
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Komiktap Web Shop',
      description: 'E-commerce platform for comic enthusiasts, featuring modern web technologies and user-friendly shopping experience.',
      technologies: ['Web Development', 'E-commerce', 'Frontend'],
      githubUrl: 'https://github.com/shirokun20/komiktap-web',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'from-pink-400 to-rose-400'
    },
    {
      title: 'Quiz App',
      description: 'Interactive quiz application with engaging UI and smooth user experience for educational purposes.',
      technologies: ['React', 'TypeScript', 'Interactive UI'],
      githubUrl: 'https://github.com/shirokun20/asix-quiz-app',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-emerald-400 to-teal-400'
    },
    {
      title: 'Digital Jukir',
      description: 'Digital parking attendant system modernizing traditional parking management with technology.',
      technologies: ['Mobile App', 'Digital Solution', 'IoT'],
      githubUrl: 'https://github.com/shirokun20/jukir_a6',
      icon: <ParkingCircle className="w-8 h-8" />,
      color: 'from-orange-400 to-amber-400'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative transition-colors duration-300">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in mobile and web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/60 dark:border-gray-700/60 hover:border-amber-200 dark:hover:border-amber-600 transition-all duration-300 hover:shadow-2xl shadow-lg transform hover:-translate-y-2"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} mb-6 text-white shadow-lg backdrop-blur-sm`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-amber-800 dark:text-amber-400 rounded-full border border-amber-200/50 dark:border-amber-700/50 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors font-medium"
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:bg-white/80 dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-200 rounded-xl transition-all duration-300 border border-white/60 dark:border-gray-700/60 hover:border-amber-300 dark:hover:border-amber-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
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
