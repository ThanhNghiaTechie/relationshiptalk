'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import CreatePostModal from './CreatePostModal';
import type { Post } from '../data/mockPosts';

export default function CreatePostButton({ onCreated }: { onCreated: (post: Post) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 lg:hidden w-14 h-14 bg-primary rounded-full shadow-modal flex items-center justify-center text-primary-foreground transition-all duration-150 active:scale-95 z-30"
        aria-label="Create new post"
      >
        <Icon name="PlusIcon" size={24} variant="outline" />
      </button>

      {/* Desktop create post button in sidebar area */}
      <div className="hidden lg:block fixed bottom-8 left-72 z-30">
        <button
          onClick={() => setOpen(true)}
          className="btn-primary flex items-center gap-2 shadow-modal"
        >
          <Icon name="PlusIcon" size={16} variant="outline" />
          New Post
        </button>
      </div>

      {open && <CreatePostModal onClose={() => setOpen(false)} onCreated={onCreated} />}
    </>
  );
}
