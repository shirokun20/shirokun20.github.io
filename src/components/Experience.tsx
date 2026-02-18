import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      position: 'Application Developer',
      company: 'PT. Prawathiya Karsa Pradiptha',
      location: 'Bekasi Regency',
      period: 'February 2024 - Present',
      duration: '1 year 9 months',
      description: [
        'Developing and maintaining mobile and application solutions',
        'Working with modern mobile development frameworks and technologies',
        'Collaborating with cross-functional teams to deliver quality applications'
      ]
    },
    {
      position: 'Medior Mobile Developer',
      company: 'Radya Labs Teknologi',
      location: 'Bandung, West Java',
      period: 'September 2022 - December 2023',
      duration: '1 year 4 months',
      description: [
        'Led mobile development projects with increased responsibilities',
        'Mentored junior developers and conducted code reviews',
        'Implemented best practices for mobile app architecture and performance optimization',
        'Worked with multiple mobile platforms and frameworks'
      ]
    },
    {
      position: 'Junior Mobile Developer',
      company: 'Radya Labs Teknologi',
      location: 'Bandung, West Java',
      period: 'September 2021 - September 2022',
      duration: '1 year 1 month',
      description: [
        'Transitioned from fullstack to mobile development specialization',
        'Developed mobile applications using Kotlin, Flutter, and React Native',
        'Participated in agile development processes',
        'Learned and applied mobile-specific design patterns and architectures'
      ]
    },
    {
      position: 'Full Stack Developer',
      company: 'PT Prilude Digital Indonesia',
      location: 'Tasikmalaya, West Java',
      period: 'January 2018 - August 2021',
      duration: '3 years 8 months',
      description: [
        'Developed both frontend and backend solutions using PHP and Java',
        'Built and maintained web applications using Laravel framework',
        'Integrated and consumed web service APIs',
        'Collaborated with clients to understand requirements and deliver solutions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative transition-colors duration-300">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in software development from fullstack to mobile specialization
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-white/60 dark:border-gray-700/60 hover:border-amber-200 dark:hover:border-amber-600 transition-all duration-300 hover:shadow-xl shadow-lg transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {exp.position}
                    </h3>
                  </div>
                  <p className="text-lg text-amber-700 dark:text-amber-300 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full text-xs font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-amber-600 dark:text-amber-400 font-bold flex-shrink-0">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
