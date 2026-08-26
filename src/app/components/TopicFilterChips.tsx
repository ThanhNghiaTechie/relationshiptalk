'use client';
import React from 'react';

const topics = ['All', 'Relationship Advice', 'Dating', 'Breakups', 'Family', 'Self-Love', 'Long Distance', 'Communication'];

interface TopicFilterChipsProps {
  activeTopic: string;
  onTopicChange: (topic: string) => void;
}

export default function TopicFilterChips({ activeTopic, onTopicChange }: TopicFilterChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 lg:px-0 py-3 border-b border-border">
      {topics.map((topic) => (
        <button
          key={`chip-${topic}`}
          onClick={() => onTopicChange(topic)}
          className={`topic-chip flex-shrink-0 ${activeTopic === topic ? 'topic-chip-active' : ''}`}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}