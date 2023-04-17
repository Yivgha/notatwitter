'use client'
import { Title } from "../../styles/global.styled";
import { AllItems, ItemList} from "./AllTweets.styled";
// import Link from "next/link";
import { useEffect, useState, useRef} from 'react';
import OneTweet from "../OneTweet/OneTweet";

export default function AllTweets() {
    
    const [users, setUsers] = useState([]);


    const fetchUsers = async () => {
        try {
            await fetch('https://63175f2282797be77ffb0ee4.mockapi.io/users')
                .then((res) => res.json())
                .then((result) => {
                    setUsers(result);
                    // console.log(result);
                    console.log("fetched!");
                    
                        localStorage.setItem("users", JSON.stringify(result)) 
                    
                });
        } catch (error) {
            console.log(error);
        }
            
    };
    
    useEffect(() => {
        fetchUsers();
    }, []);    
    
    return (
        <>
            <Title>All Tweets</Title>
            
        <AllItems>
                {users.map((item) => (
                <ItemList key={item.id}>
                        {/* <Link href="/tweets/one-tweet" > */}
                        <OneTweet id={item.id} avatar={item.avatar} tweets={item.tweets} followers={item.followers}
                            />
                    {/* </Link> */}
                    </ItemList>
            ))}
            </AllItems>
            
       </>
    )
};