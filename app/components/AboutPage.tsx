'use client';

import { User, Mail, Linkedin, Github, Briefcase } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 relative z-10">
      {/* Main Card */}
      <div className="bg-white border border-black/10 pixel-corners p-8 space-y-8">
        
        {/* Header Section */}
        <div className="text-center border-b border-black/10 pb-6">
          {/* Avatar Container */}
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 border border-[#00d9ff]/30 bg-white pixel-corners arcade-glow flex items-center justify-center">
              <User size={40} className="text-black/70" strokeWidth={1.5} />
            </div>
            
            {/* Decorative pixels around avatar */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00d9ff] pixel-blink"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#ff00ff] pixel-blink" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -top-1 -left-1 w-1 h-1 bg-[#ffff00] pixel-pulse"></div>
            <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-[#ffff00] pixel-pulse" style={{ animationDelay: '0.75s' }}></div>
          </div>

          {/* Name & Title */}
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-[#ffff00] pixel-blink" style={{ animationDelay: '1s' }}></div>
            <h1 className="text-sm font-press-start-2p text-black tracking-[0.2em] glitch-hover">TUAN NGUYEN</h1>
            <div className="w-2 h-2 bg-[#ffff00] pixel-blink" style={{ animationDelay: '1s' }}></div>
          </div>
          <p className="font-mono text-black tracking-wide text-xs sm:text-sm md:text-base">
            Designer / Sales Dev / Pro Vibecoder
          </p>
        </div>

        {/* About Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-black/10">
            <div className="w-1.5 h-1.5 bg-[#00d9ff]"></div>
            <h2 className="text-xs font-press-start-2p text-black tracking-[0.15em] glitch-hover">ABOUT</h2>
          </div>
          <p className="font-mono text-sm text-black/70 leading-relaxed">
           My name is Tuan Nguyen, a person who are obessed with tech and startups, im aiming to build something great and meaningful. With my background in sales, design, and engineering, i can work across different teams and make a big impact.
          </p>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-black/10">
            <div className="w-1.5 h-1.5 bg-[#ff00ff]"></div>
            <h2 className="text-xs font-press-start-2p text-black tracking-[0.15em] glitch-hover">EXPERIENCE</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Briefcase size={16} className="text-[#ff00ff] mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="font-mono text-sm text-black/90 mb-1">Hyland Software - Sales Dev Intern (2025)</h3>
                <p className="font-mono text-xs text-black/60">Generated leads and improved outreach effectiveness for enterprise software solutions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Briefcase size={16} className="text-[#00ff85] mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="font-mono text-sm text-black/90 mb-1">Magnet Media - Sales Dev Intern (2025)</h3>
                <p className="font-mono text-xs text-black/60">Generated leads in Tech/Financial industries, worked with Fortune 500 clients like JPMorgan and IBM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Briefcase size={16} className="text-[#00d9ff] mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="font-mono text-sm text-black/90 mb-1">Kryptesign - Founder (2024)</h3>
                <p className="font-mono text-xs text-black/60">Founded design consultancy for fintech & Web3 startups, grew client traffic significantly</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Briefcase size={16} className="text-[#ffff00] mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="font-mono text-sm text-black/90 mb-1">Purdue Envision - UX Engineer (2024)</h3>
                <p className="font-mono text-xs text-black/60">Led UX design for game project, conducted user research, secured project funding</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Briefcase size={16} className="text-[#00d9ff] mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="font-mono text-sm text-black/90 mb-1">Schneider Electric - Digital Transformation (2023)</h3>
                <p className="font-mono text-xs text-black/60">Built web applications for manufacturing workflows, improved operational efficiency</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-black/10">
            <div className="w-1.5 h-1.5 bg-[#ffff00]"></div>
            <h2 className="text-xs font-press-start-2p text-black tracking-[0.15em] glitch-hover">EXPERIENCE DESIGN PROJECT</h2>
          </div>
          <div className="space-y-4">
            {/* Gravity Drive Project */}
            <div className="border border-black/10 pixel-corners p-4 group relative transition-colors hover:border-[#ff6b35]/30 hover:shadow-[0_0_8px_rgba(255,107,53,0.1)]">
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-mono text-sm text-black/90 mb-2">Gravity Drive</h3>
              <p className="font-mono text-xs text-black/60">Co-led a user experience research to help understand users pain points to develop a centralized platform for landscaping companies</p>
            </div>
            
            {/* Keyline Interactive Project */}
            <div className="border border-black/10 pixel-corners p-4 group relative transition-colors hover:border-[#00ff85]/30 hover:shadow-[0_0_8px_rgba(0,255,133,0.1)]">
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00ff85] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-mono text-sm text-black/90 mb-2">Keyline Interactive</h3>
              <p className="font-mono text-xs text-black/60">Co-led a user experience research to understand how AI assists users to upskill</p>
            </div>
            
            {/* CorpusKey AI Project */}
            <div className="border border-black/10 pixel-corners p-4 group relative transition-colors hover:border-[#00d9ff]/30 hover:shadow-[0_0_8px_rgba(0,217,255,0.1)]">
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00d9ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-mono text-sm text-black/90 mb-2">CorpusKey AI</h3>
              <p className="font-mono text-xs text-black/60">Co-led team designing AI platform for teachers, created interfaces instructors loved and found intuitive</p>
            </div>
            
            {/* Ipsos-Isay Project */}
            <div className="border border-black/10 pixel-corners p-4 group relative transition-colors hover:border-[#ff00ff]/30 hover:shadow-[0_0_8px_rgba(255,0,255,0.1)]">
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ff00ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-mono text-sm text-black/90 mb-2">Ipsos-Isay</h3>
              <p className="font-mono text-xs text-black/60">Led redesign of Europe's largest survey company platform, improved UX and increased conversions</p>
            </div>
          </div>
        </div>

        {/* Technical Projects Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-black/10">
            <div className="w-1.5 h-1.5 bg-[#00ff85]"></div>
            <h2 className="text-xs font-press-start-2p text-black tracking-[0.15em] glitch-hover">TECHNICAL PROJECTS</h2>
          </div>
          <div className="space-y-4">
            {/* Orvia.ai Project */}
            <div className="border border-black/10 pixel-corners p-4 group relative transition-colors hover:border-[#00d9ff]/30 hover:shadow-[0_0_8px_rgba(0,217,255,0.1)]">
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00d9ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-mono text-sm text-black/90 mb-2">Orvia.ai</h3>
              <p className="font-mono text-xs text-black/60">AI SaaS for indie game developers: sentiment analysis, Steam data, actionable insights</p>
            </div>

            {/* Aura App Project */}
            <div className="border border-black/10 pixel-corners p-4 group relative transition-colors hover:border-[#ff6b35]/30 hover:shadow-[0_0_8px_rgba(255,107,53,0.1)]">
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="font-mono text-sm text-black/90 mb-2">Aura App</h3>
              <p className="font-mono text-xs text-black/60">Productivity and focus tracker: records sessions, Strava for desk work</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-black/10 pt-4">
          <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-black/10">
            <div className="w-1.5 h-1.5 bg-[#00d9ff]"></div>
            <h2 className="text-xs font-press-start-2p text-black tracking-[0.15em] glitch-hover">CONTACT</h2>
          </div>
          <div className="flex space-x-3">
            {/* Email Button */}
            <button className="flex items-center space-x-3 px-3 py-2 border border-black/20 pixel-corners group relative transition-colors hover:border-[#00d9ff]/40 hover:shadow-[0_0_8px_rgba(0,217,255,0.15)]">
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00d9ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Mail size={14} className="text-[#00d9ff]" strokeWidth={1.5} />
              <span className="font-mono text-sm text-black/80">Email</span>
            </button>
            
            {/* LinkedIn Button */}
            <a href="https://www.linkedin.com/in/tuan-nguyen-purdue" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-3 py-2 border border-black/20 pixel-corners group relative transition-colors hover:border-[#ff00ff]/40 hover:shadow-[0_0_8px_rgba(255,0,255,0.15)]">
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ff00ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Linkedin size={14} className="text-[#ff00ff]" strokeWidth={1.5} />
              <span className="font-mono text-sm text-black/80">LinkedIn</span>
            </a>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
