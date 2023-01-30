import '../styles/Globals.scss';
import '../styles/ItemDescription.scss';
import '../styles/ListItem.scss';
import '../styles/SearchBar.scss';
import '../styles/Main.scss';
import '../styles/Breadcrumb.scss';

import { Layout } from '../src/components/layout';
import { AppContextProvider } from '../src/context/AppContext';

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
