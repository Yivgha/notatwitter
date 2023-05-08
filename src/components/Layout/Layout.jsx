import { Container } from "./Layout.styled";
import Head from 'next/head';

export const siteTitle = 'No Twitter App';

export default function Layout({ children }) {
  return (
    <Container>
     <Head>
      </Head>
    {children}
    </Container>
  )
}