import React from 'react';
import { motion } from 'motion/react';
import { PhoneRecommendation } from '../services/geminiService';

export const Results: React.FC<{ result: PhoneRecommendation; onRestart: () => void }> = ({ result, onRestart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8 pt-32">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary-container/30 bg-primary-container/10 backdrop-blur-md">
            <span className="text-primary-container font-label text-xs uppercase tracking-widest">Your Neural Match</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            The <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{result.model}</span>
          </h2>
          <p className="text-2xl text-on-surface-variant font-body leading-relaxed">
            {result.reasoning}
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-headline font-bold uppercase tracking-widest text-primary-container">Key Synergies</h3>
            <div className="flex flex-wrap gap-3">
              {result.keyFeatures.map((feature, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-surface-container-high border border-white/5 text-sm font-body">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-surface-container-low border border-white/5 space-y-4">
            <h3 className="text-xl font-headline font-bold">Personality Archetype: {result.personalityMatch}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Our analysis suggests your digital self is best represented by this hardware choice, balancing your aesthetic preferences with your core values.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-fixed px-8 py-4 rounded-full font-headline font-bold text-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all">
              View Device Details
            </button>
            <button 
              onClick={onRestart}
              className="px-8 py-4 rounded-full border border-white/20 text-on-background hover:bg-white/5 transition-all font-headline font-bold text-lg"
            >
              Retake Assessment
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-80 h-[600px] glass-panel rounded-[3.5rem] border border-white/20 shadow-2xl overflow-hidden p-4">
             <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent"></div>
             <div className="w-full h-full rounded-[2.5rem] bg-surface-container-highest overflow-hidden relative">
                <img 
                  alt="Recommended device" 
                  className="w-full h-full object-cover opacity-80" 
                  src={`https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1000`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-8 right-8 text-center space-y-2">
                  <h4 className="text-2xl font-headline font-bold text-white">{result.model}</h4>
                  <p className="text-white/60 text-sm font-label uppercase tracking-widest">{result.brand}</p>
                </div>
             </div>
          </div>
          <div className="absolute -z-10 w-[500px] h-[500px] bg-primary-container/10 blur-[120px] rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};
