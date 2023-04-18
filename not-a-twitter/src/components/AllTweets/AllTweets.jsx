'use client'
import { Title } from "../../styles/global.styled";
import { TweetPage, AllItems, ItemList, LoadMore} from "./AllTweets.styled";
import { useEffect, useState} from 'react';
import OneTweet from "../OneTweet/OneTweet";
import localUsers from "../../JSON/users.json" assert {type: "json"};

export default function AllTweets() {
    const postsPerPage = 8;
    const [users, setUsers] = useState([]);
    const [next, setNext] = useState(postsPerPage);

const handleMoreImage = () => {
    setNext(next + postsPerPage);
    };    
   
    useEffect(() => {
        if (users) {
            JSON.parse(localStorage.getItem("users"));
        } setUsers(localUsers);
        localStorage.setItem("users", JSON.stringify(localUsers)); 
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