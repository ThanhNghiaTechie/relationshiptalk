import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://relationshiptalk.vercel.app';

  // 1. Danh sách các trang cố định
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // 2. Fetch danh sách bài viết an toàn
  try {
    const res = await fetch(`${baseUrl}/api/posts`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      return staticRoutes;
    }

    const posts = await res.json();

    // Kiểm tra xem dữ liệu trả về có đúng là một Mảng (Array) hay không
    if (!Array.isArray(posts)) {
      return staticRoutes;
    }

    const postRoutes: MetadataRoute.Sitemap = posts.map(
      (post: { id: string; updatedAt?: string }) => ({
        url: `${baseUrl}/post/${post.id}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    );

    return [...staticRoutes, ...postRoutes];
  } catch (_error) {
    // Trả về danh sách trang tĩnh an toàn nếu có bất kỳ lỗi nào xảy ra
    return staticRoutes;
  }
}
