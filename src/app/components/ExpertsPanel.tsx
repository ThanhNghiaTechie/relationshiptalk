'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RoleBadge from '@/components/ui/RoleBadge';
import TopicBadge from '@/components/ui/TopicBadge';
import { mockExperts } from '../data/mockExperts';

export default function ExpertsPanel() {
  const [followedExperts, setFollowedExperts] = useState<Set<string>>(new Set(['expert-002']));

  const toggleFollow = (id: string) => {
    setFollowedExperts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="px-4 lg:px-0 pt-4 pb-6">
      <div className="mb-4">
        <h2 className="text-base font-700 text-foreground">Verified Relationship Experts</h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          Get professional advice from licensed therapists & relationship coaches
        </p>
      </div>

      <div className="space-y-4">
        {mockExperts.map((expert) => (
          <div
            key={`expert-card-${expert.id}`}
            className="bg-card rounded-2xl border border-border p-4 card-hover shadow-card"
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="profile-avatar-ring w-14 h-14">
                  <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                    <AppImage
                      src={expert.avatar}
                      alt={`${expert.name} profile photo, ${expert.title}`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {expert.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-card rounded-full" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-700 text-foreground">{expert.name}</span>
                  <RoleBadge role="Expert" />
                  {expert.isOnline && (
                    <span className="text-xs text-green-600 font-500">Online now</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{expert.title}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Icon name="StarIcon" size={12} variant="solid" className="text-amber-400" />
                  <span className="text-xs font-600 text-foreground">{expert.rating}</span>
                  <span className="text-xs text-muted-foreground">({expert.reviewCount} reviews)</span>
                  <span className="text-xs text-muted-foreground mx-1">·</span>
                  <span className="text-xs text-muted-foreground">{expert.yearsExp} yrs exp</span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {expert.topics.map((topic) => (
                    <TopicBadge key={`expert-${expert.id}-topic-${topic}`} topic={topic} />
                  ))}
                </div>

                {/* Bio */}
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                  {expert.bio}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mt-2.5">
                  <div className="flex items-center gap-1">
                    <Icon name="UserGroupIcon" size={13} variant="outline" className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-500 tabular-nums">
                      {expert.followers.toLocaleString()} followers
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="ChatBubbleLeftRightIcon" size={13} variant="outline" className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-500 tabular-nums">
                      {expert.postsCount} posts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-border">
              <button
                onClick={() => toggleFollow(expert.id)}
                className={`flex-1 py-2 rounded-xl text-sm font-600 transition-all duration-150 ${
                  followedExperts.has(expert.id)
                    ? 'bg-muted text-muted-foreground hover:bg-border'
                    : 'btn-primary'
                }`}
              >
                {followedExperts.has(expert.id) ? 'Following' : 'Follow'}
              </button>
              <button className="btn-outline flex-1 py-2 rounded-xl text-sm font-600">
                Get Advice
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}