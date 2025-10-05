import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kushal.kotra_2026@woxsen.edu.in?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Let's <span className="text-pink-400">Connect</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                  <div className="p-2 rounded-lg bg-pink-500/10">
                    <Phone className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+919014658102" className="text-white hover:text-pink-400 transition-colors">
                      +91 9014658102
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                  <div className="p-2 rounded-lg bg-pink-500/10">
                    <Mail className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:kushal.kotra_2026@woxsen.edu.in"
                      className="text-white hover:text-pink-400 transition-colors break-all"
                    >
                      kushal.kotra_2026@woxsen.edu.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                  <div className="p-2 rounded-lg bg-pink-500/10">
                    <MapPin className="text-pink-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
              <h4 className="text-xl font-bold mb-4">About Me</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                I'm a BBA student at Woxsen University specializing in Data Science & Artificial
                Intelligence. Currently of graduating in 2026, I'm passionate about leveraging
                data-driven insights and AI solutions to solve real-world problems.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                With hands-on experience in machine learning, web development, and business
                analytics, I'm always exploring innovative ways to bridge technology and strategy.
              </p>
              <button
                <a
                  href="/resume.pdf"
                  download="Kushal_Gupta_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform w-full justify-center"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </button>
            </div>
          </div>

          <div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-colors text-white resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Kotra Kushal Gupta. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
