import React from 'react';

const topicColors: Record<string, { bg: string; text: string }> = {
  'Relationship Advice': { bg: 'bg-pink-50', text: 'text-primary' },
  'Dating': { bg: 'bg-purple-50', text: 'text-purple-600' },
  'Breakups': { bg: 'bg-orange-50', text: 'text-orange-600' },
  'Family': { bg: 'bg-blue-50', text: 'text-blue-600' },
  'Self-Love': { bg: 'bg-green-50', text: 'text-green-600' },
  'Long Distance': { bg: 'bg-indigo-50', text: 'text-indigo-600' },
  'Communication': { bg: 'bg-teal-50', text: 'text-teal-600' },
  'Boundaries': { bg: 'bg-amber-50', text: 'text-amber-600' },
};

interface TopicBadgeProps {
  topic: string;
  onClick?: () => void;
}

export default function TopicBadge({ topic, onClick }: TopicBadgeProps) {
  const colors = topicColors[topic] ?? { bg: 'bg-muted', text: 'text-muted-foreground' };
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-600 ${colors.bg} ${colors.text} transition-all duration-150 hover:opacity-80`}
    >
      {topic}
    </button>
  );
}