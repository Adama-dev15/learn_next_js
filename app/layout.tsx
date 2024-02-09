import '@/app/ui/global.css';
import { khand } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${khand.className}'}>{children}</body>
    </html>
  );
}
