import logo from "../../images/tweet/go-it-logo.png";
import toppic from "../../images/tweet/top-picture.png";
import { useState, useEffect } from "react";
import { TweetBox, MidLine, LogoImg, TopImg, AvatarBox,  TweetAvatar, DataBox, DataText, FollowBtn, BtnText} from "./OneTweet.styled";


export default function OneTweet({ id, tweets, avatar }) {

    const [followers, setFollowers] = useState(100500);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        if (followers === 100500) {
            setActive(true);
            setFollowers(followers + 1);


            const allUsers = JSON.parse(localStorage.getItem("users"));
        for (const i of allUsers) {
            if (i.id === id) {
                i.followers = followers + 1;
                i.active = true;
                console.log(i);
                allUsers[i] = i;
            };
             
            };
            
            localStorage.setItem("users", JSON.stringify(allUsers))
        }
        

        if (followers === 100501) {
            setActive(false);
            setFollowers(followers - 1);

        const allUsers = JSON.parse(localStorage.getItem("users"));
        for (const i of allUsers) {
            if (i.id === id) {
                i.followers = followers - 1;
                i.active = false;
                console.log(i);
                 allUsers[i] = i;
            }
           
            }
            
            localStorage.setItem("users", JSON.stringify(allUsers))
        }
   
    };

    return (
        <>
            <TweetBox key={id}>
                <LogoImg src={logo} alt="goit logo" width={76} height={22}/>
                <TopImg src={toppic} alt="top picture" width={308} height={168} />
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
                        
                        {followers.toLocaleString('en-US')} followers
                    </DataText>
                </DataBox>
                <FollowBtn type="button" onClick={handleClick} style={{ backgroundColor: active ?  "#5cd3a8" : "#ebd8ff"}}>
                    <BtnText>
                        {active ? "Following" : "Follow"}
                    </BtnText>
                    
                </FollowBtn>
            </TweetBox>
        </>
    )
}