export interface ProfileMetadata {
  username?: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  location?: string;
}

export function getProfileMetadata(metadata: unknown): ProfileMetadata {
  if (!metadata || typeof metadata !== 'object') return {};
  const values = metadata as Record<string, unknown>;
  return {
    username: typeof values.username === 'string' ? values.username : undefined,
    full_name: typeof values.full_name === 'string' ? values.full_name : undefined,
    avatar_url: typeof values.avatar_url === 'string' ? values.avatar_url : undefined,
    bio: typeof values.bio === 'string' ? values.bio : undefined,
    location: typeof values.location === 'string' ? values.location : undefined,
  };
}

export function getDisplayName(email: string | undefined, metadata: ProfileMetadata) {
  return metadata.full_name || metadata.username || email?.split('@')[0] || 'Bạn';
}
