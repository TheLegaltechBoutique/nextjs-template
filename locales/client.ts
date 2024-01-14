'use client';

import { createI18nClient } from 'next-international/client';

// TODO: Define locales
export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  es: () => import('./translations/es'),
});
