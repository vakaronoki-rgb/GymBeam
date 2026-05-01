import { useState, useEffect } from 'react';
import { ShoppingCart, Search, User, Menu, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAVIGATION } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled ? "bg-brand-black/95 py-3 shadow-xl backdrop-blur-md" : "bg-transparent py-5"
      )}
    >
      {/* Mobile Sticky CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full bg-brand-volt p-4 z-50 md:hidden flex items-center justify-between shadow-[0_-10px_20px_rgba(0,0,0,0.2)]"
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-brand-black/60 leading-none">Limited Time</span>
              <span className="text-sm font-black uppercase text-brand-black">15% Off Your First Order</span>
            </div>
            <button className="bg-brand-black text-brand-volt px-6 py-2 font-black uppercase text-xs rounded-sm">
              Shop Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2 group">
            <div className="bg-brand-volt p-1 rounded-sm group-hover:rotate-12 transition-transform">
              <Flame size={24} className="text-brand-black fill-current" />
            </div>
            <span className={cn(
              "text-2xl font-display font-black tracking-tighter uppercase italic",
              isScrolled ? "text-brand-white" : "text-brand-black md:text-brand-white"
            )}>
              Titan<span className="text-brand-volt">Gain</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {NAVIGATION.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest hover:text-brand-volt transition-colors",
                  isScrolled ? "text-brand-white/80" : "text-brand-white/90"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center bg-brand-gray/20 rounded-full px-4 py-2 border border-brand-white/10">
            <Search size={18} className="text-brand-white/60" />
            <input 
              type="text" 
              placeholder="Search supplements..." 
              className="bg-transparent border-none focus:ring-0 text-sm text-brand-white placeholder:text-brand-white/40 ml-2 w-32 xl:w-48"
            />
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Free Shipping Progress */}
            <div className="hidden xl:flex flex-col items-end mr-4">
              <span className="text-[9px] font-black uppercase text-brand-white/40 tracking-widest leading-none mb-1">
                $15.01 away from <span className="text-brand-volt">Free Shipping</span>
              </span>
              <div className="w-32 h-1 bg-brand-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  className="h-full bg-brand-volt"
                />
              </div>
            </div>

            <button className="p-2 hover:bg-brand-volt/10 rounded-full transition-colors group">
              <User size={24} className={cn(
                "transition-colors",
                isScrolled ? "text-brand-white" : "text-brand-white group-hover:text-brand-volt"
              )} />
            </button>
            <button className="p-2 hover:bg-brand-volt/10 rounded-full transition-colors group relative">
              <ShoppingCart size={24} className={cn(
                "transition-colors",
                isScrolled ? "text-brand-white" : "text-brand-white group-hover:text-brand-volt"
              )} />
              <span className="absolute top-0 right-0 bg-brand-rush text-brand-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button 
              className="lg:hidden p-2 text-brand-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-black z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-display font-black text-brand-white italic uppercase">
                Titan<span className="text-brand-volt">Gain</span>
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-white p-2">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {NAVIGATION.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-3xl font-display font-bold text-brand-white hover:text-brand-volt transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-brand-white/10 flex flex-col gap-4">
              <button className="w-full bg-brand-volt text-brand-black p-4 font-bold uppercase rounded-sm">
                Login / Register
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
