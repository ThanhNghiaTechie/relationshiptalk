export interface ProfileReply {
  id: string;
  originalPostTitle: string;
  topic: string;
  text: string;
  timeAgo: string;
  likes: number;
}

export const mockProfileReplies: ProfileReply[] = [];