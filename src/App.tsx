import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductGrid from './components/ProductGrid';
import GoalGrid from './components/GoalGrid';
import EmailCapture from './components/EmailCapture';
import GoalQuiz from './components/GoalQuiz';
import { ArrowRight, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white selection:bg-brand-volt selection:text-brand-black">
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* TRUST BAR */}
        <TrustBar />

        {/* BESTSELLERS */}
        <div id="protein">
          <ProductGrid />
        </div>

        {/* GOAL-BASED SHOPPING */}
        <GoalGrid />

        {/* EDUCATIONAL / WHY US SECTION */}
        <section className="py-32 bg-brand-black text-brand-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-3 py-1 bg-brand-volt text-brand-black text-xs font-black uppercase tracking-widest">Titan Edge</div>
              <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase">
                Science is <br />
                <span className="italic text-brand-volt underline decoration-brand-white decoration-4 underline-offset-8">Our Foundation</span>
              </h2>
              <p className="text-brand-white/60 text-lg leading-relaxed max-w-lg">
                We don't do "proprietary blends." Every ingredient is dosed at clinical levels and verified by 3rd party labs. Maximum bioavailability. Zero fillers.
              </p>
              <button className="flex items-center gap-3 text-brand-volt font-black uppercase tracking-widest hover:translate-x-2 transition-transform">
                Read the Proof <ArrowRight />
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square bg-brand-gray border border-brand-white/10 p-2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1579722820308-d74e5719bc9a?q=80&w=800&auto=format&fit=crop" 
                  alt="Science and Lab"
                  className="w-full h-full object-cover grayscale opacity-50 contrast-125"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-volt p-8 text-brand-black w-48 shadow-2xl">
                <div className="text-4xl font-black leading-none">99.9%</div>
                <div className="text-[10px] font-black uppercase tracking-wider leading-tight mt-2">Purity Verification Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* EMAIL CAPTURE */}
        <EmailCapture />
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-black pt-24 pb-12 border-t border-brand-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <span className="text-3xl font-display font-black text-brand-white italic uppercase">
                Titan<span className="text-brand-volt">Gain</span>
              </span>
              <p className="text-brand-white/40 text-sm leading-relaxed max-w-xs">
                Premium performance nutrition and combat gear for those who respect the grind. Engineered for the elite.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-brand-white/10 flex items-center justify-center text-brand-white/50 hover:bg-brand-volt hover:text-brand-black hover:border-brand-volt transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: 'Shop', items: ['Protein', 'Pre-Workout', 'Vitamins', 'Gear'] },
              { title: 'Support', items: ['Track Order', 'Returns', 'Shipping Policy', 'Contact Us'] },
              { title: 'Community', items: ['Titan Athletes', 'Training Guides', 'Loyalty Rewards', 'Blog'] }
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-brand-white font-black uppercase tracking-widest text-xs mb-8">{col.title}</h4>
                <ul className="space-y-4">
                  {col.items.map(item => (
                    <li key={item}>
                      <a href="#" className="text-brand-white/50 hover:text-brand-volt transition-colors text-sm uppercase font-medium tracking-wider">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-brand-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-brand-white/20 text-[10px] uppercase tracking-widest font-bold">
              © 2026 TITAN GAIN CORE INDUSTRIES. ALL RIGHTS RESERVED.
            </span>
            <div className="flex gap-6">
              <span className="text-brand-white/20 text-[10px] uppercase tracking-widest font-bold font-mono">STAY FOCUSED</span>
              <span className="text-brand-white/20 text-[10px] uppercase tracking-widest font-bold font-mono">TRAIN HARDER</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION ELEMENTS */}
      <GoalQuiz />
    </div>
  );
}

