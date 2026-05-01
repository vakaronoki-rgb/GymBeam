export type Goal = 'muscle' | 'fat-loss' | 'performance' | 'combat';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  category: string;
  goal: Goal;
  tags: string[];
  description: string;
  variants: string[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}
