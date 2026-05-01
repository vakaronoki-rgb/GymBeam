import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function EmailCapture() {
  return (
    <section className="py-24 bg-brand-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-volt" />
      
      {/* Decorative text background */}
      <div className="absolute -bottom-10 -left-10 text-[12vw] font-black text-brand-white/5 uppercase select-none leading-none tracking-tighter italic">
        Titan Community
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-brand-white leading-none mb-6">
                JOIN THE <br />
                <span className="text-brand-volt italic">1% CLUB</span>
              </h2>
              <p className="text-brand-white/60 text-lg max-w-md leading-relaxed">
                Get exclusive drops, elite training protocols, and 15% off your first order. No spam, just pure gainz.
              </p>
            </motion.div>

            <ul className="space-y-4">
              {['15% First Order Discount', 'Early Access to New Drops', 'Weekly Science-Backed Guides'].map(item => (
                <li key={item} className="flex items-center gap-3 text-brand-white/80 font-bold uppercase text-sm tracking-wide">
                  <CheckCircle2 size={18} className="text-brand-volt" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-gray/50 p-8 md:p-12 border border-brand-white/10 rounded-sm"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] uppercase font-black tracking-widest text-brand-white/40 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="warrior@titangain.com"
                  className="w-full bg-brand-black border-2 border-brand-white/10 p-5 text-brand-white placeholder:text-brand-white/20 focus:border-brand-volt outline-none transition-colors rounded-sm"
                  required
                />
              </div>
              <button className="w-full bg-brand-volt text-brand-black p-5 font-black uppercase text-lg group flex items-center justify-center gap-3 hover:bg-brand-white transition-colors rounded-sm">
                Unlock 15% Discount <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-center text-[10px] text-brand-white/30 uppercase tracking-widest">
                By joining, you agree to our Terms and Growth Protocol.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
