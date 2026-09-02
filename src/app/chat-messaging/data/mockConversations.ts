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

export const mockConversations: Conversation[] = [];
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