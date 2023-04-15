import OneTweet from '@/components/OneTweet/OneTweet';
import Layout, { siteTitle } from '@/components/Layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/AllTweets/AllTweets.styled';
import { Title } from '@/styles/global.styled';

export default function OneTweetPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Button>
          <Link href='/tweets/all-tweets'>Go back</Link>
        </Button>
        <Title>One Tweet</Title>
        <OneTweet />
      </main>
    </Layout>
  );
}
