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
    <div className="min-h-screen w-full overflow-x-hidden bg-background flex">
      {/* Desktop Sidebar */}
      <Sidebar activeRoute={activeRoute} />

      {/* Main content */}
      <div className="flex min-w-0 flex-1 flex-col min-h-screen lg:ml-64">
        <TopHeader activeRoute={activeRoute} />
        <main className="min-w-0 flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-6 max-w-screen-2xl w-full mx-auto px-0 sm:px-2 lg:px-6 xl:px-8 2xl:px-10">
          {children}
        </main>
        {/* Mobile bottom nav */}
        <BottomNav activeRoute={activeRoute} />
      </div>
    </div>
  );
}
