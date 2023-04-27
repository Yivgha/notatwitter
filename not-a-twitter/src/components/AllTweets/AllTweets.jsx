'use client'
import { Title } from "../../styles/global.styled";
import { TweetPage, AllItems, ItemList, LoadMore} from "./AllTweets.styled";
import { useEffect, useState} from 'react';
import OneTweet from "../OneTweet/OneTweet";
import localUsers from "../../JSON/users.json" assert {type: "json"};

export default function AllTweets() {
    const postsPerPage = 8;
    const [users, setUsers] = useState(localUsers || JSON.parse(localStorage.getItem("users")));
    const [next, setNext] = useState(postsPerPage);
    

const handleMoreImage = () => {
    setNext(next + postsPerPage);
    };    

    const userHandle = () => {
        const savedValue = JSON.parse(localStorage.getItem("users"));
        if (savedValue != localUsers) {
            setUsers(savedValue);
            localStorage.setItem("users", JSON.stringify(savedValue));
        }        
    }
   
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(localUsers));
    }, []);
    useEffect(() => {
        userHandle();
    }, [])

    
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