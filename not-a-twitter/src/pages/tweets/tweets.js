import AllTweets from '../../components/AllTweets/AllTweets';
import Layout, { siteTitle } from '../../components/Layout/Layout';
import { Button } from '../../components/AllTweets/AllTweets.styled';
import Link from 'next/link';
import Head from 'next/head';

export default function AllTweetsPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Button>
          <Link href='/'>Go back</Link>
        </Button>
        <AllTweets />
      </main>
    </Layout>
  );
}
