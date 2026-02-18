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
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Programming',
      icon: <Code2 className="w-6 h-6" />,
      items: ['TypeScript', 'JavaScript', 'Dart', 'Python'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Styling & Design',
      icon: <Palette className="w-6 h-6" />,
      items: ['Tailwind CSS', 'Modern CSS', 'Responsive Design', 'UI/UX'],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Backend & Database',
      icon: <Database className="w-6 h-6" />,
      items: ['REST APIs', 'Firebase', 'Node.js', 'Database Design'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      category: 'Tools & Technologies',
      icon: <Terminal className="w-6 h-6" />,
      items: ['Git', 'GitHub', 'VS Code', 'Vite'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((skill, index) => (
            <div 
              key={index}
              className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {skill.category}
                </h3>
              </div>
              
              <div className="space-y-2">
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                    <span className="text-slate-300">{item}</span>
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
