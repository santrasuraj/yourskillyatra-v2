import { MetadataRoute } from 'next';
import { getContent } from '@/lib/getContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const content = getContent();
  const baseUrl = 'https://yourskillyatra.com';

  const staticRoutes = [
    '',
    '/about',
    '/courses',
    '/trainers',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogPosts = (content?.blog?.items || []).map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogPosts];
}
