import type {Metadata} from 'next';
import { Fredoka, Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const fredoka = Fredoka({ // Changed from Fredoka_One as it's more versatile
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Fredoka One only has 400. Fredoka has more.
  variable: '--font-fredoka',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: "tomb's CyberDeck",
  description: 'Portfolio of tommarcusbrut - DevOps and Cybersecurity Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        fredoka.variable,
        inter.variable,
        robotoMono.variable,
        "antialiased min-h-screen flex flex-col"
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
