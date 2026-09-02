import React from 'react';

import Icon from '@/components/ui/AppIcon';
import TopicBadge from '@/components/ui/TopicBadge';
import { mockProfileReplies } from '../data/mockProfileReplies';

interface ProfileRepliesTabProps {
  userId: string;
}

export default function ProfileRepliesTab({ userId }: ProfileRepliesTabProps) {
  if (mockProfileReplies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-8">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <Icon
            name="ChatBubbleOvalLeftIcon"
            size={28}
            variant="outline"
            className="text-muted-foreground"
          />
        </div>
        <h3 className="text-base font-700 text-foreground mb-1">No replies yet</h3>
        <p className="text-sm text-muted-foreground">
          Replies to community posts will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {mockProfileReplies.map((reply) => (
        <div
          key={`profile-reply-${reply.id}`}
          className="px-4 lg:px-6 py-4 hover:bg-muted/30 transition-all duration-150"
        >
          {/* Original post context */}
          <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
            <Icon name="ArrowUturnLeftIcon" size={12} variant="outline" />
            <span>Replied to</span>
            <span className="font-600 text-foreground truncate">{reply.originalPostTitle}</span>
            <TopicBadge topic={reply.topic} />
          </div>

          {/* Reply content */}
          <div className="bg-muted/40 rounded-xl px-3 py-2.5">
            <p className="text-sm text-foreground leading-relaxed">{reply.text}</p>
          </div>

          {/* Reply meta */}
          <div className="flex items-center gap-3 mt-2">
            <span className="text-xs text-muted-foreground">{reply.timeAgo}</span>
            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-all duration-150">
              <Icon name="HeartIcon" size={13} variant="outline" />
              <span className="tabular-nums">{reply.likes}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
