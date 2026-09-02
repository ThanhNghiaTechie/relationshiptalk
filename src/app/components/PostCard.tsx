'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RoleBadge from '@/components/ui/RoleBadge';
import TopicBadge from '@/components/ui/TopicBadge';
import type { Post } from '../data/mockPosts';

interface PostCardProps {
  post: Post;
  isLiked: boolean;
  isSaved: boolean;
  onLike: () => void;
  onSave: () => void;
}

export default function PostCard({ post, isLiked, isSaved, onLike, onSave }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);
  const [likeAnimating, setLikeAnimating] = useState(false);

  const handleLike = () => {
    onLike();
    setLikeAnimating(true);
    setTimeout(() => setLikeAnimating(false), 300);
  };

  return (
    <article className="bg-card rounded-2xl border border-border card-hover overflow-hidden shadow-card">
      {/* Post header */}
      <div className="flex items-start gap-3 p-4 pb-3">
        <div className="profile-avatar-ring flex-shrink-0 w-10 h-10">
          <div className="w-full h-full rounded-full overflow-hidden bg-muted">
            <AppImage
              src={post.author.avatar}
              alt={`${post.author.name} profile photo`}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-700 text-foreground">
              {post.isAnonymous ? 'Anonymous' : post.author.name}
            </span>
            {!post.isAnonymous && <RoleBadge role={post.author.role} />}
            {post.author.role === 'Expert' && !post.isAnonymous && (
              <span className="text-xs text-muted-foreground">in</span>
            )}
            <TopicBadge topic={post.topic} />
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            {post.author.role === 'Expert' && !post.isAnonymous && (
              <Icon
                name="BookOpenIcon"
                size={12}
                variant="solid"
                className="text-expert-color opacity-60"
              />
            )}
            <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
            {post.isAnonymous && (
              <span className="text-xs text-muted-foreground">· Anonymous post</span>
            )}
          </div>
        </div>

        <button className="p-1.5 rounded-lg hover:bg-muted transition-all duration-150 text-muted-foreground">
          <Icon name="EllipsisHorizontalIcon" size={18} variant="outline" />
        </button>
      </div>

      {/* Post body */}
      <div className="px-4 pb-3">
        {post.title && (
          <h2 className="text-base font-700 text-foreground mb-1.5 leading-snug">{post.title}</h2>
        )}
        <p className="text-sm text-foreground leading-relaxed">{post.body}</p>
      </div>

      {/* Media image */}
      {post.image && (
        <div className="w-full aspect-[4/3] overflow-hidden">
          <AppImage
            src={post.image}
            alt={post.imageAlt ?? 'Post image'}
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Engagement row */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-border">
        <div className="flex items-center gap-4">
          {/* Like */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 group transition-all duration-150 ${
              isLiked ? 'text-primary' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <Icon
              name="HeartIcon"
              size={20}
              variant={isLiked ? 'solid' : 'outline'}
              className={`transition-transform duration-150 ${likeAnimating ? 'pulse-like' : ''}`}
            />
            <span className="text-sm font-600 tabular-nums">
              {isLiked ? post.likes + 1 : post.likes}
            </span>
          </button>

          {/* Comment */}
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-all duration-150"
          >
            <Icon name="ChatBubbleOvalLeftIcon" size={20} variant="outline" />
            <span className="text-sm font-600 tabular-nums">{post.comments}</span>
          </button>

          {/* Bookmark */}
          <button
            onClick={onSave}
            className={`flex items-center gap-1.5 transition-all duration-150 ${
              isSaved ? 'text-primary' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <Icon name="BookmarkIcon" size={20} variant={isSaved ? 'solid' : 'outline'} />
          </button>
        </div>

        {/* Right side engagement */}
        <div className="flex items-center gap-3">
          {post.likes > 0 && (
            <div className="flex items-center gap-1">
              <Icon name="HeartIcon" size={14} variant="solid" className="text-primary" />
              <span className="text-xs text-muted-foreground font-500 tabular-nums">
                {post.likes}
              </span>
            </div>
          )}
          {post.comments > 0 && (
            <div className="flex items-center gap-1">
              <Icon
                name="ChatBubbleOvalLeftIcon"
                size={14}
                variant="solid"
                className="text-blue-400"
              />
              <span className="text-xs text-muted-foreground font-500 tabular-nums">
                {post.comments}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Inline comments preview */}
      {showComments && post.commentPreviews && (
        <div className="border-t border-border px-4 py-3 space-y-3 bg-muted/30">
          {post.commentPreviews.map((comment) => (
            <div key={`comment-${post.id}-${comment.id}`} className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-muted overflow-hidden flex-shrink-0">
                <AppImage
                  src={comment.avatar}
                  alt={`${comment.author} avatar`}
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 bg-card rounded-xl px-3 py-2">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-700 text-foreground">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">{comment.timeAgo}</span>
                </div>
                <p className="text-xs text-foreground leading-relaxed">{comment.text}</p>
              </div>
            </div>
          ))}
          {/* Comment input */}
          <div className="flex gap-2 pt-1">
            <div className="w-7 h-7 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
              <Icon name="UserIcon" size={14} variant="solid" className="text-primary" />
            </div>
            <input
              type="text"
              placeholder="Add a thoughtful reply..."
              className="flex-1 bg-card border border-border rounded-xl px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
        </div>
      )}
    </article>
  );
}
