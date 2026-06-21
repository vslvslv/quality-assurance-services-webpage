import './globals.css';

export const metadata = {
  title: 'QA Services - Vasil Vasilev',
  description: 'Professional Quality Assurance Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
