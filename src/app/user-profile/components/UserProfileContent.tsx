'use client';
import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import ProfileTabs from './ProfileTabs';
import ProfilePostsTab from './ProfilePostsTab';
import ProfileRepliesTab from './ProfileRepliesTab';
import ProfileSavedTab from './ProfileSavedTab';
import { mockProfileUser } from '../data/mockProfileUser';

export type ProfileTab = 'Posts' | 'Replies' | 'Saved';

export default function UserProfileContent() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('Posts');
  const [isFollowing, setIsFollowing] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto lg:max-w-none lg:flex lg:gap-6 px-0 lg:px-0 pb-8">
      {/* Main profile column */}
      <div className="flex-1 min-w-0">
        <ProfileHeader
          user={mockProfileUser}
          isFollowing={isFollowing}
          onFollowToggle={() => setIsFollowing(!isFollowing)}
          onEditProfile={() => setIsEditModalOpen(true)}
        />

        <ProfileStats user={mockProfileUser} />

        {/* Topics expertise (expert only) */}
        {mockProfileUser.role === 'Expert' && (
          <div className="px-4 lg:px-6 py-4 border-b border-border">
            <h3 className="text-xs font-600 text-muted-foreground uppercase tracking-wider mb-3">
              Specializations
            </h3>
            <div className="flex flex-wrap gap-2">
              {mockProfileUser.expertTopics?.map((topic) => (
                <span
                  key={`profile-topic-${topic}`}
                  className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-600 border border-purple-100"
                >
                  ✦ {topic}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-3">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-600 text-foreground tabular-nums">
                  {mockProfileUser.yearsExperience} years
                </span>
                <span className="text-xs text-muted-foreground">experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-600 text-foreground tabular-nums">
                  {mockProfileUser.rating}
                </span>
                <span className="text-xs text-muted-foreground">
                  avg rating ({mockProfileUser.reviewCount} reviews)
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-600 text-foreground tabular-nums">
                  {mockProfileUser.helpedCount}
                </span>
                <span className="text-xs text-muted-foreground">people helped</span>
              </div>
            </div>
          </div>
        )}

        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="fade-in">
          {activeTab === 'Posts' && <ProfilePostsTab userId={mockProfileUser.id} />}
          {activeTab === 'Replies' && <ProfileRepliesTab userId={mockProfileUser.id} />}
          {activeTab === 'Saved' && <ProfileSavedTab />}
        </div>
      </div>

      {/* Desktop right sidebar */}
      <div className="hidden xl:block w-72 flex-shrink-0 pt-6">
        <ProfileSidePanelStatic user={mockProfileUser} />
      </div>
    </div>
  );
}

function ProfileSidePanelStatic({ user }: { user: typeof mockProfileUser }) {
  return (
    <div className="space-y-4 sticky top-6">
      {/* About card */}
      <div className="bg-card rounded-2xl border border-border p-4 shadow-card">
        <h3 className="text-sm font-700 text-foreground mb-3">About</h3>
        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5">
            <span className="text-sm">📍</span>
            <span className="text-sm text-muted-foreground">{user.location}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-sm">🗓️</span>
            <span className="text-sm text-muted-foreground">Joined {user.joinedDate}</span>
          </div>
          {user.website && (
            <div className="flex items-center gap-2.5">
              <span className="text-sm">🔗</span>
              <a href={user.website} className="text-sm text-primary hover:underline truncate">
                {user.website.replace('https://', '')}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-card rounded-2xl border border-border p-4 shadow-card">
        <h3 className="text-sm font-700 text-foreground mb-3">Achievements</h3>
        <div className="grid grid-cols-3 gap-2">
          {user.achievements.map((ach) => (
            <div
              key={`achievement-${ach.label}`}
              className="flex flex-col items-center gap-1 p-2 bg-muted/50 rounded-xl"
              title={ach.description}
            >
              <span className="text-xl">{ach.emoji}</span>
              <span className="text-xs text-muted-foreground text-center leading-tight">
                {ach.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
