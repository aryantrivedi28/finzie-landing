import './globals.css';
import { Roboto, Playfair_Display } from 'next/font/google';
import Header from "./components/Header";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
});

export const metadata = {
  title: 'Finzie Landing',
  description: 'Helping SMEs go digital with AI tools and expert freelancers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable}`}>
      <body className="font-body">
        <Header />
        {children}
      </body>
    </html>
  );
}
