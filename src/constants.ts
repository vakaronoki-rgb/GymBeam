import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'TITAN WHEY ISOLATE',
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.9,
    reviewsCount: 1240,
    image: 'https://images.unsplash.com/photo-1593095191071-82b0fdd87bad?q=80&w=800&auto=format&fit=crop',
    category: 'Protein',
    goal: 'muscle',
    tags: ['Best Seller', '90% Protein'],
    description: 'Pure micro-filtered whey protein isolate for rapid muscle recovery.',
    variants: ['Double Chocolate', 'Madagascar Vanilla', 'Strawberry Rush']
  },
  {
    id: 'p2',
    name: 'MAX-IGNITE PRE-WORKOUT',
    price: 29.99,
    rating: 4.8,
    reviewsCount: 856,
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800&auto=format&fit=crop',
    category: 'Pre-workout',
    goal: 'performance',
    tags: ['Explosive Energy'],
    description: 'Scientifically formulated for skin-splitting pumps and laser focus.',
    variants: ['Blue Raspberry', 'Electric Lime']
  },
  {
    id: 'p3',
    name: 'TITAN COMBAT GLOVES 16OZ',
    price: 59.99,
    rating: 4.7,
    reviewsCount: 312,
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800&auto=format&fit=crop',
    category: 'Combat Sports Gear',
    goal: 'combat',
    tags: ['Elite Gear'],
    description: 'Premium leather boxing gloves with multi-layered shock absorption.',
    variants: ['Stealth Black', 'Carbon Fiber']
  },
  {
    id: 'p4',
    name: 'ELITE OMEGA-3 FISH OIL',
    price: 19.99,
    rating: 4.9,
    reviewsCount: 2100,
    image: 'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?q=80&w=800&auto=format&fit=crop',
    category: 'Vitamins & Health',
    goal: 'performance',
    tags: ['Daily Essentials'],
    description: 'High-potency EPA/DHA for joint health and inflammation control.',
    variants: ['90 Softgels']
  },
  {
    id: 'p5',
    name: 'KETO ENERGY BAR',
    price: 2.49,
    rating: 4.6,
    reviewsCount: 543,
    image: 'https://images.unsplash.com/photo-1622484211148-716499971bc3?q=80&w=800&auto=format&fit=crop',
    category: 'Snacks & Food',
    goal: 'fat-loss',
    tags: ['Low Carb', 'High Protein'],
    description: 'The perfect guilt-free snack for on-the-go energy.',
    variants: ['Peanut Butter', 'Salted Caramel']
  },
  {
    id: 'p6',
    name: 'VULCAN WEIGHT LIFTING BELT',
    price: 45.00,
    rating: 4.8,
    reviewsCount: 154,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    goal: 'muscle',
    tags: ['Heavy Duty'],
    description: 'Dual-prong leather belt for maximum core stability.',
    variants: ['Small', 'Medium', 'Large', 'XL']
  }
];

export const NAVIGATION = [
  { name: 'Protein', href: '#protein' },
  { name: 'Pre-workout', href: '#pre-workout' },
  { name: 'Vitamins', href: '#vitamins' },
  { name: 'Snacks', href: '#snacks' },
  { name: 'Combat', href: '#combat' },
  { name: 'Gear', href: '#gear' }
];

export const GOALS = [
  { id: 'muscle', name: 'Build Muscle', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?q=80&w=800&auto=format&fit=crop' },
  { id: 'fat-loss', name: 'Lose Fat', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop' },
  { id: 'performance', name: 'Peak Performance', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop' },
  { id: 'combat', name: 'Combat Training', image: 'https://images.unsplash.com/photo-1552072092-2f9c1623395c?q=80&w=800&auto=format&fit=crop' }
];
