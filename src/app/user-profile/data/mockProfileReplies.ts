export interface ProfileReply {
  id: string;
  originalPostTitle: string;
  topic: string;
  text: string;
  timeAgo: string;
  likes: number;
}

export const mockProfileReplies: ProfileReply[] = [
  {
    id: 'pr-001',
    originalPostTitle: 'Dating app fatigue is real — 14 first dates in 3 months',
    topic: 'Dating',
    text: 'Dating app fatigue is very real and well-documented. What you\'re experiencing is called "paradox of choice" — the more options we have, the less satisfied we feel with any of them. Try limiting yourself to one app and going deeper rather than wider.',
    timeAgo: '4 hrs ago',
    likes: 28,
  },
  {
    id: 'pr-002',
    originalPostTitle: 'My parents disapprove of my partner (different culture)',
    topic: 'Family',
    text: 'This is one of the most painful situations I work with. The key is not to put your partner in the middle, and not to triangulate your parents into your relationship decisions. Your relationship is yours. Your family relationship is separate.',
    timeAgo: '1 day ago',
    likes: 54,
  },
  {
    id: 'pr-003',
    originalPostTitle: 'I still check his Instagram 6 months after breakup',
    topic: 'Breakups',
    text: 'What you\'re describing is called "checking behavior" and it\'s a way of maintaining an attachment bond that your brain hasn\'t fully let go of yet. It\'s not weakness — it\'s biology. A full block for 90 days genuinely works because it removes the dopamine loop.',
    timeAgo: '2 days ago',
    likes: 93,
  },
  {
    id: 'pr-004',
    originalPostTitle: 'Long distance for 18 months — what kept us going',
    topic: 'Long Distance',
    text: 'Beautifully written. The research on long-distance relationships actually shows they can have higher emotional intimacy than geographically close couples — because you have to be intentional about communication. Congratulations on making it work.',
    timeAgo: '1 week ago',
    likes: 41,
  },
];