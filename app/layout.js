import './globals.css';

const SITE_URL = 'https://vslvslv.github.io/quality-assurance-services-webpage';
const TITLE = 'Vasil Vasilev — QA Services & Test Automation';
const DESCRIPTION =
  'QA engineering and leadership with 15+ years across enterprise, fintech, and SaaS. Test automation, performance and API testing, test strategy, and CI/CD quality gates.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
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
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
