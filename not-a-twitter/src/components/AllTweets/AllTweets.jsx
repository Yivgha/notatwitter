'use client'
import { Title } from "../../styles/global.styled";
import { TweetPage, AllItems, ItemList, LoadMore} from "./AllTweets.styled";
// import Link from "next/link";
import { useEffect, useState} from 'react';
import OneTweet from "../OneTweet/OneTweet";




export default function AllTweets() {
    const postsPerPage = 8;
    const [users, setUsers] = useState([]);
const [next, setNext] = useState(postsPerPage);

const handleMoreImage = () => {
    setNext(next + postsPerPage);
    };
    
    const fetchUsers = async () => {
        try {
            await fetch('https://63175f2282797be77ffb0ee4.mockapi.io/users')
                .then((res) => res.json())
                .then((result) => {
                    setUsers(result);
                    console.log("fetched!");
                    localStorage.setItem("users", JSON.stringify(result));
                });
        } catch (error) {
            console.log(error);
        }
            
    };
    
    useEffect(() => {
        fetchUsers();
    }, []);    
    
    return (
        <TweetPage>
        <Title>All Tweets</Title>
        <AllItems>
                {users?.slice(0, next)?.map((item, index) => (
                <ItemList key={index}>
                        {/* <Link href="/tweets/one-tweet" > */}
                        <OneTweet id={item.id} avatar={item.avatar} tweets={item.tweets}
                            />
                    {/* </Link> */}
                    </ItemList>
                ))}                
            </AllItems>
            {next < users.length && (
                    <LoadMore onClick={handleMoreImage}>Load more</LoadMore>
                )}
       </TweetPage>
    )
};