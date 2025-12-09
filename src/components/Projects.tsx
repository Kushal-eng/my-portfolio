import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [

    {
      title: 'Nutriency Deficiency Tracker',
      description: 'Interactive Streamlit dashboard identifying potential nutrient deficiencies based on Indian food habits with real-time dietary data integration.',
      tech: ['Python', 'Streamlit', 'API Integration', 'Data Visualization'],
      link: 'https://nutritracker.streamlit.app/',
      features: [
        'Symptom-based deficiency analysis',
        'Real-time nutrition API integration',
        'Personalized diet recommendations',
        'User-friendly health interface',
      ],
    },
    {
      title: 'Student Skill Swap Platform',
      description: 'A peer-to-peer learning system where students exchange skills instead of money, enabling collaborative knowledge sharing and practical learning with a structured database-driven backend.',
      tech: ['MySQL', 'Streamlit', 'Python', 'SQL Joins', 'Database Design'],
      link: '#',
      features: [
        'Skill-based matching system',
        'Student profiles with teach/learn tags',
        'Swap request & session tracking',
        'Feedback & rating mechanism',
      ], 
    },
    {
      title: 'AI Readiness & Initiative Recommendation Platform',
      description: 'A strategic decision-support tool that analyzes an organization’s AI maturity and recommends tailored AI initiatives based on industry context, readiness level, and operational pain points. Designed to simulate real-world AI strategy evaluation and prioritization.',
      tech: ['Python', 'Streamlit', 'Pandas', 'Altair', 'Data Modeling'],
      link: 'https://ai-readiness-initiative-recommendation-platform.streamlit.app/',
      features: [
        'AI readiness scoring model based on leadership support, automation, budget, and maturity',
        'Company segmentation into Low/Medium/High readiness tiers',
        'AI initiative recommendation engine mapped to industry and business pain',
        'Support for uploading external datasets for personalized assessment',
        'Strategic insights panel summarizing trends and GTM focus opportunities'
      ],
    },

    {
      title: 'Diabetes Predictor Dashboard',
      description: 'A machine learning-based prediction model for early diabetes detection using supervised classification models to identify Type 1, Type 2, or Pre-diabetes risk.',
      tech: ['Python', 'Machine Learning', 'Streamlit', 'Seaborn', 'Matplotlib'],
      link: 'https://diabetrack.streamlit.app/',
      features: [
        'Predictive dashboard with ML models',
        'Visual insights and correlations',
        'Real-time data input interface',
        'Early intervention strategies',
      ],
    },

  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Featured <span className="text-pink-400">Projects</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-pink-500/50 transition-all hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4 text-pink-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-pink-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
              >
                <span className="font-semibold">View Project</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
