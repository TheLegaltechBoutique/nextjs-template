import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';

// TODO: Define locales.
const I18nMiddleware = createI18nMiddleware({
  locales: ['es'],
  defaultLocale: 'es',
  urlMappingStrategy: 'rewriteDefault',
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
