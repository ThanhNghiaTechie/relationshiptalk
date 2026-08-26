'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

import TopicBadge from '@/components/ui/TopicBadge';
import { mockProfilePosts } from '../data/mockProfilePosts';

interface ProfilePostsTabProps {
  userId: string;
}

export default function ProfilePostsTab({ userId }: ProfilePostsTabProps) {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set(['pp-002']));

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (mockProfilePosts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-8">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <Icon name="DocumentTextIcon" size={28} variant="outline" className="text-muted-foreground" />
        </div>
        <h3 className="text-base font-700 text-foreground mb-1">No posts yet</h3>
        <p className="text-sm text-muted-foreground">
          Posts shared with the community will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {mockProfilePosts.map((post) => (
        <article key={`profile-post-${post.id}`} className="px-4 lg:px-6 py-4 hover:bg-muted/30 transition-all duration-150">
          {/* Post header */}
          <div className="flex items-start gap-2 mb-2">
            <TopicBadge topic={post.topic} />
            <span className="text-xs text-muted-foreground ml-auto flex-shrink-0">{post.timeAgo}</span>
          </div>

          {/* Post body */}
          {post.title && (
            <h3 className="text-sm font-700 text-foreground mb-1 leading-snug">{post.title}</h3>
          )}
          <p className="text-sm text-foreground leading-relaxed line-clamp-3">{post.body}</p>

          {/* Post image */}
          {post.image && (
            <div className="mt-3 rounded-xl overflow-hidden aspect-[16/9]">
              <AppImage
                src={post.image}
                alt={post.imageAlt ?? 'Post image'}
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Engagement */}
          <div className="flex items-center gap-4 mt-3">
            <button
              onClick={() => toggleLike(post.id)}
              className={`flex items-center gap-1.5 text-sm transition-all duration-150 ${
                likedPosts.has(post.id) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Icon
                name="HeartIcon"
                size={16}
                variant={likedPosts.has(post.id) ? 'solid' : 'outline'}
              />
              <span className="font-600 tabular-nums">
                {likedPosts.has(post.id) ? post.likes + 1 : post.likes}
              </span>
            </button>
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-all duration-150">
              <Icon name="ChatBubbleOvalLeftIcon" size={16} variant="outline" />
              <span className="font-600 tabular-nums">{post.comments}</span>
            </button>
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-all duration-150">
              <Icon name="BookmarkIcon" size={16} variant="outline" />
            </button>
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-all duration-150 ml-auto">
              <Icon name="ShareIcon" size={16} variant="outline" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}