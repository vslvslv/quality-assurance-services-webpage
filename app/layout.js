import './globals.css';

const ORIGIN = 'https://vslvslv.github.io';
const SITE_URL = `${ORIGIN}/quality-assurance-services-webpage`;
const OG_IMAGE = `${SITE_URL}/og.png`;
const TITLE = 'Vasil Vasilev — QA Services & Test Automation';
const DESCRIPTION =
  'QA engineering and leadership with 15+ years across enterprise, fintech, and SaaS. Test automation, performance and API testing, test strategy, and CI/CD quality gates.';

export const metadata = {
  metadataBase: new URL(ORIGIN),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'QA',
    'Quality Assurance',
    'Test Automation',
    'Playwright',
    'Selenium',
    'Cypress',
    'Performance Testing',
    'API Testing',
    'Vasil Vasilev',
  ],
  authors: [{ name: 'Vasil Vasilev' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Vasil Vasilev — QA Services',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
