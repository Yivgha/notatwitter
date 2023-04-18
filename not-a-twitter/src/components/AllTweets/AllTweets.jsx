'use client'
import { Title } from "../../styles/global.styled";
import { TweetPage, AllItems, ItemList, LoadMore} from "./AllTweets.styled";
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
        const url = new URL('https://63175f2282797be77ffb0ee4.mockapi.io/users');
        url.searchParams.append('page', 1);
        url.searchParams.append('limit', 8);
        
            await fetch(url, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    console.log(error.message);
                })
                .then((result) => {
                    setUsers(result);
                    // console.log("fetched!");
                    localStorage.setItem("users", JSON.stringify(result));
                }).catch(error => {
                    console.log(error)
                });
        
            
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
                        <OneTweet id={item.id} avatar={item.avatar} tweets={item.tweets}/>
                    </ItemList>
                ))}                
            </AllItems>
            {next < users.length && (
                    <LoadMore onClick={handleMoreImage}>Load more</LoadMore>
                )}
       </TweetPage>
    )
};