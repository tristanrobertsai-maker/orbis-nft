import { Mail } from 'lucide-react';

const TWITTER_URL = 'https://x.com/orbitalsnftshop';

const TwitterIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GithubIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const Hero = ({ onEnterTerminal }: { onEnterTerminal: () => void }) => {
  return (
    <section className="relative w-full min-h-screen rounded-b-[32px] overflow-hidden">
      {/* Layer 0: Video Background — stars + space */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
      </video>

      <style>{`
        @keyframes titleFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bullFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes bullFloat {
          0%, 100% { margin-top: 0; }
          50% { margin-top: -3px; }
        }
        @keyframes haloPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.025); opacity: 0.92; }
        }
        @keyframes particleFloat {
          0% { opacity: 0; transform: translateY(0) translateX(0); }
          15% { opacity: var(--p-opacity, 0.6); }
          85% { opacity: calc(var(--p-opacity, 0.6) * 0.8); }
          100% { opacity: 0; transform: translateY(var(--p-dy, -40px)) translateX(var(--p-dx, 20px)); }
        }
      `}</style>

      {/* Layer 1: HALOBULL Title */}
      <div
        className="absolute inset-0 flex items-center pointer-events-none"
        style={{ zIndex: 5 }}
      >
        <div
          className="relative lg:ml-32"
          style={{ animation: 'titleFadeIn 1.2s ease-out 0.2s both' }}
        >
          <h1 className="font-grotesk uppercase text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] lg:leading-[1] text-cream max-w-[780px]">
            Beyond earth<br />
            and ( its ) familiar boundaries
          </h1>
          <span className="absolute right-0 bottom-0 font-condiment text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-neon -rotate-1 mix-blend-exclusion opacity-90">
            Nft collection
          </span>
        </div>
      </div>

      {/* Layer 2: HaloBull — between title and navigation */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
        {/* Bull container — centered horizontally, sized ~35% of hero height */}
        <div
          className="absolute"
          style={{
            bottom: '10%',
            left: '50%',
            animation: 'bullFadeIn 1s ease-out 0.3s both',
          }}
        >
          {/* Inner wrapper handles float animation */}
          <div
            className="relative"
            style={{
              width: 'clamp(200px, 35vh, 450px)',
              height: 'clamp(200px, 35vh, 450px)',
              animation: 'bullFloat 10s ease-in-out infinite',
            }}
          >
            {/* Wide atmospheric golden glow (pulses) */}
            <div
              className="absolute"
              style={{
                top: '5%',
                left: '-12%',
                right: '-12%',
                bottom: '15%',
                background: 'radial-gradient(circle, rgba(255,215,100,0.14) 0%, rgba(196,164,68,0.05) 35%, transparent 58%)',
                animation: 'haloPulse 7s ease-in-out infinite',
              }}
            />

            {/* Sharp luminous ring behind horns */}
            <div
              className="absolute"
              style={{
                top: '6%',
                left: '12%',
                right: '12%',
                bottom: '38%',
                background: 'radial-gradient(circle, transparent 48%, rgba(255,220,130,0.55) 54%, rgba(255,220,130,0.12) 66%, transparent 78%)',
                animation: 'haloPulse 7s ease-in-out infinite',
              }}
            />

            {/* Golden particles near halo */}
            <div
              className="absolute rounded-full"
              style={{
                width: '2px',
                height: '2px',
                background: 'rgba(255,218,120,0.7)',
                left: '30%',
                top: '18%',
                '--p-dx': '18px',
                '--p-dy': '-22px',
                '--p-opacity': '0.7',
                animation: 'particleFloat 9s ease-in-out 0s infinite',
              } as React.CSSProperties}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: '1.5px',
                height: '1.5px',
                background: 'rgba(255,220,130,0.5)',
                left: '68%',
                top: '28%',
                '--p-dx': '-14px',
                '--p-dy': '-28px',
                '--p-opacity': '0.5',
                animation: 'particleFloat 11s ease-in-out 3s infinite',
              } as React.CSSProperties}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: '2px',
                height: '2px',
                background: 'rgba(255,215,100,0.6)',
                left: '22%',
                top: '35%',
                '--p-dx': '22px',
                '--p-dy': '-18px',
                '--p-opacity': '0.6',
                animation: 'particleFloat 8s ease-in-out 5s infinite',
              } as React.CSSProperties}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: '1px',
                height: '1px',
                background: 'rgba(255,220,130,0.4)',
                left: '72%',
                top: '15%',
                '--p-dx': '-10px',
                '--p-dy': '-35px',
                '--p-opacity': '0.4',
                animation: 'particleFloat 12s ease-in-out 1s infinite',
              } as React.CSSProperties}
            />

            {/* HaloBull artwork */}
            <img
              src="/halobull.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.95)) contrast(1.04) brightness(1.06)',
              }}
            />

            {/* Atmospheric haze around feet */}
            <div
              className="absolute"
              style={{
                bottom: '2%',
                left: '22%',
                right: '22%',
                height: '14%',
                background: 'radial-gradient(ellipse at 50% 55%, rgba(120,110,90,0.20) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
            />

            {/* Contact shadow beneath feet */}
            <div
              className="absolute"
              style={{
                bottom: '1%',
                left: '20%',
                right: '20%',
                height: '10%',
                background: 'radial-gradient(ellipse at 50% 60%, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.30) 50%, transparent 78%)',
                filter: 'blur(4px)',
              }}
            />
          </div>
        </div>

        {/* Thin drifting space dust particles (background layer) */}
        <div
          className="absolute rounded-full"
          style={{
            width: '1px',
            height: '1px',
            background: 'rgba(180,175,190,0.20)',
            left: '15%',
            top: '45%',
            '--p-dx': '50px',
            '--p-dy': '-70px',
            '--p-opacity': '0.20',
            animation: 'particleFloat 14s ease-in-out 0s infinite',
          } as React.CSSProperties}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '1.5px',
            height: '1.5px',
            background: 'rgba(170,165,180,0.15)',
            left: '82%',
            top: '55%',
            '--p-dx': '-60px',
            '--p-dy': '-80px',
            '--p-opacity': '0.15',
            animation: 'particleFloat 16s ease-in-out 4s infinite',
          } as React.CSSProperties}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '1px',
            height: '1px',
            background: 'rgba(190,185,200,0.18)',
            left: '25%',
            top: '62%',
            '--p-dx': '45px',
            '--p-dy': '-55px',
            '--p-opacity': '0.18',
            animation: 'particleFloat 13s ease-in-out 2s infinite',
          } as React.CSSProperties}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '1.5px',
            height: '1.5px',
            background: 'rgba(175,170,185,0.16)',
            left: '70%',
            top: '75%',
            '--p-dx': '-55px',
            '--p-dy': '-90px',
            '--p-opacity': '0.16',
            animation: 'particleFloat 15s ease-in-out 6s infinite',
          } as React.CSSProperties}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '1px',
            height: '1px',
            background: 'rgba(185,180,195,0.18)',
            left: '45%',
            top: '80%',
            '--p-dx': '40px',
            '--p-dy': '-60px',
            '--p-opacity': '0.18',
            animation: 'particleFloat 17s ease-in-out 8s infinite',
          } as React.CSSProperties}
        />
      </div>

      {/* Layer 3: Navigation and UI (topmost) */}
      <div className="relative z-40 max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-16 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between py-8">
          <div className="font-grotesk text-[16px] uppercase text-cream">
            Orbitals
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
            <ul className="flex gap-8">
              {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-grotesk text-[13px] uppercase text-cream hover:text-neon transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:hidden"></div>
        </header>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex flex-col gap-4 absolute top-32 right-16">
          <a
            href="mailto:contact@orbitalsnft.com"
            className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Email"
          >
            <Mail size={20} className="text-cream" />
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Twitter"
          >
            <TwitterIcon size={20} className="text-cream" />
          </a>
          <a
            href="#"
            className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Github"
          >
            <GithubIcon size={20} className="text-cream" />
          </a>
        </div>

        <div className="flex-1" />

        {/* Mobile Social Icons */}
        <div className="flex lg:hidden justify-center gap-4 mt-8 mb-8">
          <a
            href="mailto:contact@orbitalsnft.com"
            className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Email"
          >
            <Mail size={20} className="text-cream" />
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Twitter"
          >
            <TwitterIcon size={20} className="text-cream" />
          </a>
          <a
            href="#"
            className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Github"
          >
            <GithubIcon size={20} className="text-cream" />
          </a>
        </div>

        {/* Access Terminal Entry Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={onEnterTerminal}
            className="group relative liquid-glass px-10 py-4 rounded-[24px] hover:bg-neon/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-neon shadow-lg shadow-neon/50 animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-neon animate-ping opacity-40" />
              </div>
              <span className="font-grotesk text-[18px] sm:text-[24px] uppercase tracking-widest text-cream group-hover:text-neon transition-colors">
                ACCESS TERMINAL
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream group-hover:text-neon group-hover:translate-x-1 transition-all">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
