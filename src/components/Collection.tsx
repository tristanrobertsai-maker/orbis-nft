const Collection = () => {
  const nfts = [
    {
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
      score: "8.7/10",
    },
    {
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
      score: "9/10",
    },
    {
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
      score: "8.2/10",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-background">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-24 lg:py-[96px]">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="font-grotesk uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.05] text-cream">
            Collection of<br />
            <span className="ml-12 md:ml-24 lg:ml-32">
              <span className="font-condiment normal-case text-neon">Space</span> objects
            </span>
          </h2>

          <button className="relative">
            <div className="flex items-baseline gap-2 sm:gap-4">
              <span className="font-grotesk uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-cream">
                SEE
              </span>
              <div className="flex flex-col">
                <span className="font-grotesk uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] text-cream leading-tight">
                  ALL
                </span>
                <span className="font-grotesk uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] text-cream leading-tight">
                  CREATORS
                </span>
              </div>
            </div>
            <div className="mt-2 sm:mt-3 h-[6px] sm:h-[8px] lg:h-[10px] bg-neon w-full"></div>
          </button>
        </div>

        {/* NFT Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft, index) => (
            <div key={index} className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition">
              <div className="relative pb-[100%] rounded-[24px] overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={nft.video} type="video/mp4" />
                </video>

                {/* Overlay Bar */}
                <div className="absolute bottom-0 left-0 right-0 m-4 liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[11px] text-cream/70 uppercase">
                      RARITY SCORE:
                    </span>
                    <span className="font-grotesk text-[16px] text-cream">
                      {nft.score}
                    </span>
                  </div>

                  <button className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="#EFF4FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
