import AllTweets from '../components/AllTweets/AllTweets';
import Layout from '../components/Layout/Layout';
import { Button, BtnLink } from '../components/AllTweets/AllTweets.styled';
// import Link from 'next/link';

export default function AllTweetsPage() {
  return (
    <Layout>
      <main>
        <Button>
          <BtnLink href='/'>Go back</BtnLink>
        </Button>
        <AllTweets />
      </main>
    </Layout>
  );
}
