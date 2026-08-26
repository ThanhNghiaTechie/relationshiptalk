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

export const mockProfilePosts: ProfilePost[] = [
{
  id: 'pp-001',
  topic: 'Communication',
  timeAgo: '6 hrs ago',
  title: 'Why "we need to talk" triggers a fight before it starts',
  body: 'The phrase "we need to talk" activates the amygdala before the conversation begins. Your partner\'s nervous system is in fight-or-flight before you\'ve said anything. Here\'s what to say instead, and why it works neurologically.',
  likes: 327,
  comments: 41
},
{
  id: 'pp-002',
  topic: 'Self-Love',
  timeAgo: '1 day ago',
  title: '3 signs you\'re in a relationship with your potential, not your partner',
  body: 'When we stay in relationships hoping someone will become who we need them to be, we\'re not in a relationship with them — we\'re in a relationship with our imagination. Here are 3 signs this is happening to you, and what to do about it.',
  likes: 214,
  comments: 38
},
{
  id: 'pp-003',
  topic: 'Relationship Advice',
  timeAgo: '3 days ago',
  title: 'Is your need for validation keeping you stuck?',
  body: '"The demanding need for validation and affection can be stifling to most partners and often results in significant relationship ruptures over time." How has the need for validation affected your own relationships?',
  image: "https://images.unsplash.com/photo-1527942469065-9a8f7068d1fd",
  imageAlt: 'Person standing on bright yellow tiled floor wearing white dress and sneakers',
  likes: 43,
  comments: 5
},
{
  id: 'pp-004',
  topic: 'Relationship Advice',
  timeAgo: '1 week ago',
  title: 'The anxious-avoidant trap: why opposites attract and then repel',
  body: 'Anxious and avoidant attachment styles are drawn to each other because they recreate familiar childhood dynamics. The anxious partner chases; the avoidant withdraws. Both get their beliefs confirmed. Here\'s how to break the cycle.',
  likes: 489,
  comments: 72
},
{
  id: 'pp-005',
  topic: 'Boundaries',
  timeAgo: '2 weeks ago',
  title: 'Boundaries aren\'t walls. They\'re bridges.',
  body: 'The most common misconception about boundaries is that they push people away. In reality, clearly communicated boundaries are what make genuine intimacy possible. Without them, resentment builds silently until it erupts.',
  likes: 631,
  comments: 89
}];