import { motion } from 'motion/react';
import { Star, ShoppingCart, Plus, Zap } from 'lucide-react';
import { Product } from '../types';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative bg-white border border-brand-light-gray h-full flex flex-col"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-brand-light-gray">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Tags Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.tags.map(tag => (
            <span key={tag} className="bg-brand-black text-brand-white text-[10px] font-black uppercase px-2 py-1 tracking-widest rounded-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-brand-volt text-brand-black py-3 font-bold uppercase text-xs flex items-center justify-center gap-2 hover:bg-brand-black hover:text-brand-volt transition-colors shadow-2xl">
            <Plus size={16} /> Quick Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={cn(
                  "fill-current",
                  i < Math.floor(product.rating) ? "text-brand-volt" : "text-brand-light-gray"
                )} 
              />
            ))}
          </div>
          <span className="text-[10px] font-bold text-gray-400">({product.reviewsCount})</span>
        </div>

        <h3 className="text-lg font-display font-black leading-tight mb-2 group-hover:text-brand-volt transition-colors uppercase">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-4 line-clamp-1">
          {product.category} • {product.goal.replace('-', ' ')}
        </p>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-display font-black">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through font-medium">${product.originalPrice}</span>
            )}
          </div>
          
          <div className="bg-brand-volt/10 text-brand-volt p-2 rounded-sm group-hover:bg-brand-volt group-hover:text-brand-black transition-colors">
            <ShoppingCart size={18} />
          </div>
        </div>
      </div>

      {/* Scarcity Trigger */}
      <div className="px-5 pb-4">
        {product.reviewsCount > 1000 && (
          <div className="flex items-center gap-1.5 py-2 border-t border-brand-light-gray uppercase">
            <Zap size={12} className="text-brand-rush fill-current" />
            <span className="text-[10px] font-black text-brand-rush tracking-tighter">Highly Recommended</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
