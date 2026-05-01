import { motion } from 'motion/react';
import { ArrowRight, Trophy, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-black">
      {/* Background with parallax effect or high-intensity athlete */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop" 
          alt="Athlete Training"
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-volt rounded-full text-brand-black text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} className="fill-current" />
            <span>New Season. New Gainz.</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-brand-white leading-none mb-6">
            Forge Your <br />
            <span className="text-brand-volt italic">Elite Legacy</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-white/70 mb-10 max-w-lg leading-relaxed">
            Premium supplements designed for those who don't settle for average. 
            Science-backed, lab-tested, and athlete-proven results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-volt text-brand-black px-10 py-5 font-black uppercase text-lg group relative overflow-hidden rounded-sm">
              <span className="relative z-10 flex items-center gap-2">
                Shop Best Sellers <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-brand-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
            <button className="border-2 border-brand-white/20 text-brand-white hover:border-brand-volt hover:text-brand-volt px-10 py-5 font-black uppercase text-lg transition-colors rounded-sm">
              Take AI Goal Quiz
            </button>
          </div>

          {/* Quick Trust Indicators */}
          <div className="mt-16 flex flex-wrap gap-8 items-center pt-8 border-t border-brand-white/10">
            <div className="flex items-center gap-2 text-brand-white/50">
              <Trophy size={20} className="text-brand-volt" />
              <span className="text-sm font-bold uppercase tracking-wider">Top Rated Brands</span>
            </div>
            <div className="flex items-center gap-2 text-brand-white/50">
              <Zap size={20} className="text-brand-volt" />
              <span className="text-sm font-bold uppercase tracking-wider">Fast Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-brand-white/50">
              <ShieldCheck size={20} className="text-brand-volt" />
              <span className="text-sm font-bold uppercase tracking-wider">Certified Lab-Tested</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical badge */}
      <div className="absolute right-0 bottom-24 hidden xl:flex flex-col items-center gap-4">
        <span className="[writing-mode:vertical-lr] text-brand-volt text-sm font-black tracking-[0.5em] uppercase opacity-20">
          Unstoppable Momentum
        </span>
        <div className="w-[1px] h-32 bg-brand-volt/20" />
      </div>
    </section>
  );
}
