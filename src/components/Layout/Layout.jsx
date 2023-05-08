import { Container } from "./Layout.styled";
import Head from 'next/head';

export const siteTitle = 'No Twitter App';

export default function Layout({ children }) {
  return (
    <Container>
     <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Trying to create app with tweets"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
    {children}
    </Container>
  )
}