import { Title } from "../../styles/global.styled";
import Link from "next/link";

import OneTweet from "../OneTweet/OneTweet";

export default function AllTweets() {
    return (
        <>

            <Title>All Tweets</Title>
            <Link href="/tweets/one-tweet">
                <OneTweet />
            </Link>

        </>
    )
};