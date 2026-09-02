export interface Group {
  id: string;
  name: string;
  description: string;
  topic: string;
  memberCount: number;
  postsToday: number;
  coverImage: string;
  recentMembers: {name: string;avatar: string;}[];
}

export const mockGroups: Group[] = [];