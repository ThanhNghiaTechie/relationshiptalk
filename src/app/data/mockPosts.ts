export type UserRole = 'Member' | 'Expert' | 'Admin';

export interface CommentPreview {
  id: string;
  author: string;
  avatar: string;
  text: string;
  timeAgo: string;
}

export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: UserRole;
    username: string;
  };
  topic: string;
  timeAgo: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  likes: number;
  comments: number;
  isAnonymous: boolean;
  isPinned?: boolean;
  commentPreviews?: CommentPreview[];
}

export const mockPosts: Post[] = [];
