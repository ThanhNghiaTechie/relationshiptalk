'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import TopicBadge from '@/components/ui/TopicBadge';
import RoleBadge from '@/components/ui/RoleBadge';
import { mockSavedPosts } from '../data/mockSavedPosts';

export default function ProfileSavedTab() {
  if (mockSavedPosts?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-8">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <Icon name="BookmarkIcon" size={28} variant="outline" className="text-muted-foreground" />
        </div>
        <h3 className="text-base font-700 text-foreground mb-1">No saved posts yet</h3>
        <p className="text-sm text-muted-foreground">
          Bookmark posts from the community feed to save them here for later.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {mockSavedPosts?.map((post) => (
        <article key={`saved-post-${post?.id}`} className="px-4 lg:px-6 py-4 hover:bg-muted/30 transition-all duration-150">
          <div className="flex items-start gap-3">
            {/* Author avatar */}
            <div className="w-8 h-8 rounded-full overflow-hidden bg-muted flex-shrink-0">
              <AppImage
                src={post?.author?.avatar}
                alt={`${post?.author?.name} avatar`}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-sm font-700 text-foreground">{post?.author?.name}</span>
                <RoleBadge role={post?.author?.role} />
                <TopicBadge topic={post?.topic} />
                <span className="text-xs text-muted-foreground ml-auto">{post?.timeAgo}</span>
              </div>
              {post?.title && (
                <h3 className="text-sm font-700 text-foreground mb-1 leading-snug">{post?.title}</h3>
              )}
              <p className="text-sm text-foreground leading-relaxed line-clamp-2">{post?.body}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon name="HeartIcon" size={13} variant="outline" />
                  <span className="tabular-nums">{post?.likes}</span>
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon name="ChatBubbleOvalLeftIcon" size={13} variant="outline" />
                  <span className="tabular-nums">{post?.comments}</span>
                </span>
                <button className="ml-auto flex items-center gap-1 text-xs text-primary hover:underline">
                  <Icon name="BookmarkSlashIcon" size={13} variant="outline" />
                  Unsave
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}