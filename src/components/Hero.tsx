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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-16 min-h-screen flex flex-col">
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

        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="relative">
            <h1 className="font-grotesk uppercase text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] lg:leading-[1] text-cream max-w-[780px] lg:ml-32">
              Beyond earth<br />
              and ( its ) familiar boundaries
            </h1>
            <span className="absolute right-0 bottom-0 font-condiment text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-neon -rotate-1 mix-blend-exclusion opacity-90">
              Nft collection
            </span>
          </div>
        </div>

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
