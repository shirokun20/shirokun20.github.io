import React from 'react';
import { Coffee, Github, Mail, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative transition-colors duration-300">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Let's collaborate and build something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a
              href="https://github.com/shirokun20"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-white/60 dark:border-gray-700/60 hover:border-amber-300 dark:hover:border-amber-600 transition-all duration-300 hover:shadow-xl shadow-lg transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg backdrop-blur-sm">
                  <Github className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  GitHub
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Check out my repositories and contributions
              </p>
            </a>

            <a
              href="mailto:contact@shirokun.dev"
              className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-white/60 dark:border-gray-700/60 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl shadow-lg transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg backdrop-blur-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                  Email
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Send me a message for collaboration
              </p>
            </a>
          </div>

          <div className="bg-gradient-to-br from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/60 dark:border-gray-700/60 text-center shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white mb-6 shadow-lg backdrop-blur-sm">
              <Coffee className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center justify-center gap-2">
              Support My Work
              <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              If you appreciate my work and would like to support me, you can buy me a coffee using QRIS, support me on Patreon, or send a tip through Trakteer!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* QRIS Section */}
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">QRIS Payment</h4>
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center mb-4 border border-amber-200/50 dark:border-gray-600/50 overflow-hidden">
                  <img
                    src="/donation_qris.jpeg"
                    alt="QRIS Code for Donation"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Scan the QR code with your mobile banking app
                </p>
              </div>

              {/* Patreon Section */}
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100 dark:border-gray-700 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Become a Patron</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Support me monthly on Patreon and get exclusive benefits!
                </p>
                <a
                  href="https://www.patreon.com/cw/Kuron_Mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl backdrop-blur-sm transform hover:-translate-y-1"
                >
                  <Heart className="w-5 h-5" />
                  <span>Support on Patreon</span>
                </a>
              </div>

              {/* Trakteer Section */}
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100 dark:border-gray-700 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Support via Trakteer</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Send one-time tips in IDR through Trakteer to keep the projects going.
                </p>
                <a
                  href="https://trakteer.id/shirokun20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 hover:from-red-600 hover:via-orange-600 hover:to-amber-600 text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl backdrop-blur-sm transform hover:-translate-y-1"
                >
                  <Coffee className="w-5 h-5" />
                  <span>Support on Trakteer</span>
                </a>
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-8 text-sm">
              Every support helps me continue creating awesome projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
