'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navItems = [
  { label: 'Community', href: '/', icon: 'Squares2X2Icon', badge: null },
  { label: 'For You', href: '#', icon: 'SparklesIcon', badge: null },
  { label: 'Search', href: '#', icon: 'MagnifyingGlassIcon', badge: null },
  { label: 'Messages', href: '/chat-messaging', icon: 'ChatBubbleLeftRightIcon', badge: '3' },
  { label: 'Profile', href: '/user-profile', icon: 'UserCircleIcon', badge: null },
];

const secondaryItems = [
  { label: 'Notifications', href: '#', icon: 'BellIcon', badge: '7' },
  { label: 'Settings', href: '#', icon: 'Cog6ToothIcon', badge: null },
];

interface SidebarProps {
  activeRoute: string;
}

export default function Sidebar({ activeRoute }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden lg:flex flex-col fixed left-0 top-0 h-full bg-card border-r border-border z-40 transition-all duration-300 ease-in-out ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-border ${collapsed ? 'justify-center' : ''}`}>
        <div className="flex items-center gap-2">
          <AppLogo size={36} />
          {!collapsed && (
            <span className="font-extrabold text-lg text-foreground tracking-tight">
              RelationshipTalk
            </span>
          )}
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto scrollbar-hide">
        {!collapsed && (
          <p className="text-xs font-600 uppercase tracking-widest text-muted-foreground px-3 pb-2">
            Navigate
          </p>
        )}
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? activeRoute === '/'
              : activeRoute.startsWith(item.href);
          return (
            <Link
              key={`sidebar-nav-${item.label}`}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group relative ${
                isActive
                  ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:bg-muted hover:text-foreground'
              } ${collapsed ? 'justify-center' : ''}`}
            >
              <Icon
                name={item.icon as Parameters<typeof Icon>[0]['name']}
                size={20}
                variant={isActive ? 'solid' : 'outline'}
                className={isActive ? 'text-primary' : ''}
              />
              {!collapsed && (
                <span className={`text-sm font-500 ${isActive ? 'font-600 text-primary' : ''}`}>
                  {item.label}
                </span>
              )}
              {item.badge && !collapsed && (
                <span className="ml-auto bg-primary text-primary-foreground text-xs font-700 rounded-full px-2 py-0.5 min-w-[20px] text-center">
                  {item.badge}
                </span>
              )}
              {item.badge && collapsed && (
                <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-xs font-700 rounded-full w-4 h-4 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
              {collapsed && (
                <div className="absolute left-full ml-3 bg-foreground text-background text-xs font-500 px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Secondary nav */}
      <div className="py-4 px-2 border-t border-border space-y-1">
        {secondaryItems.map((item) => {
          const isActive = activeRoute.startsWith(item.href);
          return (
            <Link
              key={`sidebar-secondary-${item.label}`}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group relative ${
                isActive
                  ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:bg-muted hover:text-foreground'
              } ${collapsed ? 'justify-center' : ''}`}
            >
              <Icon
                name={item.icon as Parameters<typeof Icon>[0]['name']}
                size={20}
                variant="outline"
              />
              {!collapsed && (
                <span className="text-sm font-500">{item.label}</span>
              )}
              {item.badge && !collapsed && (
                <span className="ml-auto bg-primary text-primary-foreground text-xs font-700 rounded-full px-2 py-0.5">
                  {item.badge}
                </span>
              )}
              {collapsed && (
                <div className="absolute left-full ml-3 bg-foreground text-background text-xs font-500 px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Collapse toggle */}
      <div className="px-2 pb-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-150"
        >
          <Icon
            name={collapsed ? 'ChevronRightIcon' : 'ChevronLeftIcon'}
            size={18}
            variant="outline"
          />
          {!collapsed && <span className="text-sm font-500">Collapse</span>}
        </button>
      </div>
    </aside>
  );
}