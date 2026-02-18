import React from 'react';
import { Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-800 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-1 shadow-2xl backdrop-blur-sm">
              <div className="w-full h-full rounded-full bg-white/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-5xl font-bold text-amber-900 shadow-inner">
                S
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800">
            Shirokun
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
            Full Stack Developer | Mobile & Web Application Specialist
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through clean code and modern technologies. 
            Experienced in building mobile apps, web applications, and digital solutions.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="https://github.com/shirokun20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white/60 backdrop-blur-md hover:bg-white/80 rounded-xl transition-all duration-300 border border-white/40 hover:border-amber-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-gray-800 font-medium"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Profile</span>
            </a>
            
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white font-medium backdrop-blur-sm"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
