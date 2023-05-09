'use client'
// import { useMemo } from "react";
import { Title } from "../../styles/global.styled";
import { TweetPage, AllItems, ItemList, LoadMore} from "./AllTweets.styled";
import { useEffect, useState} from 'react';
import OneTweet from "../OneTweet/OneTweet";

export default function AllTweets() {

    const selectedOptions = [
        { label: "Show all", value: "", followers: "" },
        { label: "Follow", value: "Follow", followers: "100500" },
        { label: "Following", value: "Following", followers: "100501" },
    ];
    
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState(selectedOptions[0]);
    const [selectedCategory, setSelectedCategory] = useState();
    

    const postsPerPage = 4;
    const limitPerPage = 12;
    const [next, setNext] = useState(postsPerPage);
    const [page, setPage] = useState(1);

    const handleMoreImage = () => {
        setNext(next + postsPerPage);
        setPage(page + 1);
    };  

// function getFilteredList() {
//     if (!selectedCategory) {
//      return users;
//     }
//     return users.filter((item) => item.followers === selectedCategory);
//   }
    // var filteredList = useMemo(getFilteredList, [selectedCategory, users]);

    const filteredList = users.filter((item) => {
        if (!selectedCategory || selectedCategory === "") {
            return users
        } else {
return item.followers === selectedCategory
        }
        
    });

    function handleCategoryChange(event) {
    setSelected(event.target.value);
    setSelectedCategory(event.target.value);
  }

    
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
                        <select id="filter" value={selected}
                            name="category-list"
                            onChange={handleCategoryChange}
                            style={{ width: "200px", height: "50px" }}>
                            {selectedOptions.map(tag => (
                                <option key={tag.value} value={tag.followers}>{tag.label}</option>
                            ))}
                    </select>
                    </div>
                </div>
                
                <AllItems>
                    {filteredList?.length > 0 ? 
                    (filteredList?.slice(0, next).map((item, index) => (
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
             {filteredList?.length > 0 ? (next < users?.length && (
                    <LoadMore onClick={handleMoreImage}>Load more</LoadMore>
                )) : null}
       </TweetPage>
    )
};