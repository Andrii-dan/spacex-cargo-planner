import ReduxProvider from '@/redux/provider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

// Components
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/navbar/Navbar';

// Styles
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cargo Planner',
  description:
    'SpaceX is experiencing an increasing demand of shipments to Mars and has commissioned an application to automate the needed cargo space calculations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          <div className="flex flex-row h-[calc(100vh-4rem)] text-text-primary">
            <Sidebar />
            <div className="container flex mx-auto">{children}</div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
