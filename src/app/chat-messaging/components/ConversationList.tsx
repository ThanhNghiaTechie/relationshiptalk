'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RoleBadge from '@/components/ui/RoleBadge';
import type { Conversation } from '../data/mockConversations';

interface ConversationListProps {
  conversations: Conversation[];
  activeConvId: string;
  onSelect: (id: string) => void;
}

export default function ConversationList({
  conversations,
  activeConvId,
  onSelect,
}: ConversationListProps) {
  const [search, setSearch] = useState('');

  const filtered = conversations.filter(
    (c) =>
      c.participant.name.toLowerCase().includes(search.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-border">
        <h2 className="text-lg font-700 text-foreground mb-3">Messages</h2>
        <div className="relative">
          <Icon
            name="MagnifyingGlassIcon"
            size={16}
            variant="outline"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations..."
            className="w-full bg-input border border-border rounded-xl pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex border-b border-border px-4">
        {['All', 'Experts', 'Members'].map((tab) => (
          <button
            key={`conv-tab-${tab}`}
            className="flex-1 py-3 text-xs font-600 text-muted-foreground hover:text-foreground transition-all duration-150"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Conversation items */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center px-4">
            <Icon
              name="ChatBubbleLeftRightIcon"
              size={36}
              variant="outline"
              className="text-muted-foreground mb-3"
            />
            <p className="text-sm font-600 text-foreground">No conversations found</p>
            <p className="text-xs text-muted-foreground mt-1">Try a different search term</p>
          </div>
        ) : (
          filtered.map((conv) => (
            <button
              key={`conv-item-${conv.id}`}
              onClick={() => onSelect(conv.id)}
              className={`w-full flex items-start gap-3 px-4 py-3.5 transition-all duration-150 border-b border-border/50 text-left ${
                activeConvId === conv.id
                  ? 'bg-primary/8 border-l-2 border-l-primary'
                  : 'hover:bg-muted/50'
              }`}
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-muted">
                  <AppImage
                    src={conv.participant.avatar}
                    alt={`${conv.participant.name} avatar`}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                {conv.participant.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-card rounded-full" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-sm font-700 text-foreground truncate">
                      {conv.participant.name}
                    </span>
                    <RoleBadge role={conv.participant.role} size="sm" />
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                    {conv.lastMessageTime}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p
                    className={`text-xs truncate flex-1 ${
                      conv.unreadCount > 0 ? 'font-600 text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {conv.isTyping ? (
                      <span className="text-primary font-500 italic">typing...</span>
                    ) : (
                      conv.lastMessage
                    )}
                  </p>
                  {conv.unreadCount > 0 && (
                    <span className="ml-2 bg-primary text-primary-foreground text-xs font-700 rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5 flex-shrink-0">
                      {conv.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))
        )}
      </div>

      {/* New message button */}
      <div className="p-4 border-t border-border">
        <button className="btn-primary w-full flex items-center justify-center gap-2">
          <Icon name="PencilSquareIcon" size={16} variant="outline" />
          New Message
        </button>
      </div>
    </div>
  );
}
