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

export const mockGroups: Group[] = [
{
  id: 'group-001',
  name: 'Healing After Heartbreak',
  description: 'A safe space to process breakups, share your story, and find support from people who truly understand what you\'re going through.',
  topic: 'Breakups',
  memberCount: 12430,
  postsToday: 47,
  coverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_149925d08-1764751224248.png",
  recentMembers: [
  { name: 'Priya', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=30&h=30&fit=crop&crop=face' },
  { name: 'Marcus', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=30&h=30&fit=crop&crop=face' },
  { name: 'Lena', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=30&h=30&fit=crop&crop=face' },
  { name: 'Sofía', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=30&h=30&fit=crop&crop=face' }]

},
{
  id: 'group-002',
  name: 'Self-Love & Inner Work',
  description: 'Daily prompts, exercises, and community accountability for people actively working on their relationship with themselves.',
  topic: 'Self-Love',
  memberCount: 9870,
  postsToday: 62,
  coverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_141f7be59-1778620110201.png",
  recentMembers: [
  { name: 'Nia', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=30&h=30&fit=crop&crop=face' },
  { name: 'Camille', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=30&h=30&fit=crop&crop=face' },
  { name: 'James', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=30&h=30&fit=crop&crop=face' },
  { name: 'Amara', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=30&h=30&fit=crop&crop=face' }]

},
{
  id: 'group-003',
  name: 'Long Distance Love',
  description: 'Tips, vent sessions, and success stories from couples navigating the challenges of long distance relationships across time zones.',
  topic: 'Long Distance',
  memberCount: 6240,
  postsToday: 28,
  coverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1896e7f49-1773590382426.png",
  recentMembers: [
  { name: 'Camille', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=30&h=30&fit=crop&crop=face' },
  { name: 'Marcus', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=30&h=30&fit=crop&crop=face' },
  { name: 'Priya', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=30&h=30&fit=crop&crop=face' },
  { name: 'Lena', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=30&h=30&fit=crop&crop=face' }]

},
{
  id: 'group-004',
  name: 'Modern Dating Struggles',
  description: 'From app fatigue to ghosting culture — honest conversations about what it\'s really like to date in 2024.',
  topic: 'Dating',
  memberCount: 18640,
  postsToday: 94,
  coverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1522edd24-1765380577224.png",
  recentMembers: [
  { name: 'Nia', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=30&h=30&fit=crop&crop=face' },
  { name: 'Sofía', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=30&h=30&fit=crop&crop=face' },
  { name: 'Kwame', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=30&h=30&fit=crop&crop=face' },
  { name: 'Emma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=30&h=30&fit=crop&crop=face' }]

},
{
  id: 'group-005',
  name: 'Navigating Family Dynamics',
  description: 'When family relationships complicate your romantic life — cultural pressures, disapproving parents, and family trauma.',
  topic: 'Family',
  memberCount: 4820,
  postsToday: 19,
  coverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14c267251-1765059688103.png",
  recentMembers: [
  { name: 'Priya', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=30&h=30&fit=crop&crop=face' },
  { name: 'James', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=30&h=30&fit=crop&crop=face' },
  { name: 'Amara', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=30&h=30&fit=crop&crop=face' },
  { name: 'Marcus', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=30&h=30&fit=crop&crop=face' }]

},
{
  id: 'group-006',
  name: 'Communication & Conflict Resolution',
  description: 'Practical techniques for having difficult conversations, fighting fair, and actually being heard by your partner.',
  topic: 'Communication',
  memberCount: 7130,
  postsToday: 33,
  coverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11bd585f9-1769171399386.png",
  recentMembers: [
  { name: 'Kwame', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=30&h=30&fit=crop&crop=face' },
  { name: 'Lena', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=30&h=30&fit=crop&crop=face' },
  { name: 'Nia', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=30&h=30&fit=crop&crop=face' },
  { name: 'Camille', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=30&h=30&fit=crop&crop=face' }]

}];