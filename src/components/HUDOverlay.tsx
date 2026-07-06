interface HUDOverlayProps {
  activeNFT: number | null;
  onExit: () => void;
  onBackToOverview: () => void;
  scrollProgress: number;
}

export default function HUDOverlay({ activeNFT, onExit, onBackToOverview, scrollProgress }: HUDOverlayProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-start pointer-events-auto">
        {/* Logo */}
        <div className="text-cream font-grotesk text-2xl tracking-widest">
          ORBIS.NFT
          <span className="text-neon ml-2">// TERMINAL</span>
        </div>
      </div>

      {/* Exit Button - Top Right */}
      <div className="absolute top-8 right-8 pointer-events-auto">
        <button
          onClick={onExit}
          className="liquid-glass px-6 py-3 rounded-full text-cream hover:bg-white/10 transition-all flex items-center gap-2"
        >
          <span>EXIT TERMINAL</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>

      {/* Navigation Steps - Below Exit Button */}
      {activeNFT === null && (
        <div className="absolute top-24 right-8 flex gap-2 pointer-events-auto">
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              className={`liquid-glass w-10 h-10 rounded-lg text-cream text-sm transition-all flex items-center justify-center ${
                scrollProgress > idx * 0.25 ? 'bg-neon/20 text-neon' : ''
              }`}
            >
              {idx + 1}
            </div>
          ))}
        </div>
      )}

      {/* Scroll Indicator */}
      {activeNFT === null && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-auto">
          <div className="text-cream text-sm opacity-60 tracking-widest">
            ↕ SCROLL TO EXPLORE
          </div>
          
          {/* Progress Bar */}
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-neon transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* NFT Info Panel (when active) */}
      {activeNFT !== null && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 liquid-glass rounded-3xl p-8 max-w-2xl pointer-events-auto animate-in">
          <button
            onClick={onBackToOverview}
            className="absolute top-4 right-4 text-cream/60 hover:text-cream transition"
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 4.5v7M4.5 8h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="flex gap-6">
            {/* NFT Preview */}
            <div className="w-48 h-48 rounded-2xl overflow-hidden liquid-glass">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_05${3923 + activeNFT * 50}0.mp4`} type="video/mp4" />
              </video>
            </div>

            {/* NFT Details */}
            <div className="flex-1">
              <div className="text-neon text-sm tracking-widest mb-2">NFT #{activeNFT + 1}</div>
              <h3 className="text-cream font-grotesk text-3xl mb-3">
                SPACE ENTITY {activeNFT + 1}
              </h3>
              <p className="text-cream/70 text-sm mb-4 leading-relaxed">
                A rare digital entity captured beyond earthly boundaries. 
                This unique being exists in the liminal space between dimensions, 
                radiating cosmic energy.
              </p>
              
              <div className="flex gap-4 text-sm">
                <div>
                  <div className="text-cream/50 text-xs">RARITY</div>
                  <div className="text-neon font-bold">
                    {['8.7', '9.0', '8.2'][activeNFT] || '8.5'} / 10
                  </div>
                </div>
                <div>
                  <div className="text-cream/50 text-xs">STATUS</div>
                  <div className="text-neon font-bold">EXPLORING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}