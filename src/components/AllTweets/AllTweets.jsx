'use client'
import { Title } from "../../styles/global.styled";
import { TweetPage, AllItems, ItemList, LoadMore} from "./AllTweets.styled";
import { useEffect, useState} from 'react';
import OneTweet from "../OneTweet/OneTweet";
// import Filter from "../Filter/Filter";

export default function AllTweets() {
    
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState([]);
    
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
        if (value === "Following") {
            selectedTrue();
            console.log("sel true");
        }
        if (value === "Follow") {
            selectedFalse();
            console.log("sel false");
        }
         return userHandle();
    };

    const selectedTrue = async () => {
         const filter = users.filter(id => id.active === true);
         setUsers(filter);
    };

     const selectedFalse = async () => {
         const filter = users.filter(id => id.active === false);
         setUsers(filter);
    };
    
     useEffect(() => {
         console.log('SELECTED:', selected);
     }, [selected]);

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
                {/* <Filter selected={selected} onChange={handleFilterInput}/>  */}
                <div>
                <h2>Filter cards</h2>
                 <div>
                    <select id="filter" selected={selected} onChange={handleFilterInput} style={{width: "200px", height: "50px"}}>
                        <option value="">Show all</option>
                        <option value="Follow">Follow</option>
                        <option value="Following">Following</option>
                    </select>
               </div>
            </div>
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