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
  id: 'user-dr-james',
  name: 'Dr. James Okafor',
  username: 'dr_james_okafor',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a0700-1787592547368.png",
  coverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_12a2a0700-1787592547368.png",
  bio: 'Licensed Marriage & Family Therapist. I help people break unhealthy patterns and build secure, fulfilling connections. Author & community contributor.',
  role: 'Expert',
  isVerified: true,
  location: 'New York, NY',
  joinedDate: 'March 2022',
  website: 'https://dr-okafor.com',
  postsCount: 184,
  followersCount: 8420,
  followingCount: 312,
  expertTopics: ['Relationship Advice', 'Communication', 'Self-Love', 'Attachment Theory', 'Emotionally Focused Therapy'],
  yearsExperience: 12,
  rating: 4.9,
  reviewCount: 312,
  helpedCount: 1840,
  achievements: [
  { emoji: '🏆', label: 'Top Expert', description: 'Ranked in top 5% of experts this month' },
  { emoji: '💬', label: '100+ Posts', description: 'Shared over 100 community posts' },
  { emoji: '❤️', label: 'Most Liked', description: 'Received 1000+ community likes' },
  { emoji: '⭐', label: '4.9 Rating', description: 'Maintained 4.9+ star rating' },
  { emoji: '🎓', label: 'Verified Pro', description: 'Verified licensed professional' },
  { emoji: '🤝', label: 'Helper', description: 'Helped 1000+ community members' }]

};