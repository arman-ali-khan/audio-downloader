import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return   <>
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
  <NextNProgress />
  <Component {...pageProps} />
</>
}
