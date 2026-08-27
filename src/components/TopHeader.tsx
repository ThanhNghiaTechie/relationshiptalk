'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import Icon from '@/components/ui/AppIcon';

interface TopHeaderProps {
  activeRoute: string;
}

const routeTitles: Record<string, string> = {
  '/': 'COMMUNITY',
  '/chat-messaging': 'MESSAGES',
  '/user-profile': 'PROFILE',
};

export default function TopHeader({ activeRoute }: TopHeaderProps) {
  const [notifOpen, setNotifOpen] = useState(false);
  const title = routeTitles[activeRoute] ?? 'COMMUNITY';

  return (
    <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border px-3 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between lg:hidden">
      {/* Left: avatar */}
      <Link href="/login" className="profile-avatar-ring w-9 h-9 flex-shrink-0" aria-label="Đăng nhập">
        <div className="w-full h-full rounded-full bg-muted overflow-hidden flex items-center justify-center">
          <Icon name="UserCircleIcon" size={28} variant="solid" className="text-muted-foreground" />
        </div>
      </Link>

      {/* Center: title */}
      <h1 className="min-w-0 truncate px-2 text-sm font-800 tracking-widest text-foreground uppercase sm:text-base">
        {title}
      </h1>

      {/* Right: actions */}
      <div className="flex items-center gap-2">
        <button
          className="relative p-2 rounded-full hover:bg-muted transition-all duration-150"
          onClick={() => setNotifOpen(!notifOpen)}
          aria-label="Messages"
        >
          <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={22} variant="outline" className="text-primary" />
          <span className="absolute top-1 right-1 bg-primary rounded-full w-2 h-2" />
        </button>
        <button
          className="relative p-2 rounded-full hover:bg-muted transition-all duration-150"
          aria-label="Notifications"
        >
          <Icon name="BellIcon" size={22} variant="outline" className="text-foreground" />
          <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-xs font-700 rounded-full w-4 h-4 flex items-center justify-center">
            7
          </span>
        </button>
      </div>
    </header>
  );
}