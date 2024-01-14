import { createI18nServer } from 'next-international/server';

// TODO: Define locales
export const { getCurrentLocale, getI18n, getScopedI18n, getStaticParams } =
  createI18nServer({
    es: () => import('./translations/es'),
  });
