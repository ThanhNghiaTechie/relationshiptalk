'use client';
import React, { useState } from 'react';
import FeedTabBar from './FeedTabBar';
import TopicFilterChips from './TopicFilterChips';
import PostCard from './PostCard';
import ExpertsPanel from './ExpertsPanel';
import GroupsPanel from './GroupsPanel';
import CreatePostButton from './CreatePostButton';
import TrendingSidebar from './TrendingSidebar';
import { mockPosts } from '../data/mockPosts';

export type FeedTab = 'Feed' | 'Experts' | 'Groups';

export default function CommunityFeedContent() {
  const [activeTab, setActiveTab] = useState<FeedTab>('Feed');
  const [activeTopic, setActiveTopic] = useState<string>('All');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set(['post-003']));
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set(['post-001']));

  const filteredPosts =
    activeTopic === 'All' ? mockPosts : mockPosts.filter((p) => p.topic === activeTopic);

  const handleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) next.delete(postId);
      else next.add(postId);
      return next;
    });
  };

  const handleSave = (postId: string) => {
    setSavedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) next.delete(postId);
      else next.add(postId);
      return next;
    });
  };

  return (
    <div className="flex gap-0 lg:gap-6 min-h-screen">
      {/* Main feed column */}
      <div className="flex-1 min-w-0">
        {/* Tab bar */}
        <FeedTabBar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Topic filter (Feed tab only) */}
        {activeTab === 'Feed' && (
          <TopicFilterChips activeTopic={activeTopic} onTopicChange={setActiveTopic} />
        )}

        {/* Content */}
        <div className="fade-in">
          {activeTab === 'Feed' && (
            <div className="px-4 lg:px-0 pb-4 space-y-4 pt-4">
              {filteredPosts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">💬</span>
                  </div>
                  <h3 className="text-lg font-700 text-foreground mb-1">
                    No posts in {activeTopic} yet
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Be the first to start a conversation in this topic. Your question might help
                    someone else too.
                  </p>
                  <button className="btn-primary mt-4">Start a Discussion</button>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <PostCard
                    key={`feed-${post.id}`}
                    post={post}
                    isLiked={likedPosts.has(post.id)}
                    isSaved={savedPosts.has(post.id)}
                    onLike={() => handleLike(post.id)}
                    onSave={() => handleSave(post.id)}
                  />
                ))
              )}
            </div>
          )}

          {activeTab === 'Experts' && <ExpertsPanel />}
          {activeTab === 'Groups' && <GroupsPanel />}
        </div>
      </div>

      {/* Desktop right sidebar */}
      <div className="hidden xl:block w-80 flex-shrink-0 pt-4">
        <TrendingSidebar />
      </div>

      {/* Floating create button (mobile) */}
      <CreatePostButton />
    </div>
  );
}
