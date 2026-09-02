import type { Post } from '@/app/data/mockPosts';

interface PostRow {
  id: number;
  user_id: string | null;
  category_id: number | null;
  title: string;
  content: string;
  image_url: string | null;
  is_anonymous: boolean | null;
  likes_count: number | null;
  comments_count: number | null;
  created_at: string | null;
  profiles?: {
    id: string;
    username: string | null;
    display_name: string | null;
    avatar_url: string | null;
  } | {
    id: string;
    username: string | null;
    display_name: string | null;
    avatar_url: string | null;
  }[] | null;
  categories?: { id: number; name: string; slug: string } | { id: number; name: string; slug: string }[] | null;
}

export function mapPostRow(row: PostRow): Post {
  const profile = Array.isArray(row.profiles) ? row.profiles[0] : row.profiles;
  const category = Array.isArray(row.categories) ? row.categories[0] : row.categories;
  const displayName = profile?.display_name || profile?.username || 'Người dùng';
  return {
    id: String(row.id),
    author: {
      name: displayName,
      avatar: profile?.avatar_url || '/assets/images/no_image.png',
      role: 'Member',
      username: profile?.username || 'user',
    },
    topic: category?.name || 'Relationship Advice',
    timeAgo: formatTimeAgo(row.created_at),
    title: row.title,
    body: row.content,
    image: row.image_url || undefined,
    likes: row.likes_count || 0,
    comments: row.comments_count || 0,
    isAnonymous: Boolean(row.is_anonymous),
  };
}

function formatTimeAgo(value: string | null) {
  if (!value) return 'Vừa đăng';
  const seconds = Math.max(0, Math.floor((Date.now() - new Date(value).getTime()) / 1000));
  if (seconds < 60) return 'Vừa đăng';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} phút trước`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} giờ trước`;
  return `${Math.floor(seconds / 86400)} ngày trước`;
}

export const postSelect = `
  id,
  user_id,
  category_id,
  title,
  content,
  image_url,
  is_anonymous,
  likes_count,
  comments_count,
  created_at,
  profiles (id, username, display_name, avatar_url),
  categories (id, name, slug)
`;
