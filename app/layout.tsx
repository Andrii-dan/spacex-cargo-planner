import ReduxProvider from '@/redux/provider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

// Components
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

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
          <div className="flex flex-row h-[calc(100vh-4rem)]">
            <Sidebar />
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
