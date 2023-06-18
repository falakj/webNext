import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'webNext',
  description: 'This is some text!!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
             <Navbar />
              {children}
             <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
