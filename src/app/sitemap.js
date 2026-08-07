import { competitors } from '../content/competitors';
import { personas } from '../content/personas';
import { useCases } from '../content/useCases';
import { features } from '../content/features';

export default function sitemap() {
  const baseUrl = 'https://velotime.dg.tools';

  // Core static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic competitor comparison routes
  const competitorRoutes = competitors.map((competitor) => ({
    url: `${baseUrl}/compare/${competitor.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const personaRoutes = personas.map((persona) => ({
    url: `${baseUrl}/for/${persona.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const useCaseRoutes = useCases.map((useCase) => ({
    url: `${baseUrl}/use-case/${useCase.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const featureRoutes = features.map((feature) => ({
    url: `${baseUrl}/features/${feature.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...competitorRoutes, ...personaRoutes, ...useCaseRoutes, ...featureRoutes];
}
