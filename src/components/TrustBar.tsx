import { ShieldCheck, Truck, RotateCcw, Award } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: <Truck size={24} />, text: 'Express 24h Shipping' },
    { icon: <ShieldCheck size={24} />, text: 'Lab-Tested Purity' },
    { icon: <RotateCcw size={24} />, text: '30-Day Money Back' },
    { icon: <Award size={24} />, text: '100% Elite Quality' },
  ];

  return (
    <div className="bg-brand-gray py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 md:gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-brand-white/80 group">
            <div className="text-brand-volt group-hover:scale-110 transition-transform">{item.icon}</div>
            <span className="text-xs font-black uppercase tracking-widest">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
