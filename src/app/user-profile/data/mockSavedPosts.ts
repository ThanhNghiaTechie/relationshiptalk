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

export const mockSavedPosts: SavedPost[] = [];