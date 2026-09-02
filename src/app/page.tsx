import React from 'react';
import AppLayout from '@/components/AppLayout';
import CommunityFeedContent from './components/CommunityFeedContent';

export default function CommunityFeedPage() {
  return (
    <AppLayout activeRoute="/">
      <CommunityFeedContent />
    </AppLayout>
  );
}
