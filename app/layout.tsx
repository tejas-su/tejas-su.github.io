import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/custom-cursor'
import { DotBackground } from '@/components/dot-background'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tejas-su.github.io'),
  title: {
    default: 'S U Tejas — Associate Software Engineer',
    template: '%s | S U Tejas',
  },
  description:
    'S U Tejas is an Associate Software Engineer at Melento, specializing in Flutter, BLoC, and Clean Architecture. Explore projects including Cardamom Care, Scribble, Shrine, and more.',
  keywords: [
    'S U Tejas',
    'Tejas',
    'Associate Software Engineer',
    'Flutter Developer',
    'Mobile App Developer',
    'BLoC',
    'Clean Architecture',
    'Melento',
    'Widgets & Co',
    'Cardamom Care',
    'Scribble',
    'Portfolio',
    'Flutter',
    'Dart',
    'India',
  ],
  authors: [{ name: 'S U Tejas', url: 'https://github.com/tejas-su' }],
  creator: 'S U Tejas',
  publisher: 'S U Tejas',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://tejas-su.github.io',
    siteName: 'S U Tejas — Portfolio',
    title: 'S U Tejas — Associate Software Engineer',
    description:
      'Flutter developer specializing in BLoC, Clean Architecture, and real-time mobile experiences. Currently at Melento.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'S U Tejas — Associate Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S U Tejas — Associate Software Engineer',
    description:
      'Flutter developer specializing in BLoC, Clean Architecture, and real-time mobile experiences. Currently at Melento.',
    creator: '@tejas_s_u',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
  verification: {
    google: '',   // Add your Google Search Console verification token here
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          <DotBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
