import React from 'react';
import { Coffee, Github, Mail, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Let's collaborate and build something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a
              href="https://github.com/shirokun20"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/60 hover:border-amber-300 transition-all duration-300 hover:shadow-xl shadow-lg transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg backdrop-blur-sm">
                  <Github className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors">
                  GitHub
                </h3>
              </div>
              <p className="text-gray-600">
                Check out my repositories and contributions
              </p>
            </a>

            <a
              href="mailto:contact@shirokun.dev"
              className="group bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/60 hover:border-purple-300 transition-all duration-300 hover:shadow-xl shadow-lg transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg backdrop-blur-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                  Email
                </h3>
              </div>
              <p className="text-gray-600">
                Send me a message for collaboration
              </p>
            </a>
          </div>

          <div className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/60 text-center shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white mb-6 shadow-lg backdrop-blur-sm">
              <Coffee className="w-8 h-8" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
              Support My Work
              <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            </h3>
            
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              If you appreciate my work and would like to support me, you can buy me a coffee using QRIS!
            </p>

            <div className="max-w-sm mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100">
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl flex items-center justify-center mb-4 border border-amber-200/50">
                <p className="text-gray-700 text-center px-4 font-medium">
                  QRIS Code<br/>
                  <span className="text-sm text-gray-500">Check my GitHub profile for QRIS payment</span>
                </p>
              </div>
              <a
                href="https://github.com/shirokun20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <Coffee className="w-5 h-5" />
                <span>View QRIS on GitHub</span>
              </a>
            </div>

            <p className="text-gray-500 mt-6 text-sm">
              Every support helps me continue creating awesome projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
