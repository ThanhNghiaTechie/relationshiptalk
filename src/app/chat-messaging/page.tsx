import React from 'react';
import AppLayout from '@/components/AppLayout';
import ChatMessagingContent from './components/ChatMessagingContent';

export default function ChatMessagingPage() {
  return (
    <AppLayout activeRoute="/chat-messaging">
      <ChatMessagingContent />
    </AppLayout>
  );
}
