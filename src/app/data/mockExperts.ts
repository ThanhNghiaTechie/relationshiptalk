export interface Expert {
  id: string;
  name: string;
  avatar: string;
  title: string;
  topics: string[];
  rating: number;
  reviewCount: number;
  yearsExp: number;
  followers: number;
  postsCount: number;
  bio: string;
  isOnline: boolean;
  isVerified: boolean;
}

export const mockExperts: Expert[] = [
{
  id: 'expert-001',
  name: 'Dr. James Okafor',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_146b49d54-1772876058824.png",
  title: 'Licensed Marriage & Family Therapist',
  topics: ['Relationship Advice', 'Communication', 'Self-Love'],
  rating: 4.9,
  reviewCount: 312,
  yearsExp: 12,
  followers: 8420,
  postsCount: 184,
  bio: 'Specializing in attachment theory and emotionally focused therapy. I help couples and individuals break unhealthy patterns and build secure, fulfilling connections.',
  isOnline: true,
  isVerified: true
},
{
  id: 'expert-002',
  name: 'Dr. Amara Singh',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_103ac20b5-1787592548910.png",
  title: 'Clinical Psychologist & Relationship Coach',
  topics: ['Breakups', 'Self-Love', 'Boundaries'],
  rating: 4.8,
  reviewCount: 247,
  yearsExp: 9,
  followers: 6130,
  postsCount: 97,
  bio: 'I work with high-achieving individuals navigating relationship transitions, boundary-setting, and healing after emotional trauma. Evidence-based, practical approach.',
  isOnline: true,
  isVerified: true
},
{
  id: 'expert-003',
  name: 'Emma Hartley',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17d918e2b-1763301446194.png",
  title: 'Certified Relationship Coach & Author',
  topics: ['Relationship Advice', 'Dating', 'Long Distance'],
  rating: 4.7,
  reviewCount: 189,
  yearsExp: 7,
  followers: 12800,
  postsCount: 231,
  bio: 'Author of "The Validation Trap." I help people understand their emotional needs and communicate them without pushing partners away.',
  isOnline: false,
  isVerified: true
},
{
  id: 'expert-004',
  name: 'Dr. Kwame Asante',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1036dd1a2-1773982752586.png",
  title: 'Sex & Intimacy Therapist',
  topics: ['Communication', 'Relationship Advice', 'Family'],
  rating: 4.9,
  reviewCount: 156,
  yearsExp: 14,
  followers: 4920,
  postsCount: 68,
  bio: 'Helping couples rebuild intimacy and communication after life transitions. Culturally sensitive approach with clients across diverse backgrounds.',
  isOnline: true,
  isVerified: true
}];