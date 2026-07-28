export interface Photo {
  id: string;
  url: string;
  category: 'wedding' | 'pre-wedding' | 'bride' | 'house-warming' | 'baby-shower' | 'candid-videography' | 'birthday' | 'album-designing';
  title: string;
  alt: string;
  description: string;
  location: string;
  date: string;
}

export interface Package {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular: boolean;
  tagline: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  link: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
}

export interface Testimonial {
  id: string;
  coupleName: string;
  location: string;
  text: string;
  rating: number;
  image: string;
  event: string;
  date: string;
}

export interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}
