import { Mail, Twitter, Github } from 'lucide-react';

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
          {[Mail, Twitter, Github].map((Icon, i) => (
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
