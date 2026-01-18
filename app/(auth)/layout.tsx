import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SUG HUB | Authentication',
  description: 'Sign in or create an account on SUG HUB',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}