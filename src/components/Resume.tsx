import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  company?: string;
  period: string;
  description: string;
  techStack: string[];
  link?: string;
}

const Resume: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'SEMA - Employee Management Application',
      company: 'PT. Prawathiya Karsa Pradiptha',
      period: 'February 2024 - Present',
      description: 'Mobile application for employee management in day-to-day operations. Provides streamlined interface for accessing company updates, managing tasks, allowances, field-collector workflows, and tracking performance & attendance.',
      techStack: ['Flutter', 'Bloc', 'Dio', 'Flutter Local Storage', 'Firebase Messaging'],
      link: 'https://play.google.com/store/apps/details?id=com.pkp.ess'
    },
    {
      title: 'SMART - Debt Collector Application',
      company: 'PT. Prawathiya Karsa Pradiptha',
      period: 'February 2024 - Present',
      description: 'Mobile debt collector application designed to streamline payment collection, debt tracking and administrative operations for field collectors and companies.',
      techStack: ['Flutter', 'Bloc', 'Dio', 'Flutter Local Storage', 'Firebase Messaging', 'PHP'],
      link: 'https://play.google.com/store/apps/details?id=id.pkp.smm.smm_project_mobile'
    },
    {
      title: 'Ekologis - Waste Management App',
      period: 'January 2024 - August 2024',
      description: 'Mobile application for managing plastic waste effectively and productively. Helps users contribute to environmental conservation while generating value from unused waste through recycling.',
      techStack: ['Flutter', 'GetX', 'Dio', 'RxDart', 'Flutter Local Storage', 'Firebase Messaging', 'MVC']
    },
    {
      title: 'BINUS SCHOOL e-Desk',
      company: 'Radya Labs Teknologi',
      description: 'Educational app for BINUS SCHOOL Indonesia designed for students and parents to access schedules, grades, policies and school events information.',
      techStack: ['React Native', 'Redux', 'Azure AD'],
      period: 'Radya Labs Project',
      link: 'https://binus.sch.id/'
    },
    {
      title: 'Bijak Berplastik - Plastic Waste Management',
      company: 'Radya Labs Teknologi',
      description: 'Innovative platform helping users manage plastic waste wisely and support the environment. Users can become environmental heroes while developing savings from recycling results.',
      techStack: ['Flutter', 'GetX', 'Dio', 'RxDart', 'Firebase Messaging', 'MVC'],
      period: 'Radya Labs Project'
    },
    {
      title: 'Bumame - Health Service Platform',
      company: 'Radya Labs Teknologi',
      description: 'International standard health service provider app offering Vitamin Booster, Medical Check Up, and Covid Test services. Certified BSL-2 Laboratory, affiliated with Indonesian Ministry of Health.',
      techStack: ['Flutter', 'GetX', 'Dio', 'RxDart', 'Firebase Messaging', 'MVC'],
      period: 'Radya Labs Project'
    },
    {
      title: 'Ganjar Mahfud (GP8) - Political Campaign App',
      company: 'Radya Labs Teknologi',
      description: 'Mobile application developed for political campaign purposes, providing platform for supporters to stay updated and engaged.',
      techStack: ['Flutter', 'GetX', 'Dio', 'RxDart', 'Firebase Messaging', 'MVC'],
      period: 'Radya Labs Project'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-white via-gray-50 to-amber-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Key projects from my professional experience as Mobile & Application Developer
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-white/60 dark:border-gray-700/60 hover:border-amber-200 dark:hover:border-amber-600 transition-all duration-300 hover:shadow-xl shadow-lg transform hover:-translate-y-1 group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.company && (
                    <p className="text-sm text-amber-700 dark:text-amber-300 font-semibold">
                      {project.company}
                    </p>
                  )}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 p-2 text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {project.period}
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-800 dark:text-amber-200 rounded-full text-xs font-medium hover:shadow-md transition-shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/shirokun20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 dark:from-amber-600 dark:to-orange-600 dark:hover:from-amber-700 dark:hover:to-orange-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white font-medium"
          >
            <Code2 className="w-5 h-5" />
            <span>View All Repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
