'use client';
import React, { useEffect, useState } from 'react';
import FeedTabBar from './FeedTabBar';
import TopicFilterChips from './TopicFilterChips';
import PostCard from './PostCard';
import ExpertsPanel from './ExpertsPanel';
import GroupsPanel from './GroupsPanel';
import CreatePostButton from './CreatePostButton';
import TrendingSidebar from './TrendingSidebar';
import type { Post } from '../data/mockPosts';
import { createClient } from '@/lib/supabase/client';
import { mapPostRow, postSelect } from '@/lib/posts';

export type FeedTab = 'Feed' | 'Experts' | 'Groups';

export default function CommunityFeedContent() {
  const [activeTab, setActiveTab] = useState<FeedTab>('Feed');
  const [activeTopic, setActiveTopic] = useState<string>('All');
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<string>>(new Set());
  const [supabase] = useState(() => createClient());

  useEffect(() => {
    let mounted = true;
    void supabase
      .from('posts')
      .select(postSelect)
      .order('created_at', { ascending: false })
      .limit(50)
      .then(({ data, error: fetchError }) => {
        if (!mounted) return;
        if (fetchError) {
          if (process.env.NODE_ENV !== 'production')
            console.error('Fetch posts error:', fetchError);
          setError('Không thể tải bài viết. Vui lòng thử lại.');
        } else {
          setPosts((data || []).map(mapPostRow));
        }
        setIsLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [supabase]);

  const filteredPosts =
    activeTopic === 'All' ? posts : posts.filter((p) => p.topic === activeTopic);

  const handleCreated = (post: Post) => setPosts((current) => [post, ...current]);

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
              {isLoading ? (
                <p className="py-20 text-center text-sm text-muted-foreground">
                  Đang tải bài viết...
                </p>
              ) : error ? (
                <p className="py-20 text-center text-sm text-red-600">{error}</p>
              ) : filteredPosts.length === 0 ? (
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
      <CreatePostButton onCreated={handleCreated} />
    </div>
  );
}
