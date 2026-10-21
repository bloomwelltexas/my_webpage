import { RouteObject } from 'react-router';
import { lazy } from 'react';
import HomePage from './pages/index';
import PatientResourcesPage from './pages/patient-resources';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
// and abort to client rendering. The prod 404 page is tiny; the dev-tools
// variant stays lazy because it pulls in dev-only code we don't want in
// production bundles.
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = ProdNotFoundPage;

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/patient-resources',
    element: <PatientResourcesPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    id: 'airo-not-found',
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/';

export type Params = Record<string, string | undefined>;
