import { motion } from 'motion/react';
import { GOALS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function GoalGrid() {
  return (
    <section className="py-24 bg-brand-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Shop by <span className="text-brand-volt bg-brand-black px-4 py-1 italic">Your Goal</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto uppercase text-xs font-bold tracking-widest">Select your objective and we'll show you the science-backed protocol to get there.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {GOALS.map((goal, index) => (
            <motion.a
              key={goal.id}
              href={`#${goal.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer"
            >
              <img 
                src={goal.image} 
                alt={goal.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between group-hover:text-brand-volt transition-colors">
                  <h3 className="text-2xl font-display font-black text-brand-white uppercase leading-none">
                    {goal.name.split(' ').map(word => (
                      <span key={word} className="block">{word}</span>
                    ))}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-brand-white/30 flex items-center justify-center group-hover:bg-brand-volt group-hover:border-brand-volt group-hover:text-brand-black transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
