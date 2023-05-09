'use client'
import { Title } from "../../styles/global.styled";
import { TweetPage, AllItems, ItemList, LoadMore} from "./AllTweets.styled";
import { useEffect, useState} from 'react';
import OneTweet from "../OneTweet/OneTweet";
// import Filter from "../Filter/Filter";

export default function AllTweets() {

    const selectedOptions = [
        { label: "Show all", value: 0 },
        { label: "Follow", value: 1 },
        { label: "Following", value: 2 },
    ];
    
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState(selectedOptions[0]);
    
    const postsPerPage = 4;
    const limitPerPage = 12;
    const [next, setNext] = useState(postsPerPage);
    const [page, setPage] = useState(1);

    const handleMoreImage = () => {
        setNext(next + postsPerPage);
        setPage(page + 1);
    };  

     const handleFilterInput = (event) => {
        const value = event.target.value;
         setSelected(value);
    };

    const filteredUsers = users.filter((filEl) => {
        console.log(selected.label);
        if (selected.label === "Follow") {
            return filEl.followers === "100500"            
        } else if (selected.label === "Following") {
            return filEl.followers === "100501";
        } else {
            return filEl;
        }
    })


    const url = new URL('https://63175f2282797be77ffb0ee4.mockapi.io/users');
     url.searchParams.append("page", page);
    url.searchParams.append('limit', limitPerPage);
    
    const userHandle = async () => {
        await fetch(url, {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
        return (
        <TweetPage>
            <Title>Your tweets:</Title>
               
                <div>
                    <h2>Filter cards</h2>
                    <div>
                    <select id="filter" value={selected} onChange={handleFilterInput} style={{width: "200px", height: "50px"}}>
                            {selectedOptions.map(tag => (
                                <option key={tag.value} value={tag.value}>{tag.label}</option>
                            ))}
                    </select>
                    </div>
                </div>
                
                <AllItems>
                    {filteredUsers?.length > 0 ? 
                    (filteredUsers?.slice(0, next).map((item, index) => (
                <ItemList key={index}>
                        <OneTweet id={item.id} avatar={item.avatar} tweets={item.tweets}
                            followers={item.followers} active={item.active} />
                    </ItemList>
                    ))) :
                        <h1>No tweets found</h1>
                }

                {/* {users?.slice(0, next).map((item, index) => (
                <ItemList key={index}>
                        <OneTweet id={item.id} avatar={item.avatar} tweets={item.tweets}
                            followers={item.followers} active={item.active} />
                    </ItemList>
                ))} */}
                    
            </AllItems>
            {next < users?.length && (
                    <LoadMore onClick={handleMoreImage}>Load more</LoadMore>
                )}
       </TweetPage>
    )
};