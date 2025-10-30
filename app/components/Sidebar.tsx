'use client';

interface SidebarProps {
  onNewChat: () => void;
  onAboutToggle: () => void;
  showAbout: boolean;
}

export default function Sidebar({ onNewChat, onAboutToggle, showAbout }: SidebarProps) {

  const experiences = [
    {
      title: "Sales Dev Intern",
      company: "Hyland Software",
      period: "2025",
      color: "#ff00ff"
    },
    {
      title: "Sales Dev Intern",
      company: "Magnet Media",
      period: "2025",
      color: "#8b5cf6"
    },
    {
      title: "Founder",
      company: "Kryptesign",
      period: "2024",
      color: "#10b981"
    },
    {
      title: "UX Engineer",
      company: "Purdue Envision",
      period: "2024",
      color: "#ff6b35"
    },
    {
      title: "Digital Transformation",
      company: "Schneider Electric",
      period: "2023",
      color: "#00d9ff"
    }
  ];

  const education = [
    {
      title: "BS Computer Graphics & Technology",
      company: "Purdue University",
      period: "2022 - 2026",
      color: "#3b82f6"
    }
  ];


  return (
    <>
      <div className="w-72 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-4rem)] overflow-y-auto fixed left-0 top-16 z-40" style={{backgroundColor: '#ffffff'}}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 space-y-2">
          <button
            onClick={onNewChat}
            className="w-full flex items-center justify-center space-x-2 pixel-corners pixel-button relative group px-4 py-3 transition-all duration-200"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.2)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
              e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.05)';
              e.currentTarget.style.boxShadow = '0 0 8px rgba(0, 217, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span className="text-xl font-bold text-gray-600">+</span>
            <span className="text-sm font-mono text-gray-800">New Chat</span>
            {/* Yellow pixel corner on hover */}
            <div className="absolute top-0 right-0 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{backgroundColor: '#FFD60A'}}></div>
          </button>

          {/* About Button - Moved up */}
          <button
            onClick={onAboutToggle}
            className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-200 pixel-corners pixel-button relative group px-4 py-3"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.2)',
              backgroundColor: showAbout ? 'rgba(255, 0, 255, 0.05)' : 'transparent',
              boxShadow: showAbout ? '0 0 8px rgba(255, 0, 255, 0.15)' : 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 0, 255, 0.4)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 0, 255, 0.05)';
              e.currentTarget.style.boxShadow = '0 0 8px rgba(255, 0, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = showAbout ? 'rgba(255, 0, 255, 0.4)' : 'rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.backgroundColor = showAbout ? 'rgba(255, 0, 255, 0.05)' : 'transparent';
              e.currentTarget.style.boxShadow = showAbout ? '0 0 8px rgba(255, 0, 255, 0.15)' : 'none';
            }}
          >
            {/* Profile/user icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-sm font-mono">About</span>
            {/* Magenta pixel corner on hover */}
            <div className="absolute top-0 right-0 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{backgroundColor: '#FF00FF'}}></div>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-4 space-y-4">
          {/* Experience Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 animate-pulse" style={{backgroundColor: '#00d9ff'}}></div>
              <h2 className="text-[12px] font-mono font-bold text-gray-700 tracking-wider uppercase">EXPERIENCE</h2>
            </div>
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-3 pixel-corners pixel-button relative group transition-all duration-200"
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${exp.color}40`;
                    e.currentTarget.style.boxShadow = `0 0 8px ${exp.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-1.5" style={{backgroundColor: exp.color}}></div>
                    <div className="flex-1">
                      <h3 className="font-mono text-[14px] text-black/90 mb-1">{exp.title}</h3>
                      <p className="font-mono text-[13px] mb-1" style={{color: exp.color}}>{exp.company}</p>
                      <p className="font-mono text-[12px] text-black/60">{exp.period}</p>
                    </div>
                  </div>
                  {/* Colored pixel corner on hover */}
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{backgroundColor: exp.color}}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Separation Line */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Education Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 animate-pulse" style={{backgroundColor: '#ffff00'}}></div>
              <h2 className="text-[12px] font-mono font-bold text-gray-700 tracking-wider uppercase">EDUCATION</h2>
            </div>
            <div className="space-y-2">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-3 pixel-corners pixel-button relative group transition-all duration-200"
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${edu.color}40`;
                    e.currentTarget.style.boxShadow = `0 0 8px ${edu.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-1.5" style={{backgroundColor: edu.color}}></div>
                    <div className="flex-1">
                      <h3 className="font-mono text-[14px] text-black/90 mb-1">{edu.title}</h3>
                      <p className="font-mono text-[13px] mb-1" style={{color: edu.color}}>{edu.company}</p>
                      <p className="font-mono text-[12px] text-black/60">{edu.period}</p>
                    </div>
                  </div>
                  {/* Colored pixel corner on hover */}
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{backgroundColor: edu.color}}></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

