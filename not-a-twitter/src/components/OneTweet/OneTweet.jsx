import logo from "../../images/tweet/go-it-logo.png";
import toppic from "../../images/tweet/top-picture.png";
import { useState, useEffect } from "react";
import { TweetBox, MidLine, LogoImg, TopImg, AvatarBox,  TweetAvatar, DataBox, DataText, FollowBtn, BtnText} from "./OneTweet.styled";


export default function OneTweet({ id, tweets, avatar, followers, active}) {

    const handleClick = () => {
        const allUsers = JSON.parse(localStorage.getItem("users"));
        for (const i of allUsers) {
            if (i.id === id) {
                if (i.active === false) {
                    i.followers = followers + 1;
                    i.active = true;
                console.log(i);
                localStorage.setItem("users", JSON.stringify(allUsers));
                }
               else if(i.active === true){
                i.followers = followers - 1;
                    i.active = false;
                    // FollowBtn { backgroundColor: "#5cd3a8" };
                console.log(i);
                localStorage.setItem("users", JSON.stringify(allUsers));
                };
            }
        };
   }

    // useEffect(() => {
    //    JSON.parse(localStorage.getItem("users"));
    // }, []);

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
                <FollowBtn type="button" onClick={handleClick}
                    style={{ backgroundColor: active === true ? "#5cd3a8" : "#ebd8ff" }}
                    // style={{ backgroundColor: "#ebd8ff" }}
                >
                    <BtnText> 
                        {active === true ? "Following" : "Follow"}
                    </BtnText>
                    
                </FollowBtn>
            </TweetBox>
        </>
    )
}