import React from 'react';

type Role = 'Expert' | 'Member' | 'Admin';

interface RoleBadgeProps {
  role: Role;
  size?: 'sm' | 'md';
}

export default function RoleBadge({ role, size = 'sm' }: RoleBadgeProps) {
  const classMap: Record<Role, string> = {
    Expert: 'badge-expert',
    Member: 'badge-member',
    Admin: 'badge-admin',
  };

  const iconMap: Record<Role, string> = {
    Expert: '✦',
    Member: '◉',
    Admin: '⬡',
  };

  return (
    <span
      className={`${classMap[role]} inline-flex items-center gap-1 ${size === 'md' ? 'text-xs px-3 py-1' : ''}`}
    >
      <span>{iconMap[role]}</span>
      {role}
    </span>
  );
}
