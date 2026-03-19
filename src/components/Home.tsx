import React from 'react';
import { motion } from 'motion/react';
import { AutoAwesome, Explore, Psychology, Verified, DataThresholding, ArrowForwardIos } from './Icons';

export const Hero: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-glow -z-10"></div>
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-secondary-container/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] bg-primary-container/10 blur-[100px] rounded-full"></div>
      
      <div className="max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-surface-container-low/50 backdrop-blur-md">
            <AutoAwesome className="text-primary-container w-5 h-5 mr-2" />
            <span className="text-primary-container font-label text-xs uppercase tracking-tighter">AI-Powered Synthesis</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[1.1] tracking-tighter text-on-background">
            Your Perfect Phone, <br/>
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Found by AI.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl font-body leading-relaxed">
            Go beyond specs. Discover the device that truly fits your personality through our advanced AI-driven assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onStart}
              className="bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-fixed px-8 py-4 rounded-full font-headline font-bold text-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all"
            >
              Begin Personality Assessment
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 text-on-background hover:bg-white/5 transition-all font-headline font-bold text-lg">
              Learn How It Works
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            <div className="absolute w-64 h-[500px] glass-panel rounded-[3rem] border border-white/10 rotate-[-12deg] -translate-x-20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
              <div className="mt-12 mx-auto w-12 h-1 bg-white/20 rounded-full"></div>
            </div>
            <div className="absolute w-64 h-[500px] glass-panel rounded-[3rem] border border-white/20 rotate-[6deg] translate-x-12 shadow-2xl z-10 overflow-hidden">
              <img 
                alt="iPhone visual" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale" 
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-8 right-8 space-y-2">
                <div className="h-2 w-24 bg-primary-container/40 rounded-full"></div>
                <div className="h-2 w-16 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Features: React.FC = () => {
  return (
    <section className="py-32 px-8 max-w-screen-2xl mx-auto">
      <div className="text-center mb-24 space-y-4">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-background">The Path to Discovery</h2>
        <p className="text-on-surface-variant font-body">Our neural framework maps your traits to the perfect silicon companion.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Explore />, title: "1. Explore", desc: "We analyze thousands of hardware parameters across every flagship and boutique device in existence." },
          { icon: <Psychology />, title: "2. Answer", desc: "Engage with our \"Neural Dialogue\"—a personality assessment designed to understand your lifestyle, values, and aesthetic preferences." },
          { icon: <Verified />, title: "3. Discover", desc: "Receive a bespoke recommendation that isn't just a phone, but an extension of your digital self." }
        ].map((step, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="group p-8 rounded-3xl bg-surface-container-low border border-white/5 hover:border-primary-container/30 transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-primary-container">
              {step.icon}
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">{step.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const BentoGrid: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <section className="py-24 px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        <div className="md:col-span-8 relative rounded-3xl overflow-hidden bg-surface-container group">
          <img 
            alt="AI Neural visualization" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-12 space-y-4">
            <h4 className="text-3xl font-headline font-bold">Beyond Benchmarks</h4>
            <p className="max-w-md text-on-surface-variant">Our AI evaluates the "feel" of software, the ergonomics of design, and the soul of the hardware interface.</p>
          </div>
        </div>
        <div className="md:col-span-4 rounded-3xl bg-gradient-to-br from-secondary-container to-surface-container-high p-8 flex flex-col justify-between">
          <DataThresholding className="w-12 h-12 text-white/50" />
          <div className="space-y-4">
            <h4 className="text-2xl font-headline font-bold text-white">Adaptive Logic</h4>
            <p className="text-white/70">The system learns with every recommendation, refining its understanding of human-tech synergy.</p>
          </div>
        </div>
        <div className="md:col-span-4 rounded-3xl bg-surface-container-high p-8 border border-white/5 hover:bg-surface-bright transition-colors">
          <h4 className="text-xl font-headline font-bold mb-2">Privacy First</h4>
          <p className="text-on-surface-variant text-sm">Your personality data is processed locally and never stored on our cloud servers.</p>
        </div>
        <div 
          onClick={onStart}
          className="md:col-span-8 rounded-3xl bg-surface-container-low border border-white/10 p-8 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
        >
          <div>
            <h4 className="text-2xl font-headline font-bold">Ready to meet your match?</h4>
            <p className="text-on-surface-variant">Join 50,000+ users who found their perfect fit.</p>
          </div>
          <ArrowForwardIos className="text-primary-container w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export const CTA: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-headline font-bold mb-8">Stop scrolling. Start <span className="text-primary-container italic">connecting</span>.</h2>
        <p className="text-xl text-on-surface-variant mb-12">The assessment takes less than 2 minutes. The connection lasts for years.</p>
        <button 
          onClick={onStart}
          className="bg-primary-container text-on-primary-fixed px-12 py-5 rounded-full font-headline font-bold text-xl hover:scale-105 transition-transform"
        >
          Start Your Assessment
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-container/20 blur-[150px] -z-10 rounded-full"></div>
    </section>
  );
};
