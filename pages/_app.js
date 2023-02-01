import '../styles/Globals.scss';

import { Layout } from 'components/layout';
import { AppContextProvider } from 'context/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;