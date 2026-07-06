import { Mail, Twitter, Github } from 'lucide-react';

const Hero = () => {
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
            Orbis.Nft
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
          {[Mail, Twitter, Github].map((Icon, i) => (
            <button key={i} className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition">
              <Icon size={20} className="text-cream" />
            </button>
          ))}
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
        <div className="flex lg:hidden justify-center gap-4 mt-8 mb-16">
          {[Mail, Twitter, Github].map((Icon, i) => (
            <button key={i} className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition">
              <Icon size={20} className="text-cream" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
