export type UserRole = 'Member' | 'Expert' | 'Admin';

export interface SavedPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: UserRole;
  };
  topic: string;
  timeAgo: string;
  title: string;
  body: string;
  likes: number;
  comments: number;
}

export const mockSavedPosts: SavedPost[] = [
  {
    id: 'sp-001',
    author: {
      name: 'Camille Dubois',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face',
      role: 'Member',
    },
    topic: 'Long Distance',
    timeAgo: '8 hrs ago',
    title: 'Long distance for 18 months — what actually kept us going',
    body: 'We survived 18 months of long distance (London ↔ Sydney, 11 hour time difference) and just moved in together last week. Here\'s what actually worked beyond the usual advice.',
    likes: 198,
    comments: 63,
  },
  {
    id: 'sp-002',
    author: {
      name: 'Dr. Amara Singh',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face',
      role: 'Expert',
    },
    topic: 'Boundaries',
    timeAgo: '3 days ago',
    title: 'The 5 types of boundaries every relationship needs',
    body: 'Most people think of boundaries as saying "no." But boundaries are actually a complete communication system that covers emotional, physical, time, intellectual, and digital space. Here\'s how each one works in practice.',
    likes: 412,
    comments: 58,
  },
  {
    id: 'sp-003',
    author: {
      name: 'Nia Thompson',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&h=60&fit=crop&crop=face',
      role: 'Member',
    },
    topic: 'Dating',
    timeAgo: '5 days ago',
    title: '',
    body: 'Dating app fatigue is real. I\'ve been on 14 first dates in the last 3 months and every single conversation starts the same way. How do you keep it fresh and actually connect with someone through an app?',
    likes: 56,
    comments: 14,
  },
];