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

export const mockPosts: Post[] = [
{
  id: 'post-001',
  author: {
    name: 'Emma Hartley',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    role: 'Expert',
    username: 'emma_hartley'
  },
  topic: 'Relationship Advice',
  timeAgo: '14 hrs ago',
  title: 'Is your need for validation keeping you stuck?',
  body: '"The demanding need for validation and affection can be stifling to most partners and often results in significant relationship ruptures over time." How has the need for validation affected your own relationships?',
  image: "https://images.unsplash.com/photo-1675518189080-4a99bc60b875",
  imageAlt: 'Person standing on bright yellow tiled floor wearing white dress and sneakers, casting a shadow',
  likes: 43,
  comments: 5,
  isAnonymous: false,
  isPinned: true,
  commentPreviews: [
  {
    id: 'c-001-1',
    author: 'Priya Menon',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b9220737-1765221499200.png",
    text: 'This resonates so deeply. I realized I was constantly seeking reassurance and it pushed my ex away. Working on it with a therapist now.',
    timeAgo: '12 hrs ago'
  },
  {
    id: 'c-001-2',
    author: 'Marcus Webb',
    avatar: "https://images.unsplash.com/photo-1618987892200-a2f7a3d05529",
    text: 'I think social media has made this so much worse for our generation. The dopamine hits from likes translate directly into relationship behavior.',
    timeAgo: '10 hrs ago'
  }]

},
{
  id: 'post-002',
  author: {
    name: 'Anonymous',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face',
    role: 'Member',
    username: 'anon'
  },
  topic: 'Breakups',
  timeAgo: '2 hrs ago',
  title: '',
  body: 'It\'s been 6 months since my breakup and I still check his Instagram every single day. I know it\'s not healthy but I can\'t stop. Has anyone managed to break this habit? What actually worked for you?',
  likes: 87,
  comments: 22,
  isAnonymous: true,
  commentPreviews: [
  {
    id: 'c-002-1',
    author: 'Sofía Reyes',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12b863414-1780844129710.png",
    text: 'I blocked and muted everything for 90 days. It felt impossible at first but by week 3 the urge was completely gone. Cold turkey is the only way.',
    timeAgo: '1 hr ago'
  }]

},
{
  id: 'post-003',
  author: {
    name: 'Dr. James Okafor',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    role: 'Expert',
    username: 'dr_okafor'
  },
  topic: 'Self-Love',
  timeAgo: '1 day ago',
  title: '3 signs you\'re in a relationship with your potential, not your partner',
  body: 'When we stay in relationships hoping someone will become who we need them to be, we\'re not in a relationship with them — we\'re in a relationship with our imagination. Here are 3 signs this is happening to you, and what to do about it.',
  likes: 214,
  comments: 38,
  isAnonymous: false,
  commentPreviews: [
  {
    id: 'c-003-1',
    author: 'Lena Fischer',
    avatar: "https://images.unsplash.com/photo-1513023071674-5da7b1a5c821",
    text: 'This just described my entire last 2 years. I kept thinking "once he gets his life together..." Thank you for this.',
    timeAgo: '22 hrs ago'
  }]

},
{
  id: 'post-004',
  author: {
    name: 'Nia Thompson',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face',
    role: 'Member',
    username: 'nia_t'
  },
  topic: 'Dating',
  timeAgo: '3 hrs ago',
  title: '',
  body: 'Dating app fatigue is real. I\'ve been on 14 first dates in the last 3 months and every single conversation starts the same way. How do you keep it fresh and actually connect with someone through an app?',
  likes: 56,
  comments: 14,
  isAnonymous: false,
  commentPreviews: []
},
{
  id: 'post-005',
  author: {
    name: 'Anonymous',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    role: 'Member',
    username: 'anon'
  },
  topic: 'Family',
  timeAgo: '5 hrs ago',
  title: '',
  body: 'My parents disapprove of my partner because he\'s from a different cultural background. We\'ve been together 3 years and I\'m at a breaking point. Has anyone navigated this? Did it ever get better?',
  likes: 132,
  comments: 47,
  isAnonymous: true,
  commentPreviews: []
},
{
  id: 'post-006',
  author: {
    name: 'Camille Dubois',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face',
    role: 'Member',
    username: 'camille_d'
  },
  topic: 'Long Distance',
  timeAgo: '8 hrs ago',
  title: 'Long distance for 18 months — what actually kept us going',
  body: 'We survived 18 months of long distance (London ↔ Sydney, 11 hour time difference) and just moved in together last week. Here\'s what actually worked beyond the usual advice.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16683738c-1771044085602.png",
  imageAlt: 'Two people holding hands across a table with warm lighting, representing connection',
  likes: 198,
  comments: 63,
  isAnonymous: false,
  commentPreviews: []
},
{
  id: 'post-007',
  author: {
    name: 'Dr. Amara Singh',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
    role: 'Expert',
    username: 'dr_amara'
  },
  topic: 'Communication',
  timeAgo: '6 hrs ago',
  title: 'Why "we need to talk" triggers a fight before it starts',
  body: 'The phrase "we need to talk" activates the amygdala before the conversation begins. Your partner\'s nervous system is in fight-or-flight before you\'ve said anything. Here\'s what to say instead, and why it works neurologically.',
  likes: 327,
  comments: 41,
  isAnonymous: false
}];