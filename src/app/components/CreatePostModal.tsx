'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Icon from '@/components/ui/AppIcon';


interface CreatePostModalProps {
  onClose: () => void;
}

interface PostFormValues {
  title: string;
  body: string;
  topic: string;
  isAnonymous: boolean;
}

const topics = ['Relationship Advice', 'Dating', 'Breakups', 'Family', 'Self-Love', 'Long Distance', 'Communication', 'Boundaries'];

export default function CreatePostModal({ onClose }: CreatePostModalProps) {
  const [selectedTopic, setSelectedTopic] = useState('Relationship Advice');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PostFormValues>({
    defaultValues: { title: '', body: '', topic: 'Relationship Advice', isAnonymous: false },
  });

  const isAnonymous = watch('isAnonymous');

  const onSubmit = async () => {
    setIsSubmitting(true);
    // Backend integration point: POST /api/posts
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    toast.success('Your post has been shared with the community!');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-card rounded-t-3xl sm:rounded-2xl w-full sm:max-w-lg shadow-modal fade-in border border-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-base font-700 text-foreground">Share Your Thoughts</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-muted transition-all duration-150"
          >
            <Icon name="XMarkIcon" size={20} variant="outline" className="text-muted-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
          {/* Anonymous toggle */}
          <div className="flex items-center justify-between bg-muted/50 rounded-xl px-4 py-3">
            <div>
              <p className="text-sm font-600 text-foreground">Post Anonymously</p>
              <p className="text-xs text-muted-foreground">Your name won't be shown</p>
            </div>
            <button
              type="button"
              onClick={() => setValue('isAnonymous', !isAnonymous)}
              className={`relative w-11 h-6 rounded-full transition-all duration-200 ${
                isAnonymous ? 'bg-primary' : 'bg-border'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200 ${
                  isAnonymous ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Topic selector */}
          <div>
            <label className="text-xs font-600 text-muted-foreground uppercase tracking-wider mb-2 block">
              Topic Category
            </label>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={`modal-topic-${topic}`}
                  type="button"
                  onClick={() => { setSelectedTopic(topic); setValue('topic', topic); }}
                  className={`topic-chip text-xs py-1.5 ${selectedTopic === topic ? 'topic-chip-active' : ''}`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="text-xs font-600 text-muted-foreground uppercase tracking-wider mb-1.5 block">
              Title <span className="text-primary">*</span>
            </label>
            <input
              {...register('title', { required: 'Please add a title for your post' })}
              type="text"
              placeholder="What's on your mind?"
              className="w-full bg-input border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            {errors.title && (
              <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Body */}
          <div>
            <label className="text-xs font-600 text-muted-foreground uppercase tracking-wider mb-1.5 block">
              Your Story <span className="text-primary">*</span>
            </label>
            <textarea
              {...register('body', {
                required: 'Please share your story or question',
                minLength: { value: 20, message: 'Please write at least 20 characters' },
              })}
              rows={4}
              placeholder="Share your experience, ask a question, or seek advice from the community..."
              className="w-full bg-input border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            {errors.body && (
              <p className="text-xs text-red-500 mt-1">{errors.body.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="btn-outline flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Icon name="ArrowPathIcon" size={16} variant="outline" className="animate-spin" />
                  Posting...
                </>
              ) : (
                'Share Post'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}