// pages/_app.js

import { AuthProvider } from '../authContext';
import '../styles/globals.css';
import 'katex/dist/katex.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
