import React from 'react';
import type { ProfileUser } from '../data/mockProfileUser';

interface ProfileStatsProps {
  user: ProfileUser;
}

export default function ProfileStats({ user }: ProfileStatsProps) {
  const stats = [
    { label: 'Posts', value: user.postsCount },
    { label: 'Followers', value: user.followersCount },
    { label: 'Following', value: user.followingCount },
  ];

  return (
    <div className="flex border-b border-border">
      {stats.map((stat, i) => (
        <div
          key={`profile-stat-${stat.label}`}
          className={`flex-1 py-4 text-center ${
            i < stats.length - 1 ? 'border-r border-border' : ''
          }`}
        >
          <p className="text-lg font-800 text-foreground tabular-nums">
            {stat.value >= 1000 ? `${(stat.value / 1000).toFixed(1)}K` : stat.value}
          </p>
          <p className="text-xs text-muted-foreground font-500 mt-0.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
