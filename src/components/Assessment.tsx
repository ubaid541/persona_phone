import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AssessmentAnswers, getPhoneRecommendation, PhoneRecommendation } from '../services/geminiService';

const questions = [
  {
    id: 'lifestyle',
    question: 'How would you describe your daily lifestyle?',
    options: [
      { label: 'Fast-paced & Professional', value: 'professional' },
      { label: 'Creative & Artistic', value: 'creative' },
      { label: 'Adventurous & Outdoorsy', value: 'adventurous' },
      { label: 'Minimalist & Focused', value: 'minimalist' }
    ]
  },
  {
    id: 'values',
    question: 'What do you value most in a digital companion?',
    options: [
      { label: 'Uncompromising Performance', value: 'performance' },
      { label: 'Exceptional Camera Quality', value: 'camera' },
      { label: 'Battery Life & Reliability', value: 'reliability' },
      { label: 'Privacy & Security', value: 'privacy' }
    ]
  },
  {
    id: 'aesthetic',
    question: 'What is your preferred design aesthetic?',
    options: [
      { label: 'Sleek & Modern', value: 'modern' },
      { label: 'Bold & Industrial', value: 'industrial' },
      { label: 'Organic & Soft', value: 'organic' },
      { label: 'Classic & Timeless', value: 'classic' }
    ]
  },
  {
    id: 'usage',
    question: 'What is your primary use case for a smartphone?',
    options: [
      { label: 'Content Creation & Social Media', value: 'content' },
      { label: 'Gaming & High-End Media', value: 'gaming' },
      { label: 'Communication & Productivity', value: 'productivity' },
      { label: 'Casual Browsing & Daily Tasks', value: 'casual' }
    ]
  },
  {
    id: 'budget',
    question: 'What is your investment range for this device?',
    options: [
      { label: 'Premium Flagship ($1000+)', value: 'premium' },
      { label: 'High-End Value ($700 - $900)', value: 'high' },
      { label: 'Mid-Range Balanced ($400 - $600)', value: 'mid' },
      { label: 'Essential Utility (Under $400)', value: 'essential' }
    ]
  }
];

export const Assessment: React.FC<{ onComplete: (result: PhoneRecommendation) => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<AssessmentAnswers>>({});
  const [loading, setLoading] = useState(false);

  const handleSelect = (value: string) => {
    const currentQuestion = questions[step];
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit(newAnswers as AssessmentAnswers);
    }
  };

  const handleSubmit = async (finalAnswers: AssessmentAnswers) => {
    setLoading(true);
    try {
      const result = await getPhoneRecommendation(finalAnswers);
      onComplete(result);
    } catch (error) {
      console.error("Error getting recommendation:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary-container border-t-transparent rounded-full mb-8"
        />
        <h2 className="text-3xl font-headline font-bold text-center">Consulting the Neural Framework...</h2>
        <p className="text-on-surface-variant mt-4 text-center">Synthesizing your personality traits with global hardware data.</p>
      </div>
    );
  }

  const currentQuestion = questions[step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8 pt-32">
      <div className="max-w-2xl w-full">
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <span className="text-primary-container font-label text-xs uppercase tracking-widest">Question {step + 1} of {questions.length}</span>
            <span className="text-on-surface-variant text-sm">{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-primary-container to-secondary-container"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">{currentQuestion.question}</h2>
            <div className="grid grid-cols-1 gap-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className="group relative p-6 rounded-2xl bg-surface-container-low border border-white/5 text-left hover:border-primary-container/50 hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-xl font-body group-hover:text-primary-container transition-colors">{option.label}</span>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6 text-primary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
