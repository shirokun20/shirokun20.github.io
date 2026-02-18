import React from 'react';
import { Code2, Smartphone, Globe, Database, Palette, Terminal } from 'lucide-react';

interface Skill {
  category: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

const Skills: React.FC = () => {
  const skillCategories: Skill[] = [
    {
      category: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      items: ['Flutter', 'Dart', 'React Native', 'Mobile UI/UX'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      category: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
      color: 'from-purple-400 to-pink-400'
    },
    {
      category: 'Programming',
      icon: <Code2 className="w-6 h-6" />,
      items: ['TypeScript', 'JavaScript', 'Dart', 'Python'],
      color: 'from-emerald-400 to-teal-400'
    },
    {
      category: 'Styling & Design',
      icon: <Palette className="w-6 h-6" />,
      items: ['Tailwind CSS', 'Modern CSS', 'Responsive Design', 'UI/UX'],
      color: 'from-orange-400 to-amber-400'
    },
    {
      category: 'Backend & Database',
      icon: <Database className="w-6 h-6" />,
      items: ['REST APIs', 'Firebase', 'Node.js', 'Database Design'],
      color: 'from-indigo-400 to-blue-400'
    },
    {
      category: 'Tools & Technologies',
      icon: <Terminal className="w-6 h-6" />,
      items: ['Git', 'GitHub', 'VS Code', 'Vite'],
      color: 'from-rose-400 to-pink-400'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative transition-colors duration-300">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-white/60 dark:border-gray-700/60 hover:border-amber-200 dark:hover:border-amber-600 transition-all duration-300 hover:shadow-xl shadow-lg transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg backdrop-blur-sm`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {skill.category}
                </h3>
              </div>

              <div className="space-y-2">
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
