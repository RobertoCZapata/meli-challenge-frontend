import "../styles/Globals.scss";
import "../styles/ItemDescription.scss";
import "../styles/ListItem.scss";
import "../styles/SearchBar.scss";
import "../styles/Main.scss";
import "../styles/Breadcrumb.scss";

import AppState from "../src/context/appState";
import { Layout } from "../src/components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <AppState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppState>
  );
}

export default MyApp;
