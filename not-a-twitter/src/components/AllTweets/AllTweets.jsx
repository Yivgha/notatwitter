'use client'
import { Title } from "../../styles/global.styled";
import { TweetPage, AllItems, ItemList, LoadMore} from "./AllTweets.styled";
import { useEffect, useState} from 'react';
import OneTweet from "../OneTweet/OneTweet";
// import localUsers from "../../JSON/users.json" assert {type: "json"};

export default function AllTweets() {
    
    const [users, setUsers] = useState([]);

    const postsPerPage = 8;
    const [next, setNext] = useState(postsPerPage);
    const handleMoreImage = () => {
    setNext(next + postsPerPage);
    };  

    const userHandle = async() => {
        await fetch('https://63175f2282797be77ffb0ee4.mockapi.io/users', {
  method: 'GET',
  headers: {'content-type':'application/json'},
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
})
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