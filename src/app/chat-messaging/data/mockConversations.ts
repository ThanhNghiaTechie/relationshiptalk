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
