import type {Metadata} from 'next';
import {Container} from '@chakra-ui/react';
import {Providers} from '@/context/chakra-provider';
import './globals.css';
import {ttCommons} from '../../public/fonts';

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ttCommons.className}>
        <Providers>
          <Container maxW="74rem" padding="1.5rem" paddingBottom="200px">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}

export {metadata};
