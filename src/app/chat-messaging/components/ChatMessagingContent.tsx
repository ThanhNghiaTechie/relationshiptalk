'use client';
import React, { useState } from 'react';
import ConversationList from './ConversationList';
import ChatWindow from './ChatWindow';
import { mockConversations } from '../data/mockConversations';

export default function ChatMessagingContent() {
  const [activeConvId, setActiveConvId] = useState<string>('conv-001');

  const activeConv = mockConversations?.find((c) => c?.id === activeConvId) ?? mockConversations?.[0];

  return (
    <div className="flex h-[calc(100vh-64px)] lg:h-[calc(100vh-0px)] overflow-hidden">
      {/* Conversation list */}
      <div
        className={`w-full lg:w-80 xl:w-96 flex-shrink-0 border-r border-border bg-card flex flex-col ${
          activeConvId ? 'hidden lg:flex' : 'flex'
        }`}
      >
        <ConversationList
          conversations={mockConversations}
          activeConvId={activeConvId}
          onSelect={setActiveConvId}
        />
      </div>

      {/* Chat window */}
      <div className={`flex-1 flex flex-col min-w-0 ${activeConvId ? 'flex' : 'hidden lg:flex'}`}>
        {activeConv ? (
          <ChatWindow
            conversation={activeConv}
            onBack={() => setActiveConvId('')}
          />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl">💬</span>
            </div>
            <h3 className="text-lg font-700 text-foreground mb-2">No conversation selected</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Choose a conversation from the list to start messaging
            </p>
          </div>
        )}
      </div>
    </div>
  );
}