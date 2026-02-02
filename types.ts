
export interface User {
  id: string;
  name: string;
  gender: string;
  age: number;
  avatar?: string;
}

export interface Review {
  author: string;
  text: string;
  staffRating: number;
  locationRating: number;
  overallRating: number;
  date?: string;
}

export interface DiscountOffer {
  title: string;
  description: string;
  code?: string;
  expiry?: string;
}

export interface NutritionalInfo {
  calories: number;
  protein: number; // Percentage or grams
  carbs: number;
  fats: number;
  healthLabel: string;
}

export interface PopularDish {
  name: string;
  price?: string;
  calories?: number;
  image?: string;
  nutrition?: NutritionalInfo;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  description: string;
  address: string;
  phone?: string;
  distance?: string;
  matchScore: number;
  whyMatch: string;
  tasteSignature?: string;
  chefTastingNotes?: string;
  comfortScore: number; 
  comfortDescription?: string;
  ageSuitability?: string;
  flavorProfile?: {
    spicy: number;
    sweet: number;
    umami: number;
    tangy: number;
    salty: number;
    bitter: number;
    smoky: number;
  };
  textureMeter?: {
    crunchy: number;
    creamy: number;
    chewy: number;
    tender: number;
  };
  signatureDishNutrition?: NutritionalInfo;
  matchBreakdown?: {
    taste: number;
    value: number;
    health: number;
    vibe: number;
  };
  mapsUrl?: string;
  swiggyUrl?: string;
  zomatoUrl?: string;
  magicpinUrl?: string;
  eatsureUrl?: string;
  orderUrl?: string;
  image?: string;
  gallery?: string[];
  estimatedDeliveryTime?: string;
  deliveryFee?: string;
  deliveryStatus?: 'Available' | 'Busy' | 'Closed';
  location?: {
    lat: number;
    lng: number;
  };
  vibeTags?: string[];
  popularDishes?: PopularDish[];
  healthScore?: number;
  healthReview?: string;
  discountOffer?: DiscountOffer;
  features?: string[];
  bestPlatform?: string;
}

export interface Booking {
  id: string;
  restaurantName: string;
  date: string;
  time: string;
  guests: number;
  status: 'confirmed' | 'pending';
}

export interface TasteProfile {
  dietaryPreferences: string[];
  favoriteFlavors: string[]; 
  preferredTextures: string[]; 
  preferredCuisines: string[];
  features: string[];
  atmosphere: string;
  diningTheme: string;
  budget: string;
  customNotes: string;
  occasion: 'Party' | 'Date' | 'Family' | 'Solo' | 'Work';
  maxDistance: string;
  ageGroup: 'Kids' | 'Teen' | 'Gen Z' | 'Adult' | 'Senior';
  comfortPreference: 'Cozy' | 'Vibrant' | 'Luxury' | 'Casual';
  healthGoal: 'Weight Loss' | 'Muscle Gain' | 'Balanced' | 'Keto' | 'Detox';
  spiceTolerance: 'Mild' | 'Medium' | 'Hot' | 'Insane';
  showDealsOnly?: boolean;
  isHealthyScout?: boolean;
  onlineOrderingOnly?: boolean;
  deliveryPriority?: 'Fastest' | 'Cheapest' | 'Quality';
}

export interface PalateProfile {
  archetype: string;
  description: string;
  traitTags: string[];
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}
