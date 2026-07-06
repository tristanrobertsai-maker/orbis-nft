import { Mail } from 'lucide-react';

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

const CTA = () => {
  return (
    <section className="relative w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
      </video>

      {/* Text Content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:pr-[20%] lg:pl-[15%] pr-4 pl-4">
          <div className="relative">
            <span className="absolute -top-8 left-0 font-condiment text-[17px] sm:text-[28px] md:text-[48px] lg:text-[68px] text-neon mix-blend-exclusion">
              Go beyond
            </span>
            <h2 className="font-grotesk uppercase text-[16px] sm:text-[24px] md:text-[40px] lg:text-[60px] leading-[1.05] text-cream text-right">
              <span className="mb-4 md:mb-8 lg:mb-12 block">
                JOIN US.
              </span>
              <span className="block">
                REVEAL WHAT'S HIDDEN.
              </span>
              <span className="block">
                DEFINE WHAT'S NEXT.
              </span>
              <span className="block">
                FOLLOW THE SIGNAL.
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute left-[8%] bottom-[12%] sm:bottom-[16%] lg:bottom-[20%]">
        <div className="liquid-glass rounded-[0.5rem] sm:rounded-[0.75rem] lg:rounded-[1.25rem] overflow-hidden">
          {[Mail, TwitterIcon, GithubIcon].map((Icon, i) => (
            <div key={i}>
              <button className="w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] aspect-square flex items-center justify-center hover:bg-white/10 transition">
                <Icon size={20} className="text-cream" />
              </button>
              {i < 2 && <div className="border-b border-white/10"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
