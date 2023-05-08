import { useEffect, useState } from "react";
import { Select } from "./Filter.styled";

const Filter = (page, limitPerPage, setUsers, selected, handleFilterInput) => {
     
    // const [selected, setSelected] = useState([]);

    // const url = new URL('https://63175f2282797be77ffb0ee4.mockapi.io/users');
    // url.searchParams.append('active', false);


    // const handleFilterInput = (event) => {
    //     const value = event.target.value;
    //     setSelected(value);
    //     if (selected === "Following") {
    //         selectedTrue();
    //         setUsers(selected);
    //     }
    //     if (selected === "Follow") {
    //         selectedFalse();
    //         setUsers(selected);
    //     }
        
    // };

    //  const selectedTrue = async () => {
    //     const url = new URL('https://63175f2282797be77ffb0ee4.mockapi.io/users?active=true');
    //     url.searchParams.append("page", page);
    // url.searchParams.append('limit', limitPerPage);
    //     await fetch(url, {
    //         method: "GET",
    //         headers: { 'content-type': "application/json" },
    //     }).then(res => {
    //         if (res.ok) {
    //             return res.json();
    //         }
    //         console.log(error);
    //     }).then(tweets => {
    //         setUsers(tweets);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // };

    //  const selectedFalse = async () => {
    //      const url = new URL('https://63175f2282797be77ffb0ee4.mockapi.io/users?active=false');
    //      url.searchParams.append("page", page);
    // url.searchParams.append('limit', limitPerPage);
    //            await fetch(url, {
    //                 method: "GET",
    //                 headers: { 'content-type': "application/json" },
    //             }).then(res => {
    //                 if (res.ok) {
    //                     return res.json();
    //                 }
    //                 console.log(error);
    //             }).then(tweets => {
    //                 setUsers(tweets);
    //             }).catch(error => {
    //                 console.log(error);
    //             });
    // };
    
    //  useEffect(() => {
    //      console.log('SELECTED:', selected);
    //     //  selectedFalse();
    //     //  selectedTrue();
    //  }, [selected]);

    return (
        <>
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
            
        </>
    )
};

export default Filter;