'use client';
import React from 'react';
import type { ProfileTab } from './UserProfileContent';

interface ProfileTabsProps {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
}

const tabs: ProfileTab[] = ['Posts', 'Replies', 'Saved'];

export default function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <div className="flex border-b border-border sticky top-0 lg:top-0 z-10 bg-background">
      {tabs.map((tab) => (
        <button
          key={`profile-tab-${tab}`}
          onClick={() => onTabChange(tab)}
          className={`flex-1 py-3.5 text-sm font-600 transition-all duration-150 relative ${
            activeTab === tab
              ? 'text-primary tab-underline' :'text-muted-foreground hover:text-foreground'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}