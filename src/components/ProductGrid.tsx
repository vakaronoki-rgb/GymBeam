import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';
import { Sparkles } from 'lucide-react';

export default function ProductGrid() {
  // Just show first 4 as bestsellers for the homepage
  const bestSellers = PRODUCTS.slice(0, 4);

  return (
    <section className="py-24 bg-brand-light-gray px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-rush mb-2">
              <Sparkles size={16} className="fill-current" />
              <span className="text-xs font-black uppercase tracking-widest">Trending Now</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              Most Wanted <br />
              <span className="text-brand-black italic">Formulations</span>
            </h2>
          </div>
          <a href="#all" className="text-sm font-black uppercase tracking-[0.2em] border-b-2 border-brand-volt pb-1 hover:text-brand-volt transition-colors">
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
