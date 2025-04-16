import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { BabyProvider } from '@/context/BabyContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BabyProvider>
      <Component {...pageProps} />
    </BabyProvider>
  );
}
