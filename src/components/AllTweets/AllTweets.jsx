'use client'
import { Title } from "../../styles/global.styled";
import { TweetPage, AllItems, ItemList, LoadMore} from "./AllTweets.styled";
import { useEffect, useState} from 'react';
import OneTweet from "../OneTweet/OneTweet";

export default function AllTweets() {
    
    const [users, setUsers] = useState([]);

    const postsPerPage = 4;
    const limitPerPage = 12;
    const [next, setNext] = useState(postsPerPage);
    const [page, setPage] = useState(1);

    const handleMoreImage = () => {
        setNext(next + postsPerPage);
        setPage(page + 1);
    };  

    const url = new URL('https://63175f2282797be77ffb0ee4.mockapi.io/users');
    url.searchParams.append("page", page);
    url.searchParams.append('limit', limitPerPage);
    
    const userHandle = async() => {
        await fetch(`${url}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            console.log(error);
        }).then(tweets => {
            setUsers(tweets);
            localStorage.setItem("users", JSON.stringify(tweets))
        }).catch(error => {
            console.log(error);
        });
    };
   
    useEffect(() => {
        userHandle();
        JSON.parse(localStorage.getItem("users"));
    }, []);

    
        return (
        <TweetPage>
            <Title>Your tweets:</Title>
          
        <AllItems>
                {users?.slice(0, next)?.map((item, index) => (
                <ItemList key={index}>
                        <OneTweet id={item.id} avatar={item.avatar} tweets={item.tweets}
                            followers={item.followers} active={item.active} />
                    </ItemList>
                ))}                
            </AllItems>
            {next < users?.length && (
                    <LoadMore onClick={handleMoreImage}>Load more</LoadMore>
                )}
       </TweetPage>
    )
};