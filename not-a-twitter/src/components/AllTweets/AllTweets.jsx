import { Title } from "../../styles/global.styled";
import Layout from "../Layout/Layout";
import { Button } from "./AllTweets.styled";
import Head from "next/head";
import Link from 'next/link';

export default function AllTweets() {
    return (
        <Layout>
            <Head>
                <title>All Tweets</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Button>
                <Link href="/">
                    Go back
                </Link>
            </Button>
            <Title>All Tweets</Title>
        </Layout>
    )
};