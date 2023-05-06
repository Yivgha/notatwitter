import { useState } from "react";
import logo from "../../images/tweet/go-it-logo.png";
import toppic from "../../images/tweet/top-picture.png";
import { TweetBox, MidLine, LogoImg, TopImg, AvatarBox,  TweetAvatar, DataBox, DataText, FollowBtn, BtnText} from "./OneTweet.styled";


export default function OneTweet({ id, tweets, avatar, followers, active }) {
    const [myFollowers, setFollowers] = useState(() => { if (!followers && active === false) {return "100500"} else if(!followers && active === true){return "100501"} followers});
    const [myActive, setActive] = useState(active);

    const savedValue = JSON.parse(localStorage.getItem("users"));

    const url = new URL('https://63175f2282797be77ffb0ee4.mockapi.io/users');

    const updFetchIncrease = async () => {
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ active: true,  followers: "100501" })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            console.log(error);
        }).then(el => {
            localStorage.setItem("users", JSON.stringify(savedValue));
        }).catch(error => {
            console.log(error);
        })
    };

    const updFetchDecrease = async () => {
       await  fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ active: false, followers: "100500"})
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            console.log(error);
        }).then(el => {
            localStorage.setItem("users", JSON.stringify(savedValue));
        }).catch(error => {
           console.log(error);
        })
    }

    const handleClick = () => {
        savedValue.filter(item => {
            if (item.id === id) {
                if (myActive === false) {
                   item.active = true;
                    item.followers = "100501";
                    setActive(true);
                    setFollowers(("100501").toLocaleString('en-US'));
                    updFetchIncrease();
                    localStorage.setItem("users", JSON.stringify(savedValue));
                };
                if (myActive === true) {
                    item.active = false;
                    item.followers = "100500";
                    setActive(false);
                    setFollowers(("100500").toLocaleString('en-US'));
                    updFetchDecrease();
                    localStorage.setItem("users", JSON.stringify(savedValue));
                };
            };
        });
    };

    return (
        <>
            <TweetBox key={id}>
                <LogoImg src={logo} alt="goit logo" width={76} height={22} priority={true}/>
                <TopImg src={toppic} alt="top picture" width={308} height={168} priority={true} />
                <MidLine>
                    <AvatarBox>
                        <TweetAvatar src={avatar} alt="user avatar" width={62} height={62}/>
                    </AvatarBox>
                </MidLine>
                <DataBox>
                    <DataText>
                    {tweets} tweets
                    </DataText>
                    <DataText>
                        {myFollowers ? parseInt(myFollowers)?.toLocaleString('en-US') : parseInt(followers)?.toLocaleString('en-US')} followers
                    </DataText>
                </DataBox>
                <FollowBtn type="button" onClick={handleClick}
                    style={{ backgroundColor: myActive ? "#5cd3a8" : "#ebd8ff" }}
                >
                    <BtnText> 
                        {myActive ? "Following" : "Follow"}
                        
                    </BtnText>
                    
                </FollowBtn>
            </TweetBox>
        </>
    )
}