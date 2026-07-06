const About = () => {
  const descriptionText = "A digital object fixed beyond time and place. An exploration of distance, form, and silence in space";

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-24 lg:py-[96px] min-h-screen flex flex-col justify-center">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <div className="relative">
            <h2 className="font-grotesk uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.05] text-cream">
              Hello!<br />
              We're orbitals
            </h2>
            <span className="absolute right-0 bottom-0 font-condiment text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] text-neon -rotate-1 mix-blend-exclusion opacity-90">
              Orbitals
            </span>
          </div>

          <p className="font-mono uppercase text-[14px] md:text-[16px] text-cream max-w-[266px]">
            {descriptionText}
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-4">
            <p className="font-mono uppercase text-[14px] text-cream opacity-10">
              {descriptionText}
            </p>
            <p className="font-mono uppercase text-[14px] text-cream opacity-10">
              {descriptionText}
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <p className="font-mono uppercase text-[14px] text-cream opacity-10">
              {descriptionText}
            </p>
            <p className="font-mono uppercase text-[14px] text-cream opacity-10">
              {descriptionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
