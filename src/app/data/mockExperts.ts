export interface Expert {
  id: string;
  name: string;
  avatar: string;
  title: string;
  topics: string[];
  rating: number;
  reviewCount: number;
  yearsExp: number;
  followers: number;
  postsCount: number;
  bio: string;
  isOnline: boolean;
  isVerified: boolean;
}

export const mockExperts: Expert[] = [];
