import React from 'react';
import { Coffee, Github, Mail, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-400">
              Let's collaborate and build something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a
              href="https://github.com/shirokun20"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                  <Github className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  GitHub
                </h3>
              </div>
              <p className="text-slate-400">
                Check out my repositories and contributions
              </p>
            </a>

            <a
              href="mailto:contact@shirokun.dev"
              className="group bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  Email
                </h3>
              </div>
              <p className="text-slate-400">
                Send me a message for collaboration
              </p>
            </a>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white mb-6 shadow-lg">
              <Coffee className="w-8 h-8" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              Support My Work
              <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            </h3>
            
            <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
              If you appreciate my work and would like to support me, you can buy me a coffee using QRIS!
            </p>

            <div className="max-w-sm mx-auto bg-white rounded-xl p-6 shadow-2xl">
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <p className="text-slate-600 text-center px-4">
                  QRIS Code<br/>
                  <span className="text-sm text-slate-500">Check my GitHub profile for QRIS payment</span>
                </p>
              </div>
              <a
                href="https://github.com/shirokun20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-orange-500/50"
              >
                <Coffee className="w-5 h-5" />
                <span>View QRIS on GitHub</span>
              </a>
            </div>

            <p className="text-slate-500 mt-6 text-sm">
              Every support helps me continue creating awesome projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
