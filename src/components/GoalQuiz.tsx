import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot, Dumbbell, Target, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

export default function GoalQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ goal: '', level: '', focus: '' });

  const nextStep = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const steps = [
    {
      id: 1,
      question: "What is your primary fitness goal?",
      options: [
        { label: "Build Muscle", value: "muscle", icon: <Dumbbell /> },
        { label: "Lose Fat", value: "fat-loss", icon: <Zap /> },
        { label: "Elite Performance", value: "performance", icon: <Target /> },
      ],
      field: 'goal'
    },
    {
      id: 2,
      question: "What's your experience level?",
      options: [
        { label: "Beginner", value: "beginner" },
        { label: "Intermediate", value: "intermediate" },
        { label: "Advanced Pro", value: "advanced" },
      ],
      field: 'level'
    }
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-brand-volt text-brand-black px-6 py-3 rounded-full font-black uppercase text-sm shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
      >
        <Bot size={20} /> Find Your Protocol
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-brand-white rounded-sm overflow-hidden shadow-2xl"
            >
              <div className="bg-brand-black p-6 flex justify-between items-center">
                <div className="flex items-center gap-2 text-brand-volt">
                  <Bot size={24} />
                  <span className="font-display font-black uppercase tracking-tighter">Titan AI Recommendation</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-brand-white/50 hover:text-brand-white uppercase text-xs font-bold leading-none">
                  Close
                </button>
              </div>

              <div className="p-8">
                {step <= steps.length ? (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-brand-volt bg-brand-black px-2 py-0.5 uppercase tracking-widest">Step {step} of 2</span>
                      <h3 className="text-2xl font-display font-black uppercase leading-tight">{steps[step - 1].question}</h3>
                    </div>

                    <div className="grid gap-3">
                      {steps[step - 1].options.map(option => (
                        <button
                          key={option.value}
                          onClick={() => nextStep(steps[step - 1].field, option.value)}
                          className="flex items-center gap-4 w-full text-left p-6 border-2 border-brand-light-gray hover:border-brand-volt hover:bg-brand-volt/5 transition-all group"
                        >
                          {option.icon && <div className="text-brand-black/30 group-hover:text-brand-volt">{option.icon}</div>}
                          <span className="font-bold uppercase tracking-tight">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 space-y-6">
                    <div className="inline-block p-4 bg-brand-volt rounded-full animate-bounce">
                      <Zap size={32} className="text-brand-black fill-current" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-display font-black uppercase">Analysis Complete</h3>
                      <p className="text-gray-500 font-medium italic">We've calculated the perfect supplement stack for your <span className="text-brand-black underline decoration-brand-volt decoration-2">{answers.goal}</span> objectives.</p>
                      <button 
                        onClick={() => setIsOpen(false)}
                        className="w-full bg-brand-black text-brand-volt p-5 font-black uppercase text-lg hover:bg-brand-volt hover:text-brand-black transition-colors"
                      >
                        See My Recommendation
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
