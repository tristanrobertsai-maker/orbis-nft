const Footer = () => {
  return (
    <footer className="relative w-full py-24 bg-background">
      <div className="max-w-[1831px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {/* Left — Brand */}
          <div>
            <div className="font-grotesk text-[28px] sm:text-[32px] uppercase text-cream mb-3">
              Orbitals<span className="text-neon">.</span>
            </div>
            <p className="font-mono text-[13px] uppercase text-cream/50 max-w-[220px] leading-relaxed">
              Space objects beyond earthly boundaries
            </p>
          </div>

          {/* Center — Contract Address Block */}
          <div className="relative flex flex-col items-center text-center">
            {/* Decorative rotating rings */}
            <div
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
              style={{ animation: 'spin 20s linear infinite' }}
            >
              <div className="w-[320px] h-[320px] border border-neon/20 rounded-full" />
            </div>
            <div
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
              style={{ animation: 'spin 30s linear infinite reverse' }}
            >
              <div className="w-[360px] h-[360px] border border-[#b724ff]/15 rounded-full border-dashed" />
            </div>

            <div className="relative flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                <span className="font-grotesk text-[11px] uppercase tracking-[0.2em] text-neon">
                  Contract Address
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              </div>

              <a
                href="https://pump.fun/coin/sRorJxM7P72ixPZHSU5fFRtbu5cZw77HqN3nygdpump"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-[20px] px-4 sm:px-8 py-5 mb-4 group cursor-pointer hover:bg-neon/10 transition"
              >
                <span className="font-grotesk text-[11px] sm:text-[14px] text-cream tracking-[0.1em] uppercase break-all">
                  sRorJxM7P72ixPZHSU5fFRtbu5cZw77HqN3nygdpump
                </span>
              </a>

              <p className="font-condiment text-neon text-[20px] mt-2">
                verified on-chain
              </p>
            </div>
          </div>

          {/* Right — Links */}
          <div className="md:text-right">
            <div className="font-grotesk text-[12px] uppercase tracking-widest text-cream/60 mb-4">
              Explore
            </div>
            <ul className="space-y-2">
              {['Gallery', 'Collection', 'FAQ', 'Whitepaper'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-grotesk text-[14px] uppercase text-cream/80 hover:text-neon transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[11px] uppercase text-cream/40">
            © 2025 Orbitals. — Beyond the familiar boundaries
          </span>
          <div className="flex gap-4">
            <span className="font-mono text-[11px] uppercase text-cream/40">Chain: Solana</span>
            <span className="font-mono text-[11px] uppercase text-neon">● Live</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
