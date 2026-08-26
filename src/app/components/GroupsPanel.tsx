'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { mockGroups } from '../data/mockGroups';

export default function GroupsPanel() {
  const [joinedGroups, setJoinedGroups] = useState<Set<string>>(new Set(['group-002', 'group-004']));

  const toggleJoin = (id: string) => {
    setJoinedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="px-4 lg:px-0 pt-4 pb-6">
      <div className="mb-4">
        <h2 className="text-base font-700 text-foreground">Community Groups</h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          Join groups to connect with people sharing similar experiences
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockGroups.map((group) => (
          <div
            key={`group-card-${group.id}`}
            className="bg-card rounded-2xl border border-border overflow-hidden card-hover shadow-card"
          >
            {/* Cover image */}
            <div className="w-full h-28 overflow-hidden relative">
              <AppImage
                src={group.coverImage}
                alt={`${group.name} group cover image`}
                width={400}
                height={112}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-2 left-3">
                <span className="text-white text-xs font-600 bg-black/30 px-2 py-0.5 rounded-full">
                  {group.topic}
                </span>
              </div>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-700 text-foreground leading-snug">{group.name}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                {group.description}
              </p>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <Icon name="UserGroupIcon" size={12} variant="outline" className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {group.memberCount.toLocaleString()} members
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="ChatBubbleLeftIcon" size={12} variant="outline" className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {group.postsToday} posts today
                  </span>
                </div>
              </div>

              {/* Member avatars */}
              <div className="flex items-center gap-2 mt-2.5">
                <div className="flex -space-x-2">
                  {group.recentMembers.slice(0, 4).map((member, i) => (
                    <div
                      key={`group-${group.id}-member-${i}`}
                      className="w-6 h-6 rounded-full border-2 border-card overflow-hidden bg-muted"
                    >
                      <AppImage
                        src={member.avatar}
                        alt={`${member.name} member avatar`}
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">+{group.memberCount - 4} more</span>
              </div>

              <button
                onClick={() => toggleJoin(group.id)}
                className={`w-full mt-3 py-2 rounded-xl text-sm font-600 transition-all duration-150 ${
                  joinedGroups.has(group.id)
                    ? 'bg-muted text-muted-foreground hover:bg-border'
                    : 'btn-primary'
                }`}
              >
                {joinedGroups.has(group.id) ? 'Joined ✓' : 'Join Group'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}