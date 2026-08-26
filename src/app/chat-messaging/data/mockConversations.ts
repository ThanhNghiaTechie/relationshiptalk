export type UserRole = 'Member' | 'Expert' | 'Admin';

export interface Message {
  id: string;
  senderId: 'me' | string;
  text?: string;
  image?: string;
  time: string;
  isRead: boolean;
}

export interface ConversationParticipant {
  id: string;
  name: string;
  avatar: string;
  role: UserRole;
  isOnline: boolean;
  lastSeen: string;
  specialization?: string;
  sessionRate?: string;
  rating?: number;
}

export interface Conversation {
  id: string;
  participant: ConversationParticipant;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isTyping: boolean;
  messages: Message[];
}

export const mockConversations: Conversation[] = [
{
  id: 'conv-001',
  participant: {
    id: 'expert-001',
    name: 'Dr. James Okafor',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1286ef916-1768773259495.png",
    role: 'Expert',
    isOnline: true,
    lastSeen: '2 min ago',
    specialization: 'Marriage & Family Therapy',
    sessionRate: '$85',
    rating: 4.9
  },
  lastMessage: 'That\'s a really healthy perspective. Let\'s explore that further.',
  lastMessageTime: '2m ago',
  unreadCount: 2,
  isTyping: true,
  messages: [
  {
    id: 'msg-001-1',
    senderId: 'expert-001',
    text: 'Hi! I saw your post in the community about validation patterns. I think there\'s a lot we can unpack there. How long have you been experiencing this?',
    time: '10:14 AM',
    isRead: true
  },
  {
    id: 'msg-001-2',
    senderId: 'me',
    text: 'Honestly for most of my adult relationships. It started when I was a teenager and I just never really addressed it.',
    time: '10:18 AM',
    isRead: true
  },
  {
    id: 'msg-001-3',
    senderId: 'expert-001',
    text: 'That makes a lot of sense. Validation-seeking that begins in adolescence often ties back to attachment patterns formed in early childhood. Are your parents emotionally available when you were growing up?',
    time: '10:21 AM',
    isRead: true
  },
  {
    id: 'msg-001-4',
    senderId: 'me',
    text: 'My dad was pretty distant. My mom tried but was dealing with her own stuff. I think I learned that love was something you had to earn.',
    time: '10:25 AM',
    isRead: true
  },
  {
    id: 'msg-001-5',
    senderId: 'expert-001',
    text: '"Love is something you have to earn" — that\'s a core belief that will show up in every romantic relationship until it\'s challenged. The good news is that it absolutely can be rewired with the right work.',
    time: '10:28 AM',
    isRead: true
  },
  {
    id: 'msg-001-6',
    senderId: 'me',
    text: 'I\'ve been trying to work on it. I\'ve started journaling and I\'m trying to notice when I\'m seeking reassurance vs genuinely connecting.',
    time: '10:31 AM',
    isRead: true
  },
  {
    id: 'msg-001-7',
    senderId: 'expert-001',
    text: 'That\'s a really healthy perspective. Let\'s explore that further.',
    time: '10:33 AM',
    isRead: false
  }]

},
{
  id: 'conv-002',
  participant: {
    id: 'member-001',
    name: 'Priya Menon',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&h=80&fit=crop&crop=face',
    role: 'Member',
    isOnline: true,
    lastSeen: 'now'
  },
  lastMessage: 'omg same!! did you try the 90 day thing?',
  lastMessageTime: '15m ago',
  unreadCount: 1,
  isTyping: false,
  messages: [
  {
    id: 'msg-002-1',
    senderId: 'me',
    text: 'I saw your comment on the breakup post — the 90 day block suggestion. Did that actually work for you?',
    time: '9:45 AM',
    isRead: true
  },
  {
    id: 'msg-002-2',
    senderId: 'member-001',
    text: 'YES. it was brutal for the first two weeks but by week 4 I genuinely stopped thinking about him every hour. The key for me was filling the time with actual plans, not just "staying busy"',
    time: '9:52 AM',
    isRead: true
  },
  {
    id: 'msg-002-3',
    senderId: 'me',
    text: 'I keep finding excuses to check. Like "I just want to make sure he\'s ok" but I know that\'s not really it',
    time: '9:58 AM',
    isRead: true
  },
  {
    id: 'msg-002-4',
    senderId: 'member-001',
    text: 'omg same!! did you try the 90 day thing?',
    time: '10:02 AM',
    isRead: false
  }]

},
{
  id: 'conv-003',
  participant: {
    id: 'expert-002',
    name: 'Dr. Amara Singh',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_164993077-1772241688024.png",
    role: 'Expert',
    isOnline: false,
    lastSeen: '3 hrs ago',
    specialization: 'Clinical Psychology & Boundaries',
    sessionRate: '$95',
    rating: 4.8
  },
  lastMessage: 'I\'ll send you the worksheet before our next session.',
  lastMessageTime: '3h ago',
  unreadCount: 0,
  isTyping: false,
  messages: [
  {
    id: 'msg-003-1',
    senderId: 'expert-002',
    text: 'Following up on our conversation about boundary-setting with your mother — how did the conversation go?',
    time: 'Yesterday',
    isRead: true
  },
  {
    id: 'msg-003-2',
    senderId: 'me',
    text: 'Better than expected honestly. She got defensive at first but I stayed calm like we practiced and she eventually came around to listening.',
    time: 'Yesterday',
    isRead: true
  },
  {
    id: 'msg-003-3',
    senderId: 'expert-002',
    text: 'That is excellent progress. Staying regulated while she became dysregulated is exactly the skill we\'ve been building. That takes real practice to execute in the moment.',
    time: '8:30 AM',
    isRead: true
  },
  {
    id: 'msg-003-4',
    senderId: 'expert-002',
    text: 'I\'ll send you the worksheet before our next session.',
    time: '8:32 AM',
    isRead: true
  }]

},
{
  id: 'conv-004',
  participant: {
    id: 'member-002',
    name: 'Marcus Webb',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    role: 'Member',
    isOnline: false,
    lastSeen: '1 day ago'
  },
  lastMessage: 'Let me know how it goes with her',
  lastMessageTime: '1d ago',
  unreadCount: 0,
  isTyping: false,
  messages: [
  {
    id: 'msg-004-1',
    senderId: 'member-002',
    text: 'Dude I read your comment about social media and validation and it literally described my last relationship perfectly',
    time: '2 days ago',
    isRead: true
  },
  {
    id: 'msg-004-2',
    senderId: 'me',
    text: 'Right? It\'s wild how much of our relationship behavior is just conditioned dopamine-seeking. My therapist calls it "emotional outsourcing"',
    time: '2 days ago',
    isRead: true
  },
  {
    id: 'msg-004-3',
    senderId: 'member-002',
    text: 'Let me know how it goes with her',
    time: '1 day ago',
    isRead: true
  }]

},
{
  id: 'conv-005',
  participant: {
    id: 'member-003',
    name: 'Camille Dubois',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face',
    role: 'Member',
    isOnline: true,
    lastSeen: 'now'
  },
  lastMessage: 'The timezone thing is the hardest part honestly',
  lastMessageTime: '2d ago',
  unreadCount: 0,
  isTyping: false,
  messages: [
  {
    id: 'msg-005-1',
    senderId: 'member-003',
    text: 'I read your comment on my long distance post — what was the hardest part of the 11 hour time difference for you two?',
    time: '2 days ago',
    isRead: true
  },
  {
    id: 'msg-005-2',
    senderId: 'me',
    text: 'Honestly the async communication. You send something vulnerable and then wait 8 hours for a reply. I had to learn to self-soothe instead of spiraling.',
    time: '2 days ago',
    isRead: true
  },
  {
    id: 'msg-005-3',
    senderId: 'member-003',
    text: 'The timezone thing is the hardest part honestly',
    time: '2 days ago',
    isRead: true
  }]

}];