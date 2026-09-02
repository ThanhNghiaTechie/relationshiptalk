export interface ProfilePost {
  id: string;
  topic: string;
  timeAgo: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  likes: number;
  comments: number;
}

export const mockProfilePosts: ProfilePost[] = [];