'use client';
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const navItems = [
  { label: 'Community', href: '/', icon: 'Squares2X2Icon' },
  { label: 'For You', href: '#', icon: 'SparklesIcon' },
  { label: 'Search', href: '#', icon: 'MagnifyingGlassIcon' },
  { label: 'Chat', href: '/chat-messaging', icon: 'ChatBubbleLeftRightIcon', badge: '3' },
  { label: 'Profile', href: '/user-profile', icon: 'UserCircleIcon' },
];

interface BottomNavProps {
  activeRoute: string;
}

export default function BottomNav({ activeRoute }: BottomNavProps) {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-bottom-nav z-40">
      <div className="flex items-center justify-around px-2 py-1">
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? activeRoute === '/'
              : activeRoute.startsWith(item.href);
          return (
            <Link
              key={`bottom-nav-${item.label}`}
              href={item.href}
              className="bottom-nav-item relative flex-1"
            >
              <div className="relative">
                <Icon
                  name={item.icon as Parameters<typeof Icon>[0]['name']}
                  size={22}
                  variant={isActive ? 'solid' : 'outline'}
                  className={isActive ? 'text-primary' : 'text-muted-foreground'}
                />
                {item.badge && (
                  <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-xs font-700 rounded-full w-4 h-4 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span
                className={`text-xs font-500 ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}