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

          {/* Center — spacer */}
          <div className="hidden md:block"></div>

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
