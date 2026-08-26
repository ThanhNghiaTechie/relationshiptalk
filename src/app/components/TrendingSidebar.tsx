import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

import { mockExperts } from '../data/mockExperts';

const trendingTopics = [
  { label: 'Relationship Advice', count: 1842, slug: 'chip-trending-ra' },
  { label: 'Self-Love', count: 1203, slug: 'chip-trending-sl' },
  { label: 'Breakups', count: 987, slug: 'chip-trending-br' },
  { label: 'Dating', count: 876, slug: 'chip-trending-dt' },
  { label: 'Long Distance', count: 654, slug: 'chip-trending-ld' },
];

export default function TrendingSidebar() {
  return (
    <div className="space-y-5 sticky top-6">
      {/* Trending topics */}
      <div className="bg-card rounded-2xl border border-border p-4 shadow-card">
        <div className="flex items-center gap-2 mb-3">
          <Icon name="FireIcon" size={16} variant="solid" className="text-primary" />
          <h3 className="text-sm font-700 text-foreground">Trending Topics</h3>
        </div>
        <div className="space-y-2">
          {trendingTopics?.map((topic, i) => (
            <div
              key={topic?.slug}
              className="flex items-center justify-between py-1.5 hover:bg-muted/50 rounded-lg px-1 transition-all duration-150 cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-700 text-muted-foreground tabular-nums w-4">
                  {i + 1}
                </span>
                <span className="text-sm font-500 text-foreground">{topic?.label}</span>
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">{topic?.count?.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Online experts */}
      <div className="bg-card rounded-2xl border border-border p-4 shadow-card">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <h3 className="text-sm font-700 text-foreground">Experts Online Now</h3>
        </div>
        <div className="space-y-3">
          {mockExperts?.filter((e) => e?.isOnline)?.slice(0, 3)?.map((expert) => (
              <div key={`sidebar-expert-${expert?.id}`} className="flex items-center gap-2.5">
                <div className="relative flex-shrink-0">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-muted">
                    <AppImage
                      src={expert?.avatar}
                      alt={`${expert?.name} expert avatar`}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-card rounded-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-700 text-foreground truncate">{expert?.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{expert?.topics?.[0]}</p>
                </div>
                <button className="text-xs font-600 text-primary hover:underline">Ask</button>
              </div>
            ))}
        </div>
      </div>
      {/* Community stats */}
      <div className="bg-card rounded-2xl border border-border p-4 shadow-card">
        <h3 className="text-sm font-700 text-foreground mb-3">Community Stats</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Members', value: '48.2K' },
            { label: 'Experts', value: '127' },
            { label: 'Posts Today', value: '384' },
            { label: 'Helped Today', value: '1.2K' },
          ]?.map((stat) => (
            <div key={`stat-${stat?.label}`} className="stat-card">
              <p className="text-base font-800 text-foreground tabular-nums">{stat?.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat?.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}