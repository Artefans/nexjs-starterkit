import '../styles/static/common.scss';
import { Layout as BaseLayout } from '../components/common';

function MyApp({ Component, pageProps }) {
  if (Component.Layout === null) {
    return <Component {...pageProps} />;
  }

  const Layout = Component.Layout || BaseLayout;

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
