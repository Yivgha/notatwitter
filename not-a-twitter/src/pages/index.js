import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import Home from '../components/Home/Home';

export default function HomePage() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <Home />
      </main>
    </Layout>
  );
}
