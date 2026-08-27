'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RoleBadge from '@/components/ui/RoleBadge';
import type { ProfileUser } from '../data/mockProfileUser';

interface ProfileHeaderProps {
  user: ProfileUser;
  isFollowing: boolean;
  onFollowToggle: () => void;
  onEditProfile: () => void;
}export default function ProfileHeader({ user, isFollowing, onFollowToggle, onEditProfile }: ProfileHeaderProps) {
  const isOwnProfile = true; // In real app: compare with auth user id

  return (
    <div className="relative">
      {/* Cover image */}
      <div className="w-full h-36 lg:h-48 overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-50">
        {user.coverImage && (
          <AppImage
            src={user.coverImage}
            alt={`${user.name} cover photo`}
            width={800}
            height={192}
            className="w-full h-full object-cover"
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Profile info */}
      <div className="px-4 lg:px-6 pb-4">
        {/* Avatar row */}
        <div className="flex items-end justify-between gap-2 -mt-10 mb-3">
          <div className="profile-avatar-ring w-20 h-20 flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-muted border-4 border-card">
              <AppImage
                src={user.avatar}
                alt={`${user.name} profile photo`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-end gap-2 mb-1">
            {isOwnProfile ? (
              <>
                <button
                  onClick={onEditProfile}
                  className="btn-outline text-xs py-2 px-3 flex items-center gap-1.5 sm:text-sm sm:px-4"
                >
                  <Icon name="PencilIcon" size={14} variant="outline" />
                  Edit Profile
                </button>
                <button className="p-2 rounded-xl border border-border hover:bg-muted transition-all duration-150 text-muted-foreground">
                  <Icon name="ShareIcon" size={16} variant="outline" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={onFollowToggle}
                  className={`text-sm py-2 px-5 rounded-xl font-600 transition-all duration-150 ${
                    isFollowing
                      ? 'bg-muted text-muted-foreground border border-border hover:bg-border'
                      : 'btn-primary'
                  }`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
                <button className="btn-outline text-sm py-2 px-4">Message</button>
                {user.role === 'Expert' && (
                  <button className="btn-primary text-sm py-2 px-4">Get Advice</button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Name & role */}
        <div className="flex items-center gap-2.5 flex-wrap mb-1">
          <h1 className="text-xl font-800 text-foreground">{user.name}</h1>
          <RoleBadge role={user.role} size="md" />
          {user.isVerified && (
            <span title="Verified account">
              <Icon name="CheckBadgeIcon" size={18} variant="solid" className="text-primary" />
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-1">@{user.username}</p>

        {/* Bio */}
        <p className="text-sm text-foreground leading-relaxed mb-2">{user.bio}</p>

        {/* Meta row */}
        <div className="flex items-center gap-4 flex-wrap text-xs text-muted-foreground">
          {user.location && (
            <span className="flex items-center gap-1">
              <Icon name="MapPinIcon" size={13} variant="outline" />
              {user.location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Icon name="CalendarDaysIcon" size={13} variant="outline" />
            Joined {user.joinedDate}
          </span>
          {user.website && (
            <a href={user.website} className="flex items-center gap-1 text-primary hover:underline">
              <Icon name="LinkIcon" size={13} variant="outline" />
              {user.website.replace('https://', '')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}