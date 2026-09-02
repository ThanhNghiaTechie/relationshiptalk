'use client';
import React from 'react';
import type { FeedTab } from './CommunityFeedContent';

interface FeedTabBarProps {
  activeTab: FeedTab;
  onTabChange: (tab: FeedTab) => void;
}

const tabs: FeedTab[] = ['Feed', 'Experts', 'Groups'];

export default function FeedTabBar({ activeTab, onTabChange }: FeedTabBarProps) {
  return (
    <div className="sticky top-0 lg:top-0 z-20 bg-background border-b border-border">
      <div className="flex items-center px-4 lg:px-0">
        {tabs.map((tab) => (
          <button
            key={`feed-tab-${tab}`}
            onClick={() => onTabChange(tab)}
            className={`relative flex-1 lg:flex-none lg:px-8 py-4 text-sm font-600 transition-all duration-150 ${
              activeTab === tab
                ? 'text-primary tab-underline'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
