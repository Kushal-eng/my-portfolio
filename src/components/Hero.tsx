import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-pink-400 text-lg mb-4">Hi, I'm</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            Kotra Kushal Gupta
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-pink-400">Data Science</span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-pink-400">& AI</span> Enthusiast
          </h2>
        </div>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Dedicated Data Science and AI enthusiast with strong skills in data analysis,
          programming, and machine learning, combined with a solid understanding of business
          strategy. Passionate about utilizing data-driven insights to enhance operational
          efficiency and foster innovation.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            View Projects
          </a>
          <a
            href="https://github.com/Kushal-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-pink-400 rounded-lg font-semibold hover:bg-pink-400/10 transition-colors"
          >
            GitHub Profile
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href="mailto:kushal.kotra_2026@woxsen.edu.in"
            className="text-gray-400 hover:text-pink-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kotra-kushal-gupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Kushal-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
