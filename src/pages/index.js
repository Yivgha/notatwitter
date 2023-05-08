import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import Home from '../components/Home/Home';

const HomePage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='../../public/favicon.ico' />
      </Head>
      <main>
        <Home />
      </main>
    </Layout>
  );
};

export default HomePage;
