export default function TechStack() {
  const techCategories = [
    {
      title: 'Languages & Frameworks',
      color: 'from-yellow-500 to-orange-600',
      techs: [
        {
          name: 'Python',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          description: 'High-level programming language for general-purpose development'
        },
        {
          name: 'JavaScript',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          description: 'Programming language for web development'
        },
        {
          name: 'TypeScript',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          description: 'Typed superset of JavaScript for scalable applications'
        },
        {
          name: 'Streamlit',
          image: 'https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.png',
          description: 'Python framework for creating data apps'
        },
        {
          name: 'FastAPI',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
          description: 'High-performance Python web framework for APIs'
        },
        {
          name: 'React.js',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          description: 'JavaScript library for building UIs'
        },
        {
          name: 'Express.js',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          description: 'Minimalist web framework for Node.js'
        },
        {
          name: 'Tailwind CSS',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
          description: 'Utility-first CSS framework'
        },
        {
          name: 'shadcn',
          image: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
          description: 'UI component library for React'
        },
      ],
    },
    {
      title: 'AI & ML',
      color: 'from-pink-500 to-purple-600',
      techs: [
        {
          name: 'OpenAI',
          image: 'https://openai.com/favicon.ico',
          description: 'Leading AI research company and API provider'
        },
        {
          name: 'NumPy',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
          description: 'Fundamental package for scientific computing'
        },
        {
          name: 'Pandas',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
          description: 'Data manipulation and analysis library'
        },
        {
          name: 'OpenRouter',
          image: 'https://openrouter.ai/favicon.ico',
          description: 'Unified API gateway for multiple LLM providers'
        },
        {
          name: 'Flask',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
          description: 'Web framework for building scalable backend services'
        },
        {
          name: 'JavaScript',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          description: 'Programming language for web development'
        },
        {
          name: 'Groq',
          image: 'https://groq.com/wp-content/uploads/2024/03/PBG-mark1.svg',
          description: 'High-performance AI inference platform'
        },
        {
          name: 'Machine Learning',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
          description: 'Machine learning library for classical ML algorithms'
        },
        {
          name: 'Deep Learning',
          image: 'https://pytorch.org/assets/images/pytorch-logo.png',
          description: 'Deep learning framework'
        },
        {
          name: 'Prompt Engineering',
          image: 'https://huggingface.co/front/assets/huggingface_logo.svg',
          description: 'Platform for sharing and deploying ML models'
        },
      ],
    },
    {
      title: 'Databases',
      color: 'from-green-500 to-emerald-600',
      techs: [
        {
          name: 'MySQL',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          description: 'Relational database management system'
        },
        {
          name: 'MongoDB',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          description: 'NoSQL database for modern applications'
        },
        {
          name: 'Supabase',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
          description: 'Open source Firebase alternative'
        },
        {
          name: 'PostgreSQL',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          description: 'Advanced open source relational database'
        },
      ],
    },
    {
      title: 'Tools & Platforms',
      color: 'from-blue-500 to-cyan-600',
      techs: [
        {
          name: 'GitHub',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          description: 'Platform for version control and collaboration'
        },
        {
          name: 'Twilio',
          image: 'https://www.twilio.com/favicon.ico',
          description: 'Cloud communications platform for SMS and voice'
        },
        {
          name: 'Vercel',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
          description: 'Platform for frontend deployment'
        },
        {
          name: 'Netlify',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-plain.svg',
          description: 'Platform for frontend deployment'
        },
        {
          name: 'Make',
          image: 'https://images.ctfassets.net/un655fb9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg',
          description: 'Platform for workflow automation'
        },
        {
          name: 'Retell AI',
          image: 'https://avatars.githubusercontent.com/u/142041352?s=200&v=4',
          description: 'Platform for creating AI-powered Voice Agents'
        },
        {
          name: 'VS Code',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
          description: 'Modern code editor'
        },
        {
          name: 'Power BI',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
          description: 'Business analytics and visualization tool'
        },
        {
          name: 'Excel',
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
          description: 'Spreadsheet software for data analysis'
        },
      ],
    },
    {
      title: 'AI Dev Tools',
      color: 'from-violet-500 to-purple-600',
      techs: [
        {
          name: 'Bolt.new',
          image: 'https://bolt.new/favicon.ico',
          description: 'Modern development environment in the browser'
        },
        {
          name: 'Lovable',
          image: 'https://lovable.dev/favicon.ico',
          description: 'Developer experience platform'
        },
        {
          name: 'Cursor',
          image: 'https://cursor.sh/favicon.ico',
          description: 'AI-first code editor'
        },
        {
          name: 'Claude',
          image: 'https://claude.ai/favicon.ico',
          description: 'Advanced AI assistant by Anthropic'
        },
        {
          name: 'Copilot',
          image: 'https://github.githubassets.com/favicons/favicon.svg',
          description: 'AI pair programmer powered by OpenAI'
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Tech <span className="text-pink-400">Stack</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-16 rounded-full"></div>

        <div className="space-y-12">
          {techCategories.map((category, index) => (
            <div key={index}>
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.techs.map((tech, idx) => (
                  <div
                    key={idx}
                    className="group relative p-5 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-pink-500/50 transition-all hover:scale-105 flex flex-col items-center justify-center gap-3 cursor-pointer"
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-300 text-center font-medium">{tech.name}</span>

                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-48 text-center z-10 border border-pink-500/30">
                      {tech.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
