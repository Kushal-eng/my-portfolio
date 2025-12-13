import { FileText, Award, Briefcase, BookOpen, ExternalLink } from 'lucide-react';

export default function Publications() {
  const internships = [
    {
      title: 'AI Research & Product Intern',
      company: 'Alive (Alive Assist – Sustainability Intelligence Platform)',
      period: 'August 2025 – Present',
      description: 'Alive is a sustainability intelligence company that develops Alive Assist, an AI-driven platform helping organizations assess and enhance their sustainability performance.',
      responsibilities: [
        'Testing and debugging Alive Assist\'s AI tool, identifying over 10 front-end accuracy and usability issues',
        'Evaluating AI-powered supply chain traceability tools for high-risk sectors such as seafood',
        'Designing the "Climate & Risk Dashboard" prototype in Figma with interactive filters',
        'Developing data infrastructure concept to support automated reporting',
        'Collaborating with AI and product teams to enhance sustainability analytics',
      ],
      skills: 'Figma · Python · Data Infrastructure Design · UI/UX Debugging · ESG Analytics · GRI Standards · EU Traceability Compliance',
    },
    {
      title: 'Corporate Intern',
      company: 'Reevertiq',
      period: 'May 2025 - July 2025',
      description: 'Developed and integrated AI-powered solutions for client businesses, enhancing operational efficiency.',
      responsibilities: [
        'Gained hands-on experience with frontend and backend technologies including HTML, CSS, JavaScript, Flask, and REST APIs',
        'Built interactive web interfaces linked with AI-based backend services',
        'Implemented features like automated customer calls and intelligent chatbots',
        'Collaborated with cross-functional teams to gather client requirements',
        'Strengthened technical, problem-solving, and communication skills through real-world AI projects',
      ],
      skills: 'HTML · CSS · JavaScript · Flask · REST APIs · AI Integration',
    },
  ];

  const achievements = [
    {
      icon: <Award className="text-yellow-400" size={32} />,
      title: 'Winner – Case Crunch 2.0',
      description: 'Won the prestigious Case Crunch 2.0 competition',
      year: '2024',
    },
    {
      icon: <Award className="text-yellow-400" size={32} />,
      title: 'Best Volunteer – JIVA Blind College',
      description: 'Recognized for exceptional volunteer work and dedication',
      year: '2024',
    },
  ];

  const publication = {
    title: 'Case Studies of Successful Metaverse Implementations in Healthcare',
    bookTitle: 'Metaverse in the Healthcare Industry: Potential Applications, Tools, and Techniques',
    authors: 'Sai Adarsh Maddu, Kotra Kushal Gupta, and Devendran Alagarsamy',
    publisher: 'Elsevier',
    year: '2025',
    pages: '249–265',
    link: 'https://www.amazon.in/Metaverse-Healthcare-Industry-Applications-Techniques/dp/0443301824',
    summary: 'This chapter explores real-world applications of metaverse technologies in the healthcare sector, emphasizing how augmented reality (AR), virtual reality (VR), and blockchain are transforming patient care, medical training, and data management.',
  };

  const certifications = [
    'AI For Everyone',
    'Project Management: The Basics for Success',
    'SQL: A Practical Introduction for Querying Databases',
    'Organizational Behavior: How to Manage People',
    'Basics of Cost Accounting: Product Costing',
    'Macroeconomics for Business Management',
    'Operations Systems Excellence',
    'The Power of Markets II: Market Structure and Firm Behavior',
    'An Intuitive Introduction to Probability',
  ];

  const leadership = [
    {
      role: 'President – Vichar Club, IIC',
      org: 'Woxsen University',
      period: '2024–205',
      responsibilities: [
        'Leading club operations and innovation-based workshops',
        'Enhancing industry-student collaboration',
      ],
    },
    {
      role: 'Student Representative – School of Business',
      org: 'Trade Tower',
      period: '2024–2025',
      responsibilities: [
        'Representing students and resolving issues',
        'Coordinating communication between faculty and students',
      ],
    },
    {
      role: 'Class Representative',
      org: 'Woxsen University',
      period: '2023–2025',
      responsibilities: [
        'Liaising between faculty and peers',
        'Organizing academic initiatives',
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Experience & <span className="text-pink-400">Achievements</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-16 rounded-full"></div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="text-pink-400" size={28} />
            <span className="text-pink-400">Internships</span>
          </h3>
          <div className="space-y-6">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-pink-500/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-pink-400 mb-1">{internship.title}</h4>
                    <p className="text-lg text-gray-300">{internship.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 sm:text-right mt-2 sm:mt-0">{internship.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{internship.description}</p>
                <ul className="space-y-2 mb-4">
                  {internship.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-pink-400 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-slate-700/50">
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold text-gray-400">Key Skills:</span> {internship.skills}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="text-pink-400" size={28} />
            <span className="text-pink-400">Publication</span>
          </h3>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-pink-500/50 transition-all">
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-xl font-bold text-pink-400 flex-1">{publication.title}</h4>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors ml-4"
                aria-label="View on Amazon"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="text-gray-300 italic mb-2">{publication.bookTitle}</p>
            <div className="text-sm text-gray-400 mb-4 space-y-1">
              <p><span className="font-semibold">Authors:</span> {publication.authors}</p>
              <p><span className="font-semibold">Publisher:</span> {publication.publisher}</p>
              <p><span className="font-semibold">Year:</span> {publication.year} | <span className="font-semibold">Pages:</span> {publication.pages}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{publication.summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-yellow-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-500/10">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
                  <span className="text-xs text-gray-500">{achievement.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-pink-400">Leadership Roles</span>
          </h3>
          <div className="space-y-4">
            {leadership.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-pink-500/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h4 className="text-lg font-bold text-pink-400">{item.role}</h4>
                  <span className="text-sm text-gray-500">{item.period}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{item.org}</p>
                <ul className="space-y-2">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-pink-400 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="text-pink-400" size={28} />
            <span className="text-pink-400">Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-pink-500/50 transition-all"
              >
                <p className="text-sm text-gray-300">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
