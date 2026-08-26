import React from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import TopHeader from './TopHeader';

interface AppLayoutProps {
  children: React.ReactNode;
  activeRoute: string;
}

export default function AppLayout({ children, activeRoute }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <Sidebar activeRoute={activeRoute} />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
        <TopHeader activeRoute={activeRoute} />
        <main className="flex-1 pb-20 lg:pb-6 max-w-screen-2xl w-full mx-auto px-0 lg:px-6 xl:px-8 2xl:px-10">
          {children}
        </main>
        {/* Mobile bottom nav */}
        <BottomNav activeRoute={activeRoute} />
      </div>
    </div>
  );
}