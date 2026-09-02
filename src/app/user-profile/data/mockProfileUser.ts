export type UserRole = 'Member' | 'Expert' | 'Admin';

export interface Achievement {
  emoji: string;
  label: string;
  description: string;
}

export interface ProfileUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
  coverImage?: string;
  bio: string;
  role: UserRole;
  isVerified: boolean;
  location: string;
  joinedDate: string;
  website?: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  expertTopics?: string[];
  yearsExperience?: number;
  rating?: number;
  reviewCount?: number;
  helpedCount?: number;
  achievements: Achievement[];
}

export const mockProfileUser: ProfileUser = {
  id: 'user-empty',
  name: '',
  username: '',
  avatar: '',
  bio: '',
  role: 'Member',
  isVerified: false,
  location: '',
  joinedDate: '',
  postsCount: 0,
  followersCount: 0,
  followingCount: 0,
  achievements: [],
};
