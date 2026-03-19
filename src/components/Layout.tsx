import React from 'react';

export const Navbar: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(98,0,234,0.1)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent font-headline tracking-tight cursor-pointer" onClick={() => window.location.reload()}>
          PersonaPhone
        </div>
        <div className="hidden md:flex items-center space-x-8 font-label text-xs uppercase tracking-widest">
          <a className="text-cyan-400 border-b-2 border-cyan-400 pb-1" href="#">Discovery</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#">Personality Quiz</a>
          <a className="text-slate-400 hover:text-white transition-colors" href="#">Top Picks</a>
        </div>
        <button 
          onClick={onStart}
          className="bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-fixed px-6 py-2 rounded-full font-headline font-semibold text-sm hover:scale-105 transition-transform active:scale-95 duration-200"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 w-full py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 max-w-screen-2xl mx-auto pt-12">
        <div className="text-slate-500 font-label text-xs uppercase tracking-widest">
          © 2024 Ethereal Intelligence Framework
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-slate-500 hover:text-cyan-400 transition-colors font-label text-xs uppercase tracking-widest" href="#">Privacy</a>
          <a className="text-slate-500 hover:text-cyan-400 transition-colors font-label text-xs uppercase tracking-widest" href="#">Terms</a>
          <a className="text-slate-500 hover:text-cyan-400 transition-colors font-label text-xs uppercase tracking-widest" href="#">AI Ethics</a>
          <a className="text-slate-500 hover:text-cyan-400 transition-colors font-label text-xs uppercase tracking-widest" href="#">Support</a>
        </div>
        <div className="flex gap-4">
          <span className="text-slate-500 hover:text-white cursor-pointer transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
          </span>
          <span className="text-slate-500 hover:text-white cursor-pointer transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </span>
        </div>
      </div>
    </footer>
  );
};
