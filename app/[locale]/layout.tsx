import { Poppins } from 'next/font/google';
import '@/app/globals.css';
import { setStaticParamsLocale } from 'next-international/server';
import { I18nProviderClient } from '@/locales/client';
import {
  getCurrentLocale,
  getScopedI18n,
  getStaticParams,
} from '@/locales/server';

// TODO: Change Main font for Project.
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

// // TODO: Set all metadata to values.
export async function generateMetadata() {
  const t = await getScopedI18n('general');

  return {
    title: {
      template: '%s | Next.js Template',
      default: 'Next.js Template',
    },
    description: `${t('description')}`,
    generator: 'Next.js',
    applicationName: 'Next.js Template',
    keywords: [],
    authors: [{ name: 'Alex de la Rosa', url: 'https://aletsdelarosa.tech' }],
    creator: 'Alex de la Rosa',
    publisher: 'Alex de la Rosa',
    metadataBase: new URL('https://example.com'),
    alternates: {
      canonical: '/',
      languages: {
        es: '/es',
      },
    },
    icons: {
      icon: [
        {
          url: '/icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/icons/favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          url: '/icons/favicon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          url: '/icons/favicon-196x196.png',
          sizes: '196x196',
          type: 'image/png',
        },
      ],
      apple: [
        {
          url: '/icons/apple-touch-icon-57x57.png',
          sizes: '57x57',
          type: 'image/png',
        },
        {
          url: '/icons/apple-touch-icon-60x60.png',
          sizes: '60x60',
          type: 'image/png',
        },
        {
          url: '/icons/apple-touch-icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          url: '/icons/apple-touch-icon-76x76.png',
          sizes: '76x76',
          type: 'image/png',
        },
        {
          url: '/icons/apple-touch-icon-114x114.png',
          sizes: '114x114',
          type: 'image/png',
        },
        {
          url: '/icons/apple-touch-icon-120x120.png',
          sizes: '120x120',
          type: 'image/png',
        },
        {
          url: '/icons/apple-touch-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          url: '/icons/apple-touch-icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
      ],
    },
    appLinks: {
      ios: {
        url: 'https://nextjs.org/ios',
        app_store_id: 'app_store_id',
      },
      android: {
        package: 'com.example.android/package',
        app_name: 'app_name_android',
      },
      web: {
        url: 'https://example.com',
        should_fallback: true,
      },
    },
    openGraph: {
      title: 'Next.js Template',
      description: `${t('description')}`,
      url: 'https://example.com',
      siteName: 'Next.js Template',
      images: [
        {
          url: '/images/banner.png',
          width: 310,
          height: 310,
        },
      ],
      locale: `${getCurrentLocale()}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Next.js Template',
      description: `${t('description')}`,
      creator: '@aletsdelarosa',
      images: ['/images/banner.png'],
    },
  };
}

export function generateStaticParams() {
  return getStaticParams();
}

// TODO: Set language for html tag.
// TODO: Change Body Font class.
// TODO: Change MS icons.
export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}): JSX.Element {
  setStaticParamsLocale(locale);

  return (
    <I18nProviderClient locale={locale}>
      <html lang={locale}>
        <head>
          <meta name='application-name' content='Next.js Template' />
          <meta name='msapplication-TileColor' content='#FFFFFF' />
          <meta
            name='msapplication-TileImage'
            content='/icons/mstile-144x144.png'
          />
          <meta
            name='msapplication-square70x70logo'
            content='/icons/mstile-70x70.png'
          />
          <meta
            name='msapplication-square150x150logo'
            content='/icons/mstile-150x150.png'
          />
          <meta
            name='msapplication-wide310x150logo'
            content='/icons/mstile-310x150.png'
          />
          <meta
            name='msapplication-square310x310logo'
            content='/icons/mstile-310x310.png'
          />
        </head>
        <body className={poppins.className}>{children}</body>
      </html>
    </I18nProviderClient>
  );
}
