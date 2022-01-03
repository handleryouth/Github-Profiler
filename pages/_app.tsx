import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "@fontsource/space-mono";
import "../scss/globals.scss";
import { Layout } from "components";
import { store } from "features";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Provider>
  );
}

export default MyApp;
